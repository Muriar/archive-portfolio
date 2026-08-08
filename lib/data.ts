export type ProjectMedia =
  | {
      kind: "image";
      src: string;
      alt: string;
      caption: string;
    }
  | {
      kind: "video";
      src: string;
      caption: string;
    }
  | {
      kind: "panel";
      title: string;
    body: string;
  };

export type GalleryFilter = "all" | "video editing" | "photo editing";

export type GalleryProject = {
  slug: string;
  title: string;
  filterTag: Exclude<GalleryFilter, "all">;
  duration: string;
  accent: string;
  thumbnail: string;
  media: ProjectMedia[];
  links: {
    label: string;
    href: string;
  }[];
};

export const galleryProjects: GalleryProject[] = [
  {
    slug: "timeless",
    title: "Timeless",
    filterTag: "video editing",
    duration: "00:24",

    accent: "#c6b39a",
    thumbnail:"/thumbnail/Ttime.png",
    media: [
      {
        kind: "video",
        src: "https://obuuopfvemmaulflxatz.supabase.co/storage/v1/object/sign/Video/timeles.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84NjRkMTQ4Yi1kMzJhLTQ5NDEtODVkNS1kNWQ1MWIyNWZmZmEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWaWRlby90aW1lbGVzLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODUxNTI3MTEsImV4cCI6MTgxNjY4ODcxMX0.b7wUjgEze1-UxC7TU0N2THfGTeiIwyNB6st7vx2sjOU",
        caption: "Primary cut with a restrained lyric reveal."
      },
      {
        kind: "panel",
        title: "Editorial intent",
        body: "The movement is designed to feel discovered rather than announced, like a line of text surfacing through smoke."
      }
    ],
    links: [
      {
        label: "Open detail",
        href: "/Karya/Detail/timeless"
      }
    ]
  },
  {
    slug: "multo",
    title: "Multo",
    filterTag: "video editing",
    duration: "00:18",
    accent: "#8d918f",
    thumbnail: "/thumbnail/multoTn.png",
    media: [
      {
        kind: "video",
        src: "https://obuuopfvemmaulflxatz.supabase.co/storage/v1/object/public/Video/molto-orv.mp4",
        caption: "Still frame from the main reel."
      },
      {
        kind: "panel",
        title: "Text as image",
        body: "The layout treats words as surfaces, not labels, letting the composition carry the emotion before the message resolves."
      }
    ],
    links: [
      {
        label: "Open detail",
        href: "/Karya/Detail/multo"
      }
    ]
  },
  {
    slug: "Ramai-Sepi-Bersama",
    title: "Ramai Sepi Bersama",
    filterTag: "video editing",
    duration: "00:31",
    accent: "#6f7275",
    thumbnail: "/thumbnail/ramaisepi.png",
    media: [
      {
        kind: "video",
        src: "https://obuuopfvemmaulflxatz.supabase.co/storage/v1/object/public/Video/WhatsApp%20Video%202026-07-27%20at%2022.14.10.mp4",
        caption: "Brand mark used as an anchor for the composition."
      },
      {
        kind: "panel",
        title: "Narrative pulse",
        body: "This piece is paced like a letter being read aloud, with pauses left in the frame so the image can speak."
      },
    ],
    links: [
      {
        label: "Open detail",
        href: "/Karya/Detail/Ramai-Sepi-Bersama"
      }
    ]
  },
  {
    slug: "setiap-waktu",
    title: "Setiap Waktu",
    filterTag: "video editing",
    duration: "00:12",
    accent: "#7a8b9d",
    thumbnail: "/thumbnail/setiapwaktuTn.png",
    media: [
      {
        kind: "video",
        src: "https://obuuopfvemmaulflxatz.supabase.co/storage/v1/object/public/Video/setiapWaktu.mp4",
        caption: "Interface layer used as the primary visual."
      },
      {
        kind: "panel",
        title: "System feel",
        body: "The piece borrows from editorial spacing rather than dashboard UI so the code work still feels cinematic."
      },
    ],
    links: [
      {
        label: "Open detail",
        href: "/Karya/Detail/setiap-waktu"
      }
    ]
  },
  {
    slug: "Curhat-Dikit",
    title: "Curhat Dikit",
    filterTag: "video editing",
    duration: "00:18",
    accent: "#8d918f",
    thumbnail: "/thumbnail/curhat.png",
    media: [
      {
        kind: "video",
        src: "https://obuuopfvemmaulflxatz.supabase.co/storage/v1/object/public/Video/WhatsApp%20Video%202026-07-27%20at%2022.14.11.mp4",
        caption: "Still frame from the main reel."
      },
      {
        kind: "panel",
        title: "Text as image",
        body: "The layout treats words as surfaces, not labels, letting the composition carry the emotion before the message resolves."
      }
    ],
    links: [
      {
        label: "Open detail",
        href: "/Karya/Detail/Curhat-Dikit"
      }
    ]
  },
  {
    slug: "Somebody-Pleasure",
    title: "Somebody Pleasure",
    filterTag: "video editing",
    duration: "00:31",
    accent: "#6f7275",
    thumbnail: "/thumbnail/somepleasure.png",
    media: [
      {
        kind: "video",
        src: "https://obuuopfvemmaulflxatz.supabase.co/storage/v1/object/public/Video/WhatsApp%20Video%202026-07-27%20at%2022.14.11%20(1).mp4",
        caption: "Brand mark used as an anchor for the composition."
      },
      {
        kind: "panel",
        title: "Narrative pulse",
        body: "This piece is paced like a letter being read aloud, with pauses left in the frame so the image can speak."
      },
    ],
    links: [
      {
        label: "Open detail",
        href: "/Karya/Detail/Somebody-Pleasure"
      }
    ]
  },
];

