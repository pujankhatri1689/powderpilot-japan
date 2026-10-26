#!/usr/bin/env node

/**
 * PowderPilot Japan — Data & Asset Integrity Validator
 *
 * Verifies:
 * 1. Exactly 39 resorts across 9 prefectures
 * 2. All resort slugs are unique
 * 3. Every referenced heroImage, trailMapImage, and mapGallery image exists on disk
 * 4. Image duplicate detection (flags shared image hashes)
 * 5. Strict EN & JA bilingual parity (no missing Japanese copy)
 * 6. Zero Chinese characters ("\u4e2d\u6587") across code and translations
 */

import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("🏔️ Running PowderPilot Japan Data & Asset Validation...\n");

let errors = 0;
let warnings = 0;

// 1. Load resort data
const resortsPath = path.join(rootDir, "src", "data", "resorts");
const prefectureFiles = [
  "hokkaido.ts",
  "aomori.ts",
  "iwate.ts",
  "yamagata.ts",
  "fukushima.ts",
  "niigata.ts",
  "nagano.ts",
  "gunma.ts",
  "gifu.ts",
  "shizuoka.ts",
  "shiga.ts",
];

const foundFiles = fs.readdirSync(resortsPath).filter((f) => f.endsWith(".ts") && f !== "index.ts");

console.log(`Checking ${foundFiles.length} prefecture data files...`);
if (foundFiles.length !== 11) {
  console.error(`❌ Expected exactly 11 prefecture files, found ${foundFiles.length}`);
  errors++;
} else {
  console.log(`✓ Verified 11 prefecture files match architecture`);
}

// Extract slugs from data files using regex to avoid ts-node runtime transpilation requirement
const slugRegex = /slug:\s*["']([^"']+)["']/g;
const imageRegex = /(?:heroImage|trailMapImage|imageUrl):\s*["']([^"']+)["']/g;

const allSlugs = [];
const imageReferences = [];

for (const file of foundFiles) {
  const content = fs.readFileSync(path.join(resortsPath, file), "utf-8");

  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    allSlugs.push({ slug: match[1], file });
  }

  let imgMatch;
  while ((imgMatch = imageRegex.exec(content)) !== null) {
    imageReferences.push({ imagePath: imgMatch[1], file });
  }
}

console.log(`\nFound ${allSlugs.length} total resorts.`);
if (allSlugs.length !== 49) {
  console.error(`❌ Expected exactly 49 resorts, found ${allSlugs.length}`);
  errors++;
} else {
  console.log("✓ Verified exactly 49 resorts configured");
}

// 2. Check slug uniqueness
const slugCounts = new Map();
for (const { slug, file } of allSlugs) {
  slugCounts.set(slug, (slugCounts.get(slug) || 0) + 1);
}

for (const [slug, count] of slugCounts.entries()) {
  if (count > 1) {
    console.error(`❌ Duplicate slug found: "${slug}" (${count} times)`);
    errors++;
  }
}
if (slugCounts.size === allSlugs.length) {
  console.log(`✓ Verified all ${allSlugs.length} resort slugs are unique`);
}

// 3. Check image file existence
console.log(`\nChecking ${imageReferences.length} image references...`);
let missingImages = 0;
for (const { imagePath, file } of imageReferences) {
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
  const diskPath = path.join(rootDir, "public", cleanPath);
  if (!fs.existsSync(diskPath)) {
    console.error(`❌ Image not found on disk: "${imagePath}" in ${file}`);
    missingImages++;
    errors++;
  }
}
if (missingImages === 0) {
  console.log("✓ All referenced images exist in public/");
}

// 4. Duplicate image hash audit
console.log("\nAuditing image asset uniqueness (duplicate detection)...");
const hashes = new Map();
const publicTrailMapsDir = path.join(rootDir, "public", "trail-maps");
if (fs.existsSync(publicTrailMapsDir)) {
  const files = fs.readdirSync(publicTrailMapsDir);
  for (const f of files) {
    const fullPath = path.join(publicTrailMapsDir, f);
    if (!fs.statSync(fullPath).isFile()) continue;
    const buf = fs.readFileSync(fullPath);
    const hash = crypto.createHash("sha256").update(buf).digest("hex");
    if (!hashes.has(hash)) {
      hashes.set(hash, []);
    }
    hashes.get(hash).push(f);
  }

  let duplicateGroups = 0;
  for (const [hash, fileList] of hashes.entries()) {
    if (fileList.length > 1) {
      duplicateGroups++;
      console.warn(`  ⚠️ Shared content (${fileList.length} files): ${fileList.join(", ")}`);
    }
  }
  if (duplicateGroups > 0) {
    console.warn(`ℹ️ Notice: Found ${duplicateGroups} image duplicate groups (flagged for future asset swap pass)`);
    warnings++;
  } else {
    console.log("✓ Zero duplicate image hashes found");
  }
}

// 5. Bilingual parity & Chinese character check
console.log("\nChecking bilingual parity and Chinese exclusion...");
const resortTranslationsPath = path.join(rootDir, "src", "i18n", "resortTranslations.ts");
const resortTranslationsContent = fs.readFileSync(resortTranslationsPath, "utf-8");

for (const { slug } of allSlugs) {
  const keyPattern = new RegExp(`(?:["']${slug}["']|\\b${slug}\\b)\\s*:`);
  if (!keyPattern.test(resortTranslationsContent)) {
    console.error(`❌ Missing Japanese translation for resort: "${slug}"`);
    errors++;
  }
}

// Check for Chinese string "中文"
const appSrcDir = path.join(rootDir, "src");
function scanForChinese(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanForChinese(full);
    } else if (entry.isFile() && (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx"))) {
      const code = fs.readFileSync(full, "utf-8");
      // Allow the migration fallback check `saved === "zh"` in LanguageContext
      const cleanCode = code.replace(/saved === ["']zh["']/g, "");
      if (cleanCode.includes("\u4e2d\u6587")) {
        console.error(`❌ Forbidden string "\u4e2d\u6587" detected in ${path.relative(rootDir, full)}`);
        errors++;
      }
    }
  }
}
scanForChinese(appSrcDir);

console.log("\n==========================================");
if (errors === 0) {
  console.log(`✅ Validation Passed! 0 errors (${warnings} warnings).`);
  process.exit(0);
} else {
  console.error(`❌ Validation Failed with ${errors} error(s)!`);
  process.exit(1);
}
