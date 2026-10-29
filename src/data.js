// ============================================================
//  NYEKER — SEMUA DATA DI SATU TEMPAT
//  Ganti isi file ini untuk update seluruh halaman sekaligus.
//  (nomor WA, menu, harga, level pedas, FAQ, testimoni, jam buka)
// ============================================================

// Ganti dengan nomor WhatsApp asli (format internasional, tanpa tanda + / spasi)
export const WA_NUMBER = "6281234567890";

// Bikin link WA dengan pesan yang sudah kebentuk otomatis
export const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const WA_DEFAULT = waLink("Hai NYEKER, aku mau pesan.");

export const HOURS = "Sabtu–Minggu · 05:00–09:00 WIB";
export const LOCATION =
  "Taman Bungkul St, Darmo, Wonokromo, Surabaya, East Java 60241";

// Foto ditaruh di folder /public/photos. Kalau belum ada file-nya,
// slot otomatis menampilkan placeholder yang rapi.
export const PHOTOS = {
  hero: "/photos/hero.jpg",
  "NYEKER Original": "/photos/nyeker-original.jpg",
  "NYEKER Goreng": "/photos/nyeker-goreng.jpg",
  "NYEKER BBQ": "/photos/nyeker-bbq.jpg",
  "NYEKER Sambal Matah": "/photos/nyeker-matah.jpg",
  "NYEKER Keju": "/photos/nyeker-keju.jpg",
  "Rice Box NYEKER": "/photos/rice-box.jpg",
};

export const MENU = [
  {
    name: "NYEKER Original",
    desc: "Ceker tanpa tulang, saus bawang gurih khas. Yang bikin jatuh cinta.",
    price: 18000,
    best: true,
  },
  {
    name: "NYEKER Goreng",
    desc: "Dilumuri tepung, digoreng sampai kriuk. Kriuknya kebangetan.",
    price: 20000,
  },
  {
    name: "NYEKER BBQ",
    desc: "Olesan saus BBQ manis berasap. Manisnya nusuk, asapnya nikmat.",
    price: 22000,
  },
  {
    name: "NYEKER Sambal Matah",
    desc: "Sambal matah seger dicemplungin banyak. Seger tapi nampol.",
    price: 22000,
  },
  {
    name: "NYEKER Keju",
    desc: "Keju meleleh di atas ceker goreng. Racun buat yang doyan gurih.",
    price: 24000,
  },
  {
    name: "Rice Box NYEKER",
    desc: "Nasi + ceker pilihan + sambal. Paket komplit buat makan siang.",
    price: 28000,
  },
];

export const SPICE_LEVELS = [
  {
    level: 1,
    name: "Nyeker Aja",
    desc: "Ceker polos. Gurihnya doang yang nyerang.",
  },
  {
    level: 2,
    name: "Mulai Panas",
    desc: "Pedas tipis di ujung lidah. Aman buat pemula.",
  },
  {
    level: 3,
    name: "Lumayan Nampol",
    desc: "Nendang, bikin idung dikit-dikit basah.",
  },
  {
    level: 4,
    name: "Serius Nih",
    desc: "Keringetan halus, mata mulai berkaca-kaca.",
  },
  {
    level: 5,
    name: "Siap Tersiksa",
    desc: "Level terakhir. Jangan nangis di depan umum.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Tadinya males makan ceker gara-gara tulangnya. Ini mah tinggal suap, enak banget.",
    name: "Mudin",
  },
  {
    quote:
      "Level 4 udah bikin nangis, tapi nagih. Besok order lagi, kali ini level 5.",
    name: "Hambali",
  },
  {
    quote:
      "Kirimnya cepet, masih anget nyampe. Cekernya empuk, sambalnya juara.",
    name: "Santoso",
  },
];

export const FAQS = [
  {
    q: "Ini halal?",
    a: "100% halal. Semua bahan dan prosesnya dijaga dari awal sampai ke tangan kamu.",
  },
  {
    q: "Kirim ke mana aja?",
    a: "Sekitar Surabaya. Gratis ongkir radius 1 km. Di luar itu, tanya dulu di WhatsApp.",
  },
  {
    q: "Berapa lama sampai?",
    a: "Kita masak fresh setelah order masuk. Rata-rata 30–45 menit sampai depan pintu.",
  },
  {
    q: "Level pedasnya bisa diatur?",
    a: "Bisa. Tinggal bilang level 1–5 waktu order, atau minta saus tambah / dipisah.",
  },
];

export const STEPS = [
  {
    title: "Pilih menu favorit",
    desc: "Cek papan menu di atas, tap tombol pesan di item yang kamu mau.",
  },
  {
    title: "Chat WhatsApp",
    desc: "Pesanan udah kebentuk otomatis, tinggal kirim. Boleh tambah level pedas atau catatan.",
  },
  {
    title: "Kita masak, langsung antar",
    desc: "Dimasak fresh pas order masuk, diantar panas sampai depan pintu.",
  },
];
