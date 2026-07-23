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
  description: string;
  heroNote: string;
  accent: string;
  thumbnail: string;
  videoUrl?: string;
  stack: string[];
  credits: string[];
  media: ProjectMedia[];
  links: {
    label: string;
    href: string;
  }[];
};

export const galleryProjects: GalleryProject[] = [
  {
    slug: "timeless-lyric-film",
    title: "Timeless",
    filterTag: "video editing",
    duration: "00:24",
    description:
      "A nocturnal lyric sequence that treats each word as a moving object. The cuts stay restrained so the vocal texture can breathe through the frame.",
    heroNote:
      "Lyric fragments expand on the downbeat, then fold back into silence.",
    accent: "#c6b39a",
    thumbnail: "/purpleGradient.png",
    videoUrl: "https://youtu.be/Ir7WmgzyK84?si=l9tE6FzbDXf6ePt4",
    stack: ["Beat sync", "Mask reveals", "Text pacing"],
    credits: ["Direction, edit, typography, motion by me"],
    media: [
      {
        kind: "video",
        src: "https://youtu.be/Ir7WmgzyK84?si=l9tE6FzbDXf6ePt4",
        caption: "Primary cut with a restrained lyric reveal."
      },
      {
        kind: "image",
        src: "/purpleGradient.png",
        alt: "Soft purple gradient preview",
        caption: "Atmosphere plate used to hold the typography."
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
        href: "/work/timeless-lyric-film"
      }
    ]
  },
  {
    slug: "afterhours-verse",
    title: "Afterhours Verse",
    filterTag: "photo editing",
    duration: "00:18",
    description:
      "A typography-led reel built from layered crops, tiny shifts of scale, and a dark editorial rhythm that never loses its human pulse.",
    heroNote:
      "Big text is split, offset, and recomposed like a poster that learned how to breathe.",
    accent: "#8d918f",
    thumbnail: "/Photo1.jpeg",
    stack: ["Split text", "Texture layers", "Editorial composition"],
    credits: ["Typography direction and motion by me"],
    media: [
      {
        kind: "image",
        src: "/Photo1.jpeg",
        alt: "Preview still for Afterhours Verse",
        caption: "Still frame from the main reel."
      },
      {
        kind: "image",
        src: "/profile.jpg",
        alt: "Secondary portrait texture for Afterhours Verse",
        caption: "Secondary texture plate."
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
        href: "/work/afterhours-verse"
      }
    ]
  },
  {
    slug: "masa-lalu-editorial-cut",
    title: "Masa Lalu",
    filterTag: "video editing",
    duration: "00:31",
    description:
      "A reflective cut that leans on pacing, contrast, and silence. The transitions stay invisible so the emotional contour can do the work.",
    heroNote:
      "The typography opens like a caption, then settles into a memory.",
    accent: "#6f7275",
    thumbnail: "/MyLogo.png",
    stack: ["Storyboarding", "Rhythmic cuts", "Soft transitions"],
    credits: ["Edit and concept by me"],
    media: [
      {
        kind: "image",
        src: "/MyLogo.png",
        alt: "Logo-based artwork for Masa Lalu",
        caption: "Brand mark used as an anchor for the composition."
      },
      {
        kind: "panel",
        title: "Narrative pulse",
        body: "This piece is paced like a letter being read aloud, with pauses left in the frame so the image can speak."
      },
      {
        kind: "image",
        src: "/profile.jpg",
        alt: "Supporting texture for Masa Lalu",
        caption: "Supporting texture."
      }
    ],
    links: [
      {
        label: "Open detail",
        href: "/work/masa-lalu-editorial-cut"
      }
    ]
  },
  {
    slug: "signal-code-motion",
    title: "Signal",
    filterTag: "photo editing",
    duration: "00:12",
    description:
      "A small code-driven motion experiment that keeps its visuals grounded in typography, grids, and subtle kinetic transitions.",
    heroNote:
      "Code and composition share the same frame without competing for attention.",
    accent: "#7a8b9d",
    thumbnail: "/vscodeLogo.jpg",
    stack: ["Component systems", "Responsive layout", "Motion architecture"],
    credits: ["Design and front-end by me"],
    media: [
      {
        kind: "image",
        src: "/vscodeLogo.jpg",
        alt: "VS Code themed artwork for Signal",
        caption: "Interface layer used as the primary visual."
      },
      {
        kind: "panel",
        title: "System feel",
        body: "The piece borrows from editorial spacing rather than dashboard UI so the code work still feels cinematic."
      },
      {
        kind: "video",
        src: "https://youtu.be/Ir7WmgzyK84?si=l9tE6FzbDXf6ePt4",
        caption: "Reference clip for the motion pacing."
      }
    ],
    links: [
      {
        label: "Open detail",
        href: "/work/signal-code-motion"
      }
    ]
  }
];

