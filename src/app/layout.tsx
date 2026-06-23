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
    "A symbolic 2.5D room portfolio for Pavel “Shifter” Tagiev — AI systems, global education, projects, and discipline.",
  openGraph: {
    title: "Shifter's Room — Pavel Tagiev Portfolio",
    description:
      "Enter a symbolic 2.5D room where every object represents Pavel's projects, learning path, AI systems, and discipline.",
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
