import TimelineStory from "@/components/sections/timeline-story";
import App from "@/components/site-header";

export default function TimelinePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <App />
      <TimelineStory />
    </main>
  );
}
