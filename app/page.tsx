import Link from "next/link";
import { NapkinImage } from "@/components/napkin-image";
import { PhoneLookup } from "@/components/phone-lookup";

export default function HomePage() {
  return (
    <main className="page flex min-h-screen flex-col items-center justify-center gap-[clamp(22px,4vh,44px)] px-7 py-[clamp(24px,4vh,56px)] text-center">
      <h1 className="title text-[clamp(34px,4.6vw,56px)] font-bold tracking-[0.09em] shrink-0">
        ♡ ✿ love line ✿ ♡
      </h1>

      <figure className="media-video relative w-full max-w-[560px] shrink-0 overflow-hidden mx-auto">
        <div className="block pt-[56.25%]" />
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src="https://www.youtube.com/embed/ZtuoI9pIwaQ?si=GHg6htcB9hW5Tpbd"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </figure>

      <div className="copy max-w-[560px] mx-auto">
        <p className="mb-4 last:mb-0">
          modern dating is hopeless. dates are expensive, awkward, and often a
          waste of time. you spend hours preparing only to come home asking
          about the refund policy.
        </p>
        <p className="mb-4 last:mb-0">
          let&apos;s bring back the mystique of dating and real connections.
        </p>
        <p className="mb-4 last:mb-0">
          valentine&apos;s day. blind phone date. no bounds.
        </p>
      </div>

      <NapkinImage />

      <figure className="m-0 shrink-0">
        <img
          src="/assets/vintage-phone.png"
          alt="a vintage phone on a red table"
          className="photo block w-[clamp(320px,52vw,460px)] max-w-full h-auto mx-auto"
        />
      </figure>

      <div className="copy max-w-[560px] mx-auto">
        <p className="mb-4 last:mb-0">see you on valentine&apos;s day</p>
      </div>

      <section className="w-full max-w-[560px] mx-auto flex flex-col items-center gap-6">
        <PhoneLookup />
      </section>

      <p className="letter-link shrink-0 m-0">
        <Link
          href="/letter"
          className="text-love-text no-underline italic text-[1.1em] tracking-wide hover:underline"
        >
          ── .✧ before your date ✧. ──
        </Link>
      </p>
    </main>
  );
}
