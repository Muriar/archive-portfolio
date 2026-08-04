"use client";

import { Hero } from "@/components/sections/hero";
import App from "@/components/site-header";
import { Footer } from "@/components/sections/footer";
import BgParticles from "@/components/sections/Background/bgParticle"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-stone-100 text-neutral-950 transition-colors duration-500 dark:bg-neutral-950 dark:text-stone-50">
      <App />
      <div className="absolute inset-0 w-full h-full min-h-screen pointer-events-none">
        <BgParticles/>
      </div>
      <Hero />
      <Footer />
    </main>
  );
}
