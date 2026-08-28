import type { Metadata } from "next";
import { Inter, Geist_Mono, Permanent_Marker, Fraunces, Space_Grotesk } from "next/font/google";
import ClockWidget from "@/components/ClockWidget";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  subsets: ["latin"],
  weight: "400",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Spandana Kintali — Product Manager",
  description:
    "Portfolio of Spandana Kintali — Senior Product Manager with experience at ServiceNow, Zenoti, OpenText and Oracle, ISB PGP alum.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${permanentMarker.variable} ${fraunces.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="bg-dots min-h-full flex flex-col text-neutral-50">
        {children}
        <ClockWidget />
      </body>
    </html>
  );
}
