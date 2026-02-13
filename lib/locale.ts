import { headers } from "next/headers";

export type Region = "us-ca" | "uk";

/** Get client IP from common proxy headers (Railway, Vercel, etc.). */
function getClientIp(h: Headers): string | null {
  const forwarded = h.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return h.get("x-real-ip") ?? null;
}

/** Look up country code from IP using free ip-api.com (no key, 45 req/min). */
async function getCountryFromIp(ip: string): Promise<string | null> {
  if (!ip || ip === "127.0.0.1" || ip.startsWith("::")) return null;
  try {
    const res = await fetch(`https://ip-api.com/json/${ip}?fields=countryCode`, {
      next: { revalidate: 3600 },
    });
    const data = (await res.json()) as { countryCode?: string };
    return data.countryCode?.toUpperCase() ?? null;
  } catch {
    return null;
  }
}

/**
 * Determine region from request (Cloudflare geo, IP lookup on Railway, or Accept-Language).
 * US/CA → napkin with US toll-free; UK → napkin with UK toll-free.
 */
export async function getRegion(): Promise<Region> {
  const h = await headers();

  // Cloudflare (Railway hosts behind Cloudflare)
  let country = h.get("cf-ipcountry")?.toUpperCase();
  // Fallback: get client IP and look up country (e.g. Railway without CF)
  if (!country) {
    const ip = getClientIp(h);
    if (ip) country = (await getCountryFromIp(ip)) ?? undefined;
  }

  if (country === "GB") return "uk";

  const acceptLanguage = h.get("accept-language") ?? "";
  if (acceptLanguage.includes("en-gb") || acceptLanguage.includes("en-GB")) return "uk";

  return "us-ca";
}
