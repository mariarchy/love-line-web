import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "before your date — ♡ love line ♡",
};

const imgBase =
  "block w-full max-w-full h-auto border-0 align-middle";
const imgCenter =
  "sm:mx-auto sm:max-w-[min(520px,90%)]";
const imgCenterLarge =
  "sm:max-w-[min(728px,126%)] sm:w-auto sm:mx-auto";
const imgLeft =
  "sm:ml-0 sm:mr-auto sm:max-w-[min(420px,85%)]";
const imgRight =
  "sm:mr-0 sm:ml-auto sm:max-w-[min(420px,85%)]";
const imgRowMobileScale =
  "w-[80%] max-w-[80%] mx-auto sm:w-full sm:max-w-full";

export default function LetterPage() {
  return (
    <div className="min-h-screen bg-love-text text-love-bg">
      <main
        className="mx-auto flex min-h-screen max-w-[920px] flex-col justify-start px-7 py-[clamp(24px,4vh,56px)] text-left"
        role="main"
      >
        <header className="mb-[clamp(16px,3vh,32px)] text-center">
          <h1 className="text-[clamp(28px,4vw,44px)] font-bold italic tracking-[0.06em]">
            ♡ ✿ before your date ✿ ♡
          </h1>
        </header>

        <div className="flex w-full flex-col gap-[clamp(16px,3vh,28px)]">
          <div className="w-full">
            <figure className="m-0 w-full">
              <img
                src="/assets/1.1-transparent.png"
                alt="Letter segment 1.1"
                className={cn(imgBase, imgCenterLarge)}
                loading="lazy"
              />
            </figure>
            <figure className="m-0 w-full">
              <img
                src="/assets/1.2-transparent.png"
                alt="Letter segment 1.2"
                className={cn(imgBase, imgCenterLarge)}
                loading="lazy"
              />
            </figure>
          </div>

          <div className="w-full">
            <figure className="m-0 w-full">
              <img
                src="/assets/3.1-transparent.png"
                alt="Letter segment 3.1"
                className={cn(imgBase, imgCenterLarge)}
                loading="lazy"
              />
            </figure>
            <div className="flex w-full flex-col gap-[clamp(16px,3vh,28px)] sm:flex-row sm:flex-nowrap sm:items-start sm:gap-[clamp(12px,2vw,24px)]">
              <figure className="m-0 w-full sm:w-auto sm:min-w-0 sm:flex-1">
                <img
                  src="/assets/3.2-transparent.png"
                  alt="Letter segment 3.2"
                  className={cn(imgBase, imgRowMobileScale, imgLeft)}
                  loading="lazy"
                />
              </figure>
              <figure className="m-0 w-full sm:w-auto sm:min-w-0 sm:flex-1">
                <img
                  src="/assets/3.3-transparent.png"
                  alt="Letter segment 3.3"
                  className={cn(imgBase, imgRowMobileScale, imgCenter)}
                  loading="lazy"
                />
              </figure>
              <figure className="m-0 w-full sm:w-auto sm:min-w-0 sm:flex-1">
                <img
                  src="/assets/3.4-transparent.png"
                  alt="Letter segment 3.4"
                  className={cn(imgBase, imgRowMobileScale, imgRight)}
                  loading="lazy"
                />
              </figure>
            </div>
            <figure className="m-0 w-full">
              <img
                src="/assets/3.5-transparent.png"
                alt="Letter segment 3.5"
                className={cn(imgBase, imgCenter)}
                loading="lazy"
              />
            </figure>
            <figure className="m-0 w-full">
              <img
                src="/assets/3.6-transparent.png"
                alt="Letter segment 3.6"
                className={cn(imgBase, imgCenter)}
                loading="lazy"
              />
            </figure>
            <figure className="m-0 w-full">
              <img
                src="/assets/3.7-transparent.png"
                alt="Letter segment 3.7"
                className={cn(imgBase, imgCenter)}
                loading="lazy"
              />
            </figure>
          </div>

          <div className="w-full">
            <figure className="m-0 w-full">
              <img
                src="/assets/3.8-transparent.png"
                alt="Letter segment 3.8"
                className={cn(imgBase, imgCenterLarge)}
                loading="lazy"
              />
            </figure>
          </div>

          <div className="w-full">
            <figure className="m-0 w-full">
              <img
                src="/assets/4.2-transparent.png"
                alt="Letter segment 4.2"
                className={cn(imgBase, imgCenterLarge)}
                loading="lazy"
              />
            </figure>
          </div>

          <div className="w-full">
            <figure className="m-0 w-full">
              <img
                src="/assets/4.3-transparent.png"
                alt="Letter segment 4.3"
                className={cn(imgBase, imgCenterLarge)}
                loading="lazy"
              />
            </figure>
            <figure className="m-0 w-full">
              <img
                src="/assets/4.4-transparent.png"
                alt="Letter segment 4.4"
                className={cn(imgBase, imgCenter)}
                loading="lazy"
              />
            </figure>
          </div>

          <figure className="m-0 w-full">
            <img
              src="/assets/4.5-transparent.png"
              alt="Letter segment 4.5"
              className={cn(imgBase, imgCenter)}
              loading="lazy"
            />
          </figure>
        </div>

        <p className="m-0 mt-[clamp(24px,4vh,40px)] text-center">
          <Link href="/" className="text-love-bg hover:underline">
            ── .✧ take me home ✧. ──
          </Link>
        </p>
      </main>
    </div>
  );
}
