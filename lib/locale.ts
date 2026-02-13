import { headers } from "next/headers";

export type Region = "us-ca" | "uk";

/**
 * Determine region from request (Vercel geo or Accept-Language).
 * US/CA → napkin with US toll-free; UK → napkin with UK toll-free.
 */
export async function getRegion(): Promise<Region> {
  const h = await headers();
  const country = h.get("x-vercel-ip-country")?.toUpperCase();
  if (country === "GB") return "uk";

  const acceptLanguage = h.get("accept-language") ?? "";
  if (acceptLanguage.includes("en-gb") || acceptLanguage.includes("en-GB")) return "uk";

  return "us-ca";
}
