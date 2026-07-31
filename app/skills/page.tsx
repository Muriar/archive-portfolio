import { Skills } from "@/components/sections/skills";
import App from "@/components/site-header";
import { HeroGrid } from "@/components/sections/Background/BackgroundGrid";

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-stone-100 text-neutral-950 transition-colors duration-500 dark:bg-neutral-950 dark:text-stone-50">
      <App /><div className="absolute inset-0 w-full h-full min-h-screen pointer-events-none">
        <HeroGrid/>
      </div>
      <Skills />
    </main>
  );
}
