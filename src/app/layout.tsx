import type { Metadata } from "next";
import { Inter, Geist_Mono, Permanent_Marker } from "next/font/google";
import WeatherWidget from "@/components/WeatherWidget";
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

export const metadata: Metadata = {
  title: "Spandana Kintali — Product Manager",
  description:
    "Portfolio of Spandana Kintali — Senior Product Manager with experience at ServiceNow, Zenoti, OpenText and Oracle, ISB PGP alum.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${permanentMarker.variable} h-full antialiased scroll-smooth`}
    >
      <body className="bg-dots min-h-full flex flex-col text-neutral-50">
        {children}
        <WeatherWidget />
      </body>
    </html>
  );
}
