import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getProjectNeighbors, getYouTubeEmbedUrl } from "@/lib/data";
import App from "@/components/site-header";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  // Ambil slug langsung (Sinkron - Khas Next.js 14)
  const { slug } = params;
  
  // Ambil data berdasarkan slug
  const project = getProjectBySlug(slug);

  // Jika data.ts tidak punya slug ini, lempar ke 404 asli
  if (!project) {
    notFound();
  }

  const { previous, next } = getProjectNeighbors(slug);

  return (
    <main className="min-h-screen bg-[#090909] text-stone-100">
      <App />
      
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <Link 
          href="/Karya" 
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-400 hover:text-stone-100 transition-colors mb-12"
        >
          ← Kembali ke Galeri
        </Link>

        <header className="space-y-6 border-b border-white/10 pb-12">
          <div className="flex flex-wrap items-center gap-4">
            <span 
              className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.25em]"
              style={{ backgroundColor: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}40` }}
            >
              {project.filterTag}
            </span>
            <span className="text-[10px] tracking-widest text-stone-500 uppercase">Durasi: {project.duration}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight uppercase text-stone-100">
            {project.title}
          </h1>

          <p className="max-w-3xl text-lg text-stone-300 leading-relaxed font-light">
            {project.description}
          </p>
        </header>

        {/* Render Media */}
        <section className="py-16 space-y-16">
          {project.media.map((item, index) => {
            if (item.kind === "video") {
              const embedUrl = getYouTubeEmbedUrl(item.src);
              return (
                <div key={index} className="space-y-3">
                  <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
                    {embedUrl ? (
                      <iframe
                        src={embedUrl}
                        className="h-full w-full"
                        allowFullScreen
                        title={item.caption}
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-stone-500">Video tidak valid</div>
                    )}
                  </div>
                  <p className="text-xs text-stone-400 italic font-light">{item.caption}</p>
                </div>
              );
            }

            if (item.kind === "image") {
              return (
                <div key={index} className="space-y-3">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-stone-900">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-stone-400 italic font-light">{item.caption}</p>
                </div>
              );
            }

            if (item.kind === "panel") {
              return (
                <div 
                  key={index} 
                  className="rounded-2xl border p-8 space-y-3 bg-white/[0.02]"
                  style={{ borderColor: `${project.accent}30` }}
                >
                  <h4 className="text-sm uppercase tracking-[0.2em]" style={{ color: project.accent }}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-stone-300 leading-relaxed font-light">
                    {item.body}
                  </p>
                </div>
              );
            }
            return null;
          })}
        </section>
      </div>
    </main>
  );
}
