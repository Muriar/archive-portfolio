"use client";

import Menu from "@/components/sections/menu";
import App  from "@/components/site-header";
import BgParticles from "@/components/sections/bgParticle";

export default function MenuPage() {
  return (
  // Ganti class bg-stone-100 atau bg-transparent di MenuPage menjadi ini:
<main className="relative min-h-screen z-10 overflow-hidden bg-[#0d0d0d] text-stone-50">

  <div className="absolute inset-0 z-[1] pointer-events-none">
    <BgParticles/>
  </div>

    <div>
      <App />
      <Menu />
    </div>
    </main>
  );
}
