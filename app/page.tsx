import { NapkinImage } from "@/components/napkin-image";
import { PhoneLookup } from "@/components/phone-lookup";
import { TrackedLink } from "@/components/tracked-link";

export default function HomePage() {
  return (
    <main className="page flex min-h-screen flex-col items-center justify-center gap-[clamp(22px,4vh,44px)] px-7 py-[clamp(24px,4vh,56px)] text-center">
      <h1 className="title text-[clamp(34px,4.6vw,56px)] font-bold tracking-[0.09em] shrink-0">
        ♡ ✿ love line ✿ ♡
      </h1>

      <NapkinImage />

      <div className="copy max-w-[560px] mx-auto">
        <p className="mb-4 last:mb-0">see you on valentine&apos;s day</p>
      </div>

      <section className="w-full max-w-[560px] mx-auto flex flex-col items-center gap-6">
        <PhoneLookup />
      </section>

      <p className="letter-link shrink-0 m-0">
        <TrackedLink
          href="/letter"
          eventName="letter_link_click"
          className="text-love-text no-underline italic text-[1.1em] tracking-wide hover:underline"
        >
          ── .✧ read me before your date ✧. ──
        </TrackedLink>
      </p>
    </main>
  );
}