export function getProjectBySlug(slug: string) {
  return galleryProjects.find((project) => project.slug === slug);
}

export function getProjectNeighbors(slug: string) {
  const index = galleryProjects.findIndex((project) => project.slug === slug);

  return {
    previous:
      index > 0 ? galleryProjects[index - 1] : galleryProjects[galleryProjects.length - 1],
    next:
      index < galleryProjects.length - 1 ? galleryProjects[index + 1] : galleryProjects[0]
  };
}


export const skills = [
  {
    name: "Alight Motion",
    level: 95,
    description: "Tools yang paling sering saya gunakan untuk membuat animasi berbasis vektor, motion graphics, dan efek visual. Saya memanfaatkan fitur keyframe, kebanyakan projek yang saya buat berasal dari Alight Motion. dah banyak banget sih, tapi saya masih belajar untuk menguasai fitur-fitur lanjutan seperti efek partikel, ekspresi animasi, dan integrasi audio yang lebih kompleks.",
    logo: "/logo/alightmotionLogo.jpg" 
  },
  {
    name: "After Effects",
    level: 13,
    description: "Saya berada pada tingkat pemula dalam penggunaan After Effects. Saya menggunakan software ini untuk membuat animasi yang lebih kompleks yang tidak dapat dicapai dengan Alight Motion, seperti animasi 3D sederhana, efek visual lanjutan, dan integrasi dengan software lain. Saya masih dalam tahap belajar untuk menguasai fitur-fitur lanjutan seperti ekspresi, scripting, dan compositing yang lebih kompleks.",
    logo: "/logo/aftereffectLogo.jpg"
  },
  {
    name: "Capcut",
    level: 67,
    description: "Software yang saya gunaka hanya ketika mendapatkan project video yang harus diedit dengan cepat. Karena banyaknya fitur yang dibuat premium jadi saya cukup jarang menggunakan Capcut, terbatas pada projek sekolah saja hehehe",
    logo: "/logo/capcutLogo.jpg"
  },
  {
    name: "Canva",
    level: 80,
    description: "Sering saya gunakan untuk mendapatkan element juga membuat element baru untuk kepentingan bahan mentah editing untuk memperindah visual, tidak hanya itu Canva saya gunakan juga bila projek memerlukan storyboard yang cukup sering saya temui belakangan ini",
    logo: "/logo/canvaLogo.jpg"
  },
  {
    name: "Lightroom",
    level: 50,
    description: "Pada software ini saya masih berada pada tingkatan pemula, namun tetao dapat mengedit suatu foti sesuai suasana yang diinginkan apabila diperlukan",
    logo: "/logo/lightroomLogo.jpg"
  },
  {
    name: "Visual Studio Code",
    level: 88,
    description: "Pengembangan web dan pemrograman saya lakukan disini. Saya menyukai fleksibilitas dan ekosistem plugin yang kaya dan sangat berguna untuk meningkatkan kecepatan produktivitas, yang memungkinkan saya untuk menyesuaikan lingkungan kerja sesuai kebutuhan secara cepat dan efisien, namun saya masih kekurangan pengalaman dalam beberapa area, seperti pada debugging yang masih sering dibantu oleh AI.",
    logo: "/logo/vscodeLogo.jpg" 
  },
  {
    name: "Valorant",
    level: 10,
    description: "Kalo ga ngegame meledak ini kepala yang manusiawi dong jadi saya main game ini untuk menghilangkan penat, tapi kalo lagi ada projek yang harus dikerjakan saya ga main game ini dulu, karena saya tau prioritas itu penting 😜",
    logo: "/logo/valorantLogo.jpg"
  }
];

