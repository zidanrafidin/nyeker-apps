# NYEKER — Ceker Tanpa Tulang

Landing page satu halaman. Tujuannya satu: bikin pengunjung laper dan order lewat WhatsApp.

## Jalanin

```bash
npm install
npm run dev
```

Build produksi: `npm run build` lalu hasilnya ada di folder `dist/`.

## Ganti data (WA, menu, harga, dll)

Semua ada di satu file: **`src/data.js`**

| Yang diganti            | Lokasi                                  |
| ----------------------- | --------------------------------------- |
| Nomor WhatsApp          | `WA_NUMBER` (format `62xxxxxxxxxx`)     |
| Menu, harga, deskripsi  | array `MENU`                            |
| Level pedas             | array `SPICE_LEVELS`                    |
| Testimoni               | array `TESTIMONIALS`                    |
| FAQ                     | array `FAQS`                            |
| Jam buka & lokasi       | `HOURS`, `LOCATION`                     |

Setiap tombol pesan otomatis kebentuk teks di WhatsApp — tinggal ganti `WA_NUMBER`.

## Foto

Taruh foto di **`public/photos/`** dengan nama yang sesuai `PHOTOS` di `data.js`:

```
public/photos/hero.jpg
public/photos/nyeker-original.jpg
public/photos/nyeker-goreng.jpg
public/photos/nyeker-bbq.jpg
public/photos/nyeker-matah.jpg
public/photos/nyeker-keju.jpg
public/photos/rice-box.jpg
```

Kalau file fotonya belum ada, slot otomatis menampilkan placeholder yang rapi — jadi halaman nggak pernah tampak rusak.

### Guideline foto (biar brand-nya konsisten)

- Satu sudut pandang, satu treatment cahaya untuk semua menu (mis. cahaya keras dari kiri).
- Latar polos yang kontras dengan makanan (cream/kuning/hitam), jangan ramai.
- Close-up, makanan dominan di frame, bikin kelihatan tekstur.
- Semua foto portrait untuk hero (`4:5`) dan kotak untuk menu (`1:1`).

## Struktur

```
src/
  data.js               # semua data + nomor WA
  App.jsx               # susunan section
  index.css             # token Tailwind + texture + focus ring
  components/
    StickyBar.jsx       # bar atas + CTA WA
    Hero.jsx            # headline + foto + stiker
    Marquee.jsx         # strip berjalan
    WhyNyeker.jsx       # value prop asimetris
    MenuBoard.jsx       # papan menu ala warung
    SpiceLevel.jsx      # level pedas interaktif
    HowToOrder.jsx      # 3 langkah order
    Testimonials.jsx    # kata pembeli
    FAQ.jsx             # akordeon
    Footer.jsx          # footer + CTA WA
    WaButton.jsx        # tombol CTA WhatsApp
    PhotoSlot.jsx       # slot foto + fallback
    CircularBadge.jsx   # stiker teks melingkar
    WhatsAppIcon.jsx    # ikon WA (SVG)
```

## Design system singkat

- **Warna:** kuning `#F5B301` (lapangan), merah `#E2231A` (konversi), hitam `#141110` (tinta/border), cream `#FAF4E6` (jeda).
- **Font:** Anton (display) + Plus Jakarta Sans (body).
- **Signature:** hard shadow `6px 6px 0 #141110`, border `3px` tebal, tanpa gradien.
- Ikon dari Lucide, nol emoji.
