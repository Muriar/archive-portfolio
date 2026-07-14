import { Timeline } from "@/components/sections/timeline";
import { SiteHeader } from "@/components/site-header";

export default function TimelinePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-stone-100 text-neutral-950 transition-colors duration-500 dark:bg-neutral-950 dark:text-stone-50">
      <SiteHeader />
      <Timeline />
    </main>
  );
}
