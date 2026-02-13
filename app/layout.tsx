import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "♡ ✿ love line ✿ ♡",
  description:
    "maybe we connect better with less — a valentine's day phone line experiment",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