export const timeline = [
  {
    chapter: "01 / Perkenalan",
    date: "Awal perjalanan",
    title: "Saya tumbuh dari rasa ingin tahu yang sederhana",
    description:
      "Saya bukan orang yang lahir dengan jalan yang sudah jelas. Saya tumbuh dari rasa penasaran terhadap visual, cerita, dan cara orang berinteraksi dengan dunia digital.",
    borderColor: "rgba(168, 85, 247, 0.35)",
    accentColor: "text-purple-400",
    glowColor: "rgba(168, 85, 247, 0.12)",
    image: "/Photo1.jpeg",
    highlights: ["Pencarian jati diri", "Belajar lewat pengalaman", "Bukan sekadar keterampilan, tapi cara melihat"]
  },
  {
    chapter: "02 / Pendidikan Terakhir",
    date: "Fondasi akademik",
    title: "Pendidikan terakhir memberi arah, tapi rasa ingin tahu memberi gerak",
    description:
      "Di titik ini, pendidikan terakhir saya menjadi fondasi. Saya belajar disiplin, memahami cara berpikir, dan melihat bahwa semua kreativitas punya struktur di baliknya.",
    borderColor: "rgba(20, 184, 166, 0.35)",
    accentColor: "text-teal-400",
    glowColor: "rgba(20, 184, 166, 0.12)",
    image: "/profile.jpg",
    highlights: ["Fondasi belajar", "Konsistensi lebih penting", "Melihat masalah sebagai peluang"]
  },
  {
    chapter: "03 / Jejak Digital",
    date: "Visual & teknologi",
    title: "Saya mengisi ruang digital dengan apa yang saya pelajari",
    description:
      "Dari editing video, desain, motion graphics, sampai web design dan pengalaman pengguna, saya terus menjejaki banyak bidang yang saling melengkapi. Setiap hal yang saya pelajari kemudian saya gunakan untuk membentuk identitas visual saya sendiri.",
    borderColor: "rgba(236, 72, 153, 0.35)",
    accentColor: "text-pink-400",
    glowColor: "rgba(236, 72, 153, 0.12)",
    images: ["/icarusDraw.jpg", "/Icarus.png"],
    highlights: ["Video editing", "Motion graphics", "Web design", "UI/UX thinking", "Cyber security"]
  },
  {
    chapter: "04 / Dokumentasi & Sertifikat",
    date: "Bukti kecil dari proses",
    title: "Jejak-Jejak yang saya simpan sebagai pengingat",
    description:
      "Saya menyimpan beberapa dokumen, karya, dan momen penting sebagai bentuk jejak. Bukan untuk pamer, tetapi untuk mengingat bahwa setiap hasil kecil adalah bagian dari proses yang sedang berkembang.",
    borderColor: "rgba(245, 158, 11, 0.35)",
    accentColor: "text-amber-400",
    glowColor: "rgba(245, 158, 11, 0.12)",
    images: ["/Photo1.jpeg", "/profile.jpg"],
    highlights: ["Dokumentasi karya", "Sertifikat sebagai pengingat", "Perjalanan yang belum selesai"]
  }
];