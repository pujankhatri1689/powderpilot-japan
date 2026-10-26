import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ICONS_DIR = path.resolve(__dirname, "../public/icons");

if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

// CRC32 table
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, "ascii");
  data.copy(chunk, 8);
  const typeAndData = chunk.subarray(4, 8 + len);
  const crc = crc32(typeAndData);
  chunk.writeUInt32BE(crc, 8 + len);
  return chunk;
}

function createPng(size) {
  const width = size;
  const height = size;
  const stride = width * 4;
  const rawData = Buffer.alloc((stride + 1) * height);

  // Background: Deep Slate #0f172a (15, 23, 42)
  // Rounded squircle / circular badge with border #38bdf8 (56, 189, 248)
  const center = size / 2;
  const radius = size * 0.46;
  const innerRadius = size * 0.43;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * (stride + 1);
    rawData[rowOffset] = 0; // Filter type 0 (None)

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const dx = x - center;
      const dy = y - center;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Dark mountain night base
      let r = 15;
      let g = 23;
      let b = 42;
      let a = 255;

      if (dist <= radius && dist >= innerRadius) {
        // Cyan cyan border #38bdf8
        r = 56;
        g = 189;
        b = 248;
      } else if (dist < innerRadius) {
        // Dark interior #0b1324
        r = 11;
        g = 19;
        b = 36;

        // Snowflake geometry
        const absX = Math.abs(dx);
        const absY = Math.abs(dy);
        const armWidth = Math.max(2, Math.round(size * 0.035));
        const armLength = size * 0.32;

        // Cross arms
        const onVertical = absX <= armWidth && absY <= armLength;
        const onHorizontal = absY <= armWidth && absX <= armLength;

        // Diagonal arms (rotate 45 deg)
        const diagDist1 = Math.abs(dx - dy) / Math.SQRT2;
        const diagDist2 = Math.abs(dx + dy) / Math.SQRT2;
        const diagLen = Math.sqrt(dx * dx + dy * dy);
        const onDiag1 = diagDist1 <= armWidth && diagLen <= armLength;
        const onDiag2 = diagDist2 <= armWidth && diagLen <= armLength;

        // Small hexagonal crystal center
        const inCenterHex = diagLen <= size * 0.08;

        if (onVertical || onHorizontal || onDiag1 || onDiag2 || inCenterHex) {
          // Pure white/cyan ice snowflake
          r = 240;
          g = 249;
          b = 255;
        } else if (diagLen <= size * 0.28 && (absX === absY || Math.abs(absX - absY) <= armWidth)) {
          // Branch spurs
          r = 56;
          g = 189;
          b = 248;
        }
      }

      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const deflated = zlib.deflateSync(rawData);

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8 bit depth
  ihdr[9] = 6; // Color type 6 (RGBA)
  ihdr[10] = 0; // Compression
  ihdr[11] = 0; // Filter
  ihdr[12] = 0; // Interlace

  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdrChunk = makeChunk("IHDR", ihdr);
  const idatChunk = makeChunk("IDAT", deflated);
  const iendChunk = makeChunk("IEND", Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const p192 = createPng(192);
fs.writeFileSync(path.join(ICONS_DIR, "icon-192.png"), p192);
console.log("✓ Created public/icons/icon-192.png");

const p512 = createPng(512);
fs.writeFileSync(path.join(ICONS_DIR, "icon-512.png"), p512);
console.log("✓ Created public/icons/icon-512.png");

const pMaskable = createPng(512);
fs.writeFileSync(path.join(ICONS_DIR, "icon-maskable-512.png"), pMaskable);
console.log("✓ Created public/icons/icon-maskable-512.png");
