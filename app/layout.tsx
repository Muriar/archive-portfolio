import type { Metadata } from "next";
import { Inter, Caveat, Playfair_Display } from "next/font/google";
import "./global.css";
// 1. Impor komponen pembungkus transisi
import { TerapkanTransisi } from "./providers"; 

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans"
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-latin"
});

export const metadata: Metadata = {
  title: "My Portofolio Gweh",
  description: "Portofolio saya sebagai Gfx dan Mograph selama ini"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${playfair.variable} ${caveat.variable} font-sans antialiased bg-[#0d0d0d] text-stone-50`}>
        {/* 2. Bungkus children di sini */}
        <TerapkanTransisi>
          {children}
        </TerapkanTransisi>
      </body>
    </html>
  );
}
