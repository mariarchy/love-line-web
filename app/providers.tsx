"use client";

import posthog from 'posthog-js'; 
import { PostHogProvider as PHProvider } from '@posthog/react' 

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

const posthogClient = posthogKey && posthogHost ? posthog.init(posthogKey, { 
  api_host: posthogHost,
  defaults: '2026-01-30',
}) : null;

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  if (!posthogClient) {
    return <>{children}</>;
  }
  
  return (
    <PHProvider
      client={posthogClient}
    >
      {children}
    </PHProvider>
  );
}
