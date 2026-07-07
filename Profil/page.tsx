import { Hero } from "@/components/sections/hero";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-stone-100 text-neutral-950 transition-colors duration-500 dark:bg-neutral-950 dark:text-stone-50">
      <SiteHeader />
      <Hero />
      <Footer />
    </main>
  );
}
