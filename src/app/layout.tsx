import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shifterxd.github.io/Shifter_portfolio"),
  title: "Shifter's Room — Pavel Tagiev Portfolio",
  description:
    "A concise 2.5D room portfolio for Pavel “Shifter” Tagiev — AI education products, international study, and proof-driven building.",
  openGraph: {
    title: "Shifter's Room — Pavel Tagiev Portfolio",
    description:
      "A short professional story told through a symbolic room: who Pavel is, what he is building, and why it matters for AI and global education.",
    url: "https://shifterxd.github.io/Shifter_portfolio/",
    siteName: "Shifter's Room",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
