import { HeroGrid } from "@/components/sections/Background/BackgroundGrid";
import { GalleryExperience }  from "@/components/sections/GaleriKarya/projects";
import App from "@/components/site-header";

export default function KaryaPage() {
  return (
    /* 1. Menambahkan class 'relative' pada <main> */
    <main className="relative min-h-screen overflow-hidden bg-stone-100 text-neutral-950 transition-colors duration-500 dark:bg-neutral-950 dark:text-stone-50">
      <App />
      <GalleryExperience />

      {/* 2. Menambahkan 'min-h-screen' agar background selalu penuh minimal setinggi layar */}
      <div className="absolute inset-0 w-full h-full min-h-screen pointer-events-none">
        <HeroGrid/>
      </div>
    </main>
  );
}
