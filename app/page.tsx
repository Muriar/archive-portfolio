import Menu from "@/components/sections/menu";
import App  from "@/components/site-header";
import { Footer } from "@/components/sections/footer";

export default function MenuPage() {
  return (
  // Ganti class bg-stone-100 atau bg-transparent di MenuPage menjadi ini:
<main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-stone-50">
  
  {/* Efek Orb Blur: Lingkaran cahaya pudar di belakang kartu */}
  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px] pointer-events-none" />
  <div className="absolute bottom-1/4 left-1/3 -z-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

  {/* Sisa konten utama Anda */}
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />
    <div className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-300/10 blur-[150px] pointer-events-none" />

      <App />
      <Menu />
      <Footer />
    </main>
  );
}
