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

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  detail: string;
};

type Chapter = {
  id: string;
  eyebrow: string;
  title: string[];
  description: string[];
  tone: "light" | "dark";
  images: GalleryImage[];
  galleryFirst?: boolean;

  story?: {
    eyebrow?: string;
    paragraphs: string[];
  };
};

export const chapters: Chapter[] = [
  {
    id: "school",
    eyebrow: "01 / SCHOOL JOURNEY",
    title: ["SMA", "JOURNEY"],
    description: [
      "Masa SMA adalah awal perjalanan saya mengenal dunia yang lebih luas. Di sini saya belajar banyak hal, bukan hanya dari pelajaran di kelas, tetapi juga dari organisasi, pertemanan, dan berbagai pengalaman.",

      "Bagian pertama ini menjadi pembuka tentang bagaimana saya mulai memahami ritme belajar, tanggung jawab, dan cara melihat masa depan.",
    ],
    tone: "dark",
    images: [
      {
        src: "/profile.jpg",
        alt: "School portrait memory",
        caption: "Growing through people",
        detail:
          "Pertemanan dan lingkungan memberi banyak pelajaran yang tidak tertulis di buku.",
      },
      {
        src: "/Photo1.jpeg",
        alt: "School group memory",
        caption: "Shared moments",
        detail:
          "Cerita sekolah yang sederhana, tapi cukup kuat untuk diingat lama.",
      },
      {
        src: "/icarusPotrait.jpg",
        alt: "Creative direction memory",
        caption: "Choosing direction",
        detail:
          "Mulai memahami apa yang saya sukai dan ke mana saya ingin bergerak.",
      },
    ], 

    galleryFirst: true,
    story: {
      eyebrow: "Sedikit Bercerita",
      paragraphs: [
        "Momen di luar kelas membentuk sisi lain dari perjalanan saya. Pertemanan, kegiatan, dan pengalaman kecil membuat saya belajar membaca situasi dan mengambil keputusan. Momen di luar kelas membentuk sisi lain dari perjalanan saya. Pertemanan, kegiatan, dan pengalaman kecil membuat saya belajar membaca situasi dan mengambil keputusan. Momen di luar kelas membentuk sisi lain dari perjalanan saya. Pertemanan, kegiatan, dan pengalaman kecil membuat saya belajar membaca situasi dan mengambil keputusan.",
        "Di fase ini saya mulai merasakan bahwa proses bertumbuh tidak selalu terlihat besar, tetapi pelan-pelan mengubah arah langkah.",
        "Ada banyak hal sederhana yang pada saat itu terasa biasa saja, tetapi ketika dilihat kembali justru menjadi bagian penting dari cara saya berkembang.",
        "Dari sana saya mulai memahami bahwa perjalanan tidak selalu tentang seberapa cepat seseorang sampai pada tujuan, tetapi tentang apa yang berubah selama perjalanan tersebut.",
      ],
    },
  },

  /* =========================================
     KINETIC
  ========================================== */

  {
    id: "kinetic",
    eyebrow: "04 / KINETIC GRAPHIC / MOTION",
    title: ["KINETIC", "GRAPHIC"],
    description: [
      "Kinetic typography dan motion design adalah cara saya bercerita melalui gerakan, ritme, dan visual. Saya menikmati proses mengubah ide menjadi animasi yang komunikatif dan estetis.",
      "Bagian ini berfokus pada rasa gerak: bagaimana teks, timing, dan komposisi bisa membuat pesan terasa lebih hidup.",
    ],
    tone: "dark",
    images: [
      {
        src: "/thumbnail/curhat.png",
        alt: "Motion project Curhat",
        caption: "Move with purpose",
        detail:
          "Eksperimen visual tentang ritme, kontras, dan pesan.",
      },
      {
        src: "/thumbnail/multoTn.png",
        alt: "Motion project Multo",
        caption: "Kinetic type study",
        detail:
          "Tipografi yang bergerak untuk membangun rasa dan fokus.",
      },
      {
        src: "/thumbnail/ramaisepi.png",
        alt: "Motion project Ramai Sepi",
        caption: "Keep moving forward",
        detail:
          "Potongan studi motion tentang energi dan pertumbuhan.",
      },
    ],
  },

  /* =========================================
     KINETIC PROCESS
  ========================================== */

  {
    id: "kinetic-process",
    eyebrow: "05 / KINETIC GRAPHIC / PROCESS",
    title: ["MOTION", "PROCESS"],
    description: [
      "Di balik visual yang bergerak, ada proses memilih ritme, kontras, dan arah mata. Saya belajar bahwa motion design bukan sekadar membuat objek berpindah, tetapi mengatur perhatian.",
      "Setiap frame menjadi ruang kecil untuk menyusun energi, emosi, dan pesan agar terasa tepat.",
    ],
    tone: "dark",
    galleryFirst: true,
    images: [
      {
        src: "/thumbnail/multoTn.png",
        alt: "Motion typography study",
        caption: "Kinetic type study",
        detail:
          "Eksperimen tipografi yang mencoba menjaga fokus tanpa kehilangan rasa.",
      },
      {
        src: "/thumbnail/ramaisepi.png",
        alt: "Motion rhythm study",
        caption: "Keep moving forward",
        detail:
          "Latihan ritme visual tentang konsistensi dan pertumbuhan.",
      },
      {
        src: "/thumbnail/curhat.png",
        alt: "Motion contrast study",
        caption: "Move with purpose",
        detail:
          "Mencari cara agar gerakan terasa punya alasan, bukan hanya ramai.",
      },
    ],
  },

  /* =========================================
     WEB
  ========================================== */

  {
    id: "web",
    eyebrow: "06 / WEB DEVELOPMENT",
    title: ["WEB", "DEVELOPMENT"],
    description: [
      "Saya membangun aplikasi web dengan fokus pada performa, pengalaman pengguna, dan arsitektur yang bersih.",
      "Bagian ini melihat frontend sebagai pengalaman: tempat visual, interaksi, dan kebutuhan pengguna bertemu.",
    ],
    tone: "dark",
    images: [
      {
        src: "/thumbnail/somepleasure.png",
        alt: "Website project",
        caption: "Project dashboard",
        detail:
          "Antarmuka yang menyatukan informasi, alur, dan kebutuhan pengguna.",
      },
      {
        src: "/Icarus.png",
        alt: "Visual web project",
        caption: "Creative interface",
        detail:
          "Mencari titik temu antara ekspresi visual dan fungsi.",
      },
      {
        src: "/fallinIcarus.jpg",
        alt: "Website visual",
        caption: "Digital product study",
        detail:
          "Sebuah eksplorasi tampilan, sistem, dan pengalaman digital.",
      },
    ],
  },

  /* =========================================
     SOFTWARE ENGINEERING
  ========================================== */

  {
    id: "web-engineering",
    eyebrow: "07 / SOFTWARE ENGINEERING",
    title: ["SOFTWARE", "ENGINEERING"],
    description: [
      "Di balik tampilan, saya belajar menata struktur: komponen, data, state, logic, dan alur kerja yang bisa dikembangkan lagi.",
      "Teknologi yang saya gunakan mencakup React, Next.js, TypeScript, Node.js, dan lainnya.",
    ],
    tone: "dark",
    galleryFirst: true,
    images: [
      {
        src: "/Icarus.png",
        alt: "Creative web interface",
        caption: "Creative interface",
        detail:
          "Mencari titik temu antara ekspresi visual dan fungsi.",
      },
      {
        src: "/thumbnail/somepleasure.png",
        alt: "Project dashboard interface",
        caption: "Project dashboard",
        detail:
          "Membuat interface yang rapi dan mudah dibaca.",
      },
      {
        src: "/fallinIcarus.jpg",
        alt: "Digital product visual",
        caption: "Digital product study",
        detail:
          "Eksplorasi tampilan, sistem, dan pengalaman digital.",
      },
    ],
  },

  /* =========================================
     CYBER SECURITY
  ========================================== */

  {
    id: "security",
    eyebrow: "08 / CYBER SECURITY / MINDSET",
    title: ["CYBER", "SECURITY"],
    description: [
      "Keamanan bukan hanya tentang tools, tetapi tentang cara berpikir. Saya tertarik memahami sistem, menemukan kerentanan, dan membangun solusi yang lebih aman.",
      "Bagian ini berfokus pada cara membaca pola sistem, memahami alur data, dan melihat celah yang sering tidak terlihat.",
    ],
    tone: "light",
    images: [
      {
        src: "/thumbnail/setiapwaktuTn.png",
        alt: "Security study",
        caption: "Read the system",
        detail:
          "Belajar melihat detail dan hubungan di balik sebuah sistem.",
      },
      {
        src: "/falloficarus.svg",
        alt: "Security diagram",
        caption: "Security mindset",
        detail:
          "Keamanan yang baik dimulai dari pemahaman, bukan kepanikan.",
      },
      {
        src: "/icarusDraw.jpg",
        alt: "Security visual",
        caption: "Build with care",
        detail:
          "Merancang dan membangun dengan perhatian pada ketahanan.",
      },
    ],
  },

  /* =========================================
     SECURITY PRACTICE
  ========================================== */

  {
    id: "security-practice",
    eyebrow: "09 / CYBER SECURITY / PRACTICE",
    title: ["SECURE", "BUILDING"],
    description: [
      "Saya ingin memahami keamanan dari dua sisi: bagaimana kerentanan muncul, dan bagaimana produk bisa dibangun dengan pertahanan yang lebih baik.",
      "Saya terus belajar tentang offensive security, defensive security, networking, dan secure coding.",
    ],
    tone: "light",
    galleryFirst: true,
    images: [
      {
        src: "/falloficarus.svg",
        alt: "Security diagram",
        caption: "Security mindset",
        detail:
          "Keamanan yang baik dimulai dari pemahaman, bukan kepanikan.",
      },
      {
        src: "/icarusDraw.jpg",
        alt: "Secure build visual",
        caption: "Build with care",
        detail:
          "Merancang dan membangun dengan perhatian pada ketahanan.",
      },
      {
        src: "/thumbnail/setiapwaktuTn.png",
        alt: "Security terminal study",
        caption: "Read the system",
        detail:
          "Membiasakan diri membaca detail sebelum mengambil keputusan.",
      },
    ],
  },
];