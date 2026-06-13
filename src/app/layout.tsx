import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Aeronica Advance Technologies | Intelligence Above Everything",
  description:
    "Advanced drone, AI, GIS and intelligent monitoring solutions for modern industries. Aeronica delivers cutting-edge drone technology, intelligent monitoring systems, GIS mapping, inspection solutions and enterprise-grade analytics for organizations seeking precision, efficiency and innovation.",
  keywords: [
    "drone technology",
    "AI solutions",
    "GIS mapping",
    "aerial surveillance",
    "industrial inspection",
    "digital twin",
    "aerospace",
    "geospatial intelligence",
  ],
  openGraph: {
    title: "Aeronica Advance Technologies",
    description:
      "Advanced drone, AI, GIS and intelligent monitoring solutions for modern industries.",
    type: "website",
    siteName: "Aeronica Advance Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aeronica Advance Technologies",
    description:
      "Advanced drone, AI, GIS and intelligent monitoring solutions for modern industries.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
