import { getRegion } from "@/lib/locale";

const NAPKIN_IMAGES: Record<"us-ca" | "uk", string> = {
  "us-ca": "/images/napkin-us.png",
  uk: "/images/napkin-uk.png",
};

export async function NapkinImage() {
  const region = await getRegion();
  const src = NAPKIN_IMAGES[region];
  return (
    <div className="py-[10%]">
      <figure className="mt-2 flex shrink-0 justify-center rotate-45">
        <img
          src={src}
          alt="Toll-free number to call for your blind date"
          className="w-full max-w-[min(52vw,460px)] object-contain"
          loading="eager"
        />
      </figure>
    </div>
  );
}
