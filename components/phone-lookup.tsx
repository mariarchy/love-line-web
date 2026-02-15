"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePostHog } from "posthog-js/react";
import { PhoneInput } from "@/components/ui/phone-input";
import { cn } from "@/lib/utils";

type LookupResult = {
  ok: true;
  dateTime: string;
  dateName: string | null;
};

type LookupError = {
  ok: false;
  error: string;
};

function normalizeErrorType(error: string): string {
  const lower = error.toLowerCase();
  if (lower.includes("not found") || lower.includes("no match")) return "not_found";
  if (lower.includes("invalid") || lower.includes("valid")) return "invalid";
  return "error";
}

export function PhoneLookup({
  defaultCountry = "US",
}: {
  defaultCountry?: React.ComponentProps<typeof PhoneInput>["defaultCountry"];
}) {
  const posthog = usePostHog();
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [result, setResult] = useState<LookupResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone || phone.length < 10) return;

    setStatus("loading");
    setError(null);
    setResult(null);
    posthog?.capture("lookup_started");

    try {
      const res = await fetch("/api/lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data: LookupResult | LookupError = await res.json();

      if (data.ok) {
        setResult(data);
        setStatus("success");
        posthog?.capture("lookup_success");
      } else {
        setError(data.error);
        setStatus("error");
        posthog?.capture("lookup_error", {
          error_type: normalizeErrorType(data.error),
        });
      }
    } catch {
      setError("Something went wrong. Try again.");
      setStatus("error");
      posthog?.capture("lookup_error", { error_type: "server_error" });
    }
  }

  const date = result
    ? new Date(result.dateTime)
    : null;
  const dateLabel = date
    ? date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })
    : "";
  const timeLabel = date
    ? date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit", hour12: true })
    : "";

  return (
    <div className="w-full max-w-[360px] mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label htmlFor="phone" className="sr-only">
          Your phone number
        </label>
        <PhoneInput
          id="phone"
          type="tel"
          defaultCountry={defaultCountry}
          placeholder="your number"
          value={phone}
          onChange={setPhone}
          disabled={status === "loading"}
          international
          className={cn(
            "w-full rounded-md border border-love-text/30 focus-within:ring-2 focus-within:ring-love-text/50 focus-within:ring-offset-2 focus-within:ring-offset-love-bg [&:has(input:disabled)]:opacity-50",
            status === "error" &&
              "border-red-400/60 focus-within:ring-red-400/50"
          )}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "h-11 rounded-md border border-love-text/30 px-4 py-2 text-love-text lowercase",
            "hover:bg-love-text/10 focus:outline-none focus:ring-2 focus:ring-love-text/50 focus:ring-offset-2 focus:ring-offset-love-bg",
            "disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          )}
        >
          {status === "loading" ? "looking up…" : "reveal my date"}
        </button>
      </form>

      <AnimatePresence mode="wait">
        {status === "error" && error && (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 text-center text-sm text-red-300/90"
          >
            {error}
          </motion.p>
        )}

        {status === "success" && result && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { type: "spring", stiffness: 300, damping: 24 },
            }}
            exit={{ opacity: 0 }}
            className="mt-8"
          >
            <motion.div
              initial={{ x: 0 }}
              animate={{
                x: [0, -3, 3, -2, 2, -1, 1, 0],
                transition: { duration: 0.5, delay: 0.1 },
              }}
              className="rounded-lg border border-love-text/25 bg-love-text/5 px-6 py-5 text-center backdrop-blur-sm gap-2"
            >
              <p className="text-sm italic opacity-90">
                call in
              </p>
              <p className="mt-3 text-xl font-medium tracking-wide">
                {dateLabel}
              </p>
              <p className="mt-1 text-lg text-love-text/90">
                {timeLabel}
              </p>
              {result.dateName && (
                <p className="mt-3 text-sm italic opacity-90">
                  your match will be waiting
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
