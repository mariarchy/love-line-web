import { getRegion } from "@/lib/locale";

const NAPKIN_IMAGES: Record<"us-ca" | "uk", string> = {
  "us-ca": "/images/napkin-us.png",
  uk: "/images/napkin-uk.png",
};

export async function NapkinImage() {
  const region = await getRegion();
  const src = NAPKIN_IMAGES[region];
  return (
    <figure className="mt-2 flex shrink-0 justify-center">
      {/* Add napkin-us.png and napkin-uk.png to public/images/ for locale-specific toll-free numbers */}
      <img
        src={src}
        alt="Toll-free number to call for your blind date"
        className="block w-full max-w-[min(52vw,460px)] object-contain"
        loading="eager"
      />
    </figure>
  );
}
