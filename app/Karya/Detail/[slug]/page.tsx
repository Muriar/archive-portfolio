import { notFound } from "next/navigation";

import Hero from "@/components/sections/GaleriKarya/karyaDetail/Hero";
import { galleryProjects } from "@/lib/data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function GalleryDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const project = galleryProjects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#090909] text-stone-50">

      <Hero project={project} />

    </main>
  );
}