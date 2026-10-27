import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_FILE = path.resolve(__dirname, "../public/data/japan-prefectures.json");

function distance(p1, p2) {
  const dx = p1[0] - p2[0];
  const dy = p1[1] - p2[1];
  return Math.sqrt(dx * dx + dy * dy);
}

function perpendicularDistance(p, lineStart, lineEnd) {
  const dx = lineEnd[0] - lineStart[0];
  const dy = lineEnd[1] - lineStart[1];
  if (dx === 0 && dy === 0) return distance(p, lineStart);
  const u =
    ((p[0] - lineStart[0]) * dx + (p[1] - lineStart[1]) * dy) /
    (dx * dx + dy * dy);
  const clampedU = Math.max(0, Math.min(1, u));
  const proj = [lineStart[0] + clampedU * dx, lineStart[1] + clampedU * dy];
  return distance(p, proj);
}

function simplifyRDP(points, epsilon) {
  if (points.length <= 2) return points;
  let maxDist = 0;
  let index = 0;
  for (let i = 1; i < points.length - 1; i++) {
    const d = perpendicularDistance(
      points[i],
      points[0],
      points[points.length - 1]
    );
    if (d > maxDist) {
      maxDist = d;
      index = i;
    }
  }
  if (maxDist > epsilon) {
    const left = simplifyRDP(points.slice(0, index + 1), epsilon);
    const right = simplifyRDP(points.slice(index), epsilon);
    return left.slice(0, left.length - 1).concat(right);
  } else {
    return [points[0], points[points.length - 1]];
  }
}

async function main() {
  console.log("Fetching Japan administrative boundary GeoJSON...");
  const res = await fetch(
    "https://raw.githubusercontent.com/dataofjapan/land/master/japan.geojson"
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch geojson: ${res.status}`);
  }
  const rawData = await res.json();

  console.log(`Processing ${rawData.features.length} prefectures...`);

  // Epsilon ~0.009 provides sharp inland boundaries and crisp coastlines
  const epsilon = 0.009;

  const simplified = {
    type: "FeatureCollection",
    features: rawData.features.map((f) => {
      let geom = f.geometry;

      const simplifyRing = (ring) => {
        const simplifiedRing = simplifyRDP(ring, epsilon).map((pt) => [
          Number(pt[0].toFixed(3)),
          Number(pt[1].toFixed(3)),
        ]);
        if (simplifiedRing.length < 4) {
          return ring.map((pt) => [
            Number(pt[0].toFixed(3)),
            Number(pt[1].toFixed(3)),
          ]);
        }
        return simplifiedRing;
      };

      if (geom.type === "Polygon") {
        geom = {
          type: "Polygon",
          coordinates: geom.coordinates.map(simplifyRing),
        };
      } else if (geom.type === "MultiPolygon") {
        geom = {
          type: "MultiPolygon",
          coordinates: geom.coordinates.map((poly) => poly.map(simplifyRing)),
        };
      }

      // Clean region name for our catalog mapping (e.g. "Nagano Ken" -> "Nagano", "Hokkai Do" -> "Hokkaido")
      let cleanName = f.properties.nam.trim();
      if (cleanName.toLowerCase() === "hokkai do") {
        cleanName = "Hokkaido";
      } else {
        cleanName = cleanName.replace(/\s+(Ken|Fu|To)$/i, "").trim();
      }

      return {
        type: "Feature",
        id: f.properties.id,
        properties: {
          id: f.properties.id,
          name: cleanName,
          nameJa: f.properties.nam_ja,
          nameOfficial: f.properties.nam,
        },
        geometry: geom,
      };
    }),
  };

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(simplified));

  const stats = fs.statSync(OUT_FILE);
  console.log(
    `✅ Successfully saved ${OUT_FILE} (${Math.round(stats.size / 1024)} KB)`
  );
}

main().catch((err) => {
  console.error("Error generating prefectures geojson:", err);
  process.exit(1);
});
