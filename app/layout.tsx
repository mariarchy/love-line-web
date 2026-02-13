import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "♡ ✿ love line ✿ ♡",
  description:
    "modern dating is hopeless. blind phone date. no bounds.",
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
