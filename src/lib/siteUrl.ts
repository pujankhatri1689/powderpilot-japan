/**
 * Centralized site URL resolver with automatic Vercel production & preview fallbacks.
 *
 * Priority order:
 * 1. NEXT_PUBLIC_SITE_URL (explicit manual config in .env or Vercel dashboard)
 * 2. VERCEL_PROJECT_PRODUCTION_URL (canonical custom / vercel.app domain on production deploys)
 * 3. VERCEL_URL (preview deployment domain)
 * 4. http://localhost:3000 (local development fallback)
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    const host = process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, "");
    return host.startsWith("http") ? host : `https://${host}`;
  }

  if (process.env.VERCEL_URL) {
    const host = process.env.VERCEL_URL.replace(/\/$/, "");
    return host.startsWith("http") ? host : `https://${host}`;
  }

  return "http://localhost:3000";
}
