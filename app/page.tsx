"use client";

import { useState } from "react"; // <--- TAMBAHKAN IMPORT STATE
import Menu from "@/components/sections/menu";
import App  from "@/components/site-header";
import BgParticles from "@/components/sections/Background/bgParticle";

export default function MenuPage() {
  // State untuk mengontrol kemunculan Site-Header (CardNav)
  const [showHeader, setShowHeader] = useState(false);

  return (
    <main className="relative min-h-screen z-10 overflow-hidden bg-[#0d0d0d] text-stone-50">
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <BgParticles/>
      </div>

      <div>
        {showHeader && <App />}
        <Menu onSectionChange={(index) => {
          if (index === 3)
          setShowHeader(true)}} />
      </div>
    </main>
  );
}