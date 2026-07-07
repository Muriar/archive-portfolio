export function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&\s]+)/
  );
  return match ? match[1] : null;
}

export const Karya = [
  {
    title: "Timeless - The Weeknd",
    description: "project musik",
    tags: ["Alight Motion", "Canva"],
    year: "2026",
    videoUrl: "https://youtu.be/Ir7WmgzyK84?si=l9tE6FzbDXf6ePt4"
  },
  {
    title: "EEE A - dia",
    description:
      "project musik",
    tags: ["Alight Motion", "Canva"],
    year: "2026"
  },
  {
    title: "Masa lalu - Chaerol",
    description:
      "project musik",
    tags: ["Canva", "After Effects"],
    year: "2026"
  }
];

export const menu = [
  { 
    label: "Profil", 
    href: "/Profil",
    color: "hover:border-neutral-500 hover:shadow-[0_0_40px_rgba(115,115,115,0.2)]", 
    darkColor: "dark:hover:border-neutral-400 dark:hover:shadow-[0_0_50px_rgba(255,255,255,0.08)]",
    tag: "01"
  },
  { 
    label: "Skills", 
    href: "/skills",
    color: "hover:border-emerald-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]", 
    darkColor: "dark:hover:border-emerald-500 dark:hover:shadow-[0_0_50px_rgba(16,185,129,0.12)]",
    tag: "02"
  },
  { 
    label: "Timeline", 
    href: "/timeline",
    color: "hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]", 
    darkColor: "dark:hover:border-purple-500 dark:hover:shadow-[0_0_50px_rgba(168,85,247,0.12)]",
    tag: "03"
  },
  { 
    label: "Projects", 
    href: "/Karya",
    color: "hover:border-orange-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]", 
    darkColor: "dark:hover:border-orange-500 dark:hover:shadow-[0_0_50px_rgba(249,115,22,0.12)]",
    tag: "04"
  },
  { 
    label: "Contact", 
    href: "/contact",
    color: "hover:border-neutral-400 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]", 
    darkColor: "dark:hover:border-white dark:hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]",
    tag: "05"
  }
];

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
    date: "2026-Sekarang ~(6 Bulan)",
    title: "Design Graphics",
    description:
      "Dari video, saya mulai tertarik pada sisi visual yang lebih luas. Menggunakan Canva dan Photoshop, saya mempelajari prinsip-prinsip dasar desain seperti tipografi, komposisi, dan hierarki visual — fondasi yang membentuk cara saya melihat dan menciptakan sebuah karya.",
    color: "hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]", 
    darkColor: "dark:hover:border-purple-500 dark:hover:shadow-[0_0_50px_rgba(168,85,247,0.12)]",
  },
  {
    date: "2024-2026 ~(2 Tahun)",
    title: "Motion Graphics",
    description:
      "Saya mendalami motion graphics menggunakan After Effects dan Alight Motion. Belajar menggerakkan elemen visual dengan memperhatikan timing dan transisi — karena bagi saya, animasi yang baik bukan sekadar bergerak, tapi bercerita."
  },
  {
    date: "2024-2026 ~(2 Tahun)",
    title: "Web Design",
    description:
      "Ketertarikan saya terhadap cara kerja web mendorong saya untuk mulai belajar dari nol. Dimulai dari HTML & CSS, kemudian berkembang ke JavaScript, Tailwind CSS, TypeScript, PHP, dan Python. Perjalanan ini mengajarkan saya bahwa membangun sebuah website bukan hanya soal kode, tapi juga soal pengalaman pengguna."
  },
  {
    date: "2026-Sekarang ~(4 Bulan)",
    title: "Cyber Security",
    description:
      "Saat ini saya sedang meraba lebih dalam tentang ethical hacking dan penetration testing, karena saya percaya bahwa memahami cara kerja serangan adalah kunci untuk membangun pertahanan yang efektif. Btw saya masih pemula banget, jadi jangan terlalu berharap banyak ya."
  }
];