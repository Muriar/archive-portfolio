import dynamic from "next/dynamic";
import App from "@/components/site-header";

const ScrollDissolveRevealDemo = dynamic(
  () => import("@/components/sections/Playground").then((m) => m.ScrollDissolveRevealDemo),
  { ssr: false }
);

export default function Page() {
  return (
    <main>
      <App />
      <ScrollDissolveRevealDemo />
    </main>
  );
}