export function getYouTubeEmbedUrl(url: string) {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&\s]+)/
  );

  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

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
    logo: "/alightmotionLogo.jpg" 
  },
  {
    name: "After Effects",
    level: 13,
    description: "Saya berada pada tingkat pemula dalam penggunaan After Effects. Saya menggunakan software ini untuk membuat animasi yang lebih kompleks yang tidak dapat dicapai dengan Alight Motion, seperti animasi 3D sederhana, efek visual lanjutan, dan integrasi dengan software lain. Saya masih dalam tahap belajar untuk menguasai fitur-fitur lanjutan seperti ekspresi, scripting, dan compositing yang lebih kompleks.",
    logo: "/aftereffectLogo.jpg"
  },
  {
    name: "Capcut",
    level: 67,
    description: "Software yang saya gunaka hanya ketika mendapatkan project video yang harus diedit dengan cepat. Karena banyaknya fitur yang dibuat premium jadi saya cukup jarang menggunakan Capcut, terbatas pada projek sekolah saja hehehe",
    logo: "/capcutLogo.jpg"
  },
  {
    name: "Canva",
    level: 80,
    description: "Sering saya gunakan untuk mendapatkan element juga membuat element baru untuk kepentingan bahan mentah editing untuk memperindah visual, tidak hanya itu Canva saya gunakan juga bila projek memerlukan storyboard yang cukup sering saya temui belakangan ini",
    logo: "/canvaLogo.jpg"
  },
  {
    name: "Lightroom",
    level: 50,
    description: "Pada software ini saya masih berada pada tingkatan pemula, namun tetao dapat mengedit suatu foti sesuai suasana yang diinginkan apabila diperlukan",
    logo: "/lightroomLogo.jpg"
  },
  {
    name: "Valorant",
    level: 10,
    description: "Kalo ga ngegame meledak ini kepala yang manusiawi dong jadi saya main game ini untuk menghilangkan penat, tapi kalo lagi ada projek yang harus dikerjakan saya ga main game ini dulu, karena saya tau prioritas itu penting 😜",
    logo: "/valorantLogo.jpg"
  },
  {
    name: "Visual Studio Code",
    level: 88,
    description: "Pengembangan web dan pemrograman saya lakukan disini. Saya menyukai fleksibilitas dan ekosistem plugin yang kaya dan sangat berguna untuk meningkatkan kecepatan produktivitas, yang memungkinkan saya untuk menyesuaikan lingkungan kerja sesuai kebutuhan secara cepat dan efisien, namun saya masih kekurangan pengalaman dalam beberapa area, seperti pada debugging yang masih sering dibantu oleh AI.",
    logo: "/vscodeLogo.jpg" 
  }
];

export const timeline = [
  {
    date: "2026 - Sekarang ~(6 Bulan)",
    title: "Design Graphics",
    description:
      "Dari video, saya mulai tertarik pada sisi visual yang lebih luas. Menggunakan Canva dan Photoshop, saya mempelajari prinsip-prinsip dasar desain seperti tipografi, komposisi, dan hierarki visual — fondasi yang membentuk cara saya melihat dan menciptakan sebuah karya.",
    borderColor: "rgba(168, 85, 247, 0.25)", // Ungu
    accentColor: "text-purple-400 group-hover:text-purple-300",
    glowColor: "rgba(168, 85, 247, 0.12)"
  },
  {
    date: "2024 - 2026 ~(2 Tahun)",
    title: "Motion Graphics",
    description:
      "Saya mendalami motion graphics menggunakan After Effects dan Alight Motion. Belajar menggerakkan elemen visual dengan memperhatikan timing dan transisi — karena bagi saya, animasi yang baik bukan sekadar bergerak, tapi bercerita.",
    borderColor: "rgba(236, 72, 153, 0.25)", // Pink
    accentColor: "text-pink-400 group-hover:text-pink-300",
    glowColor: "rgba(236, 72, 153, 0.12)"
  },
  {
    date: "2024 - 2026 ~(2 Tahun)",
    title: "Web Design",
    description:
      "Ketertarikan saya terhadap cara kerja web mendorong saya untuk mulai belajar dari nol. Dimulai dari HTML & CSS, kemudian berkembang ke JavaScript, Tailwind CSS, TypeScript, PHP, dan Python. Perjalanan ini mengajarkan saya bahwa membangun sebuah website bukan hanya soal kode, tapi juga soal pengalaman pengguna.",
    borderColor: "rgba(20, 184, 166, 0.25)", // Teal
    accentColor: "text-teal-400 group-hover:text-teal-300",
    glowColor: "rgba(20, 184, 166, 0.12)"
  },
  {
    date: "2026 - Sekarang ~(4 Bulan)",
    title: "Cyber Security",
    description:
      "Saat ini saya sedang meraba lebih dalam tentang ethical hacking dan penetration testing, karena saya percaya bahwa memahami cara kerja serangan adalah kunci untuk membangun pertahanan yang efektif. Btw saya masih pemula banget, jadi jangan terlalu berharap banyak ya.",
    borderColor: "rgba(245, 158, 11, 0.25)", // Amber/Kuning Oranye
    accentColor: "text-amber-400 group-hover:text-amber-300",
    glowColor: "rgba(245, 158, 11, 0.12)"
  }
];