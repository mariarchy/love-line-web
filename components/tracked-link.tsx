"use client";

import Link from "next/link";
import { usePostHog } from "posthog-js/react";

type TrackedLinkProps = {
  href: string;
  eventName: string;
  children: React.ReactNode;
  className?: string;
};

export function TrackedLink({ href, eventName, children, className }: TrackedLinkProps) {
  const posthog = usePostHog();

  return (
    <Link
      href={href}
      className={className}
      onClick={() => posthog?.capture(eventName)}
    >
      {children}
    </Link>
  );
}
