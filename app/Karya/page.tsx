import { HeroGrid } from "@/components/sections/Background/BackgroundGrid";
import { GalleryExperience }  from "@/components/sections/GaleriKarya/projects";
import App from "@/components/site-header";

export default function KaryaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-stone-100 text-neutral-950 transition-colors duration-500 dark:bg-neutral-950 dark:text-stone-50">
      <App />

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <HeroGrid/>
       </div>
      <GalleryExperience />
    </main>
  );
}
