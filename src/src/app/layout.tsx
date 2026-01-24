import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

// Typography from PRD: Inter for UI text and headings
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Typography from PRD: JetBrains Mono for technical data (CAS numbers, purity, specs)
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "STR Technologies | Impact Theme Concept",
  description:
    "Interactive concept site demonstrating how the Shopify Impact theme can be customized for STR Technologies biotech e-commerce experience.",
  keywords: [
    "STR Technologies",
    "synthetic adjuvants",
    "vaccine development",
    "biotech",
    "QS-21",
    "GMP grade",
  ],
  icons: {
    icon: '/icon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="scientific-blue" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
