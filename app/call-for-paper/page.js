import Navbar from "@/components/Navbar";
import FloatingOrbs from "@/components/FloatingOrbs";
import SectionReveal from "@/components/SectionReveal";
import FabUp from "@/components/FabUp";
import Link from "next/link";

export const metadata = {
  title: "Call for Paper — PIE YO 2026",
  description:
    "Informasi Call for Paper PIE YO 2026: topik abstrak, ketentuan penulisan, petunjuk presentasi oral, luaran publikasi, dan alur pelaksanaan.",
};

const TOPIK_ABSTRAK = [
  "Farmasi Sosial, Manajemen, dan Pendidikan",
  "Farmasi Klinik",
  "Farmakologi dan Toksikologi",
  "Farmasi Sains dan Teknologi",
];

const TEMPLATE_ABSTRAK_URL =
  "https://docs.google.com/document/d/1j84tJBKxMDaESv6NsdBdygb8fgEb0yoC/edit?usp=sharing&ouid=108311814650087147892&rtpof=true&sd=true";

const KETENTUAN_ABSTRAK = [
  "Ditulis menggunakan Bahasa Indonesia yang baku. Kata/istilah asing ditulis miring.",
  "Disusun dalam satu paragraf, maksimal 250 kata. Mencakup: latar belakang, tujuan, metode, hasil, dan simpulan.",
  "Disertai 3–5 kata kunci di bagian bawah.",
  "Diketik pada bidang A4 dengan margin normal, maksimal 250 kata.",
  "File abstrak berekstensi .doc atau .docx.",
  "Batas pengiriman abstrak: 3 Agustus 2026",
  "Notifikasi abstrak diterima: 18 Agustus 2026",
  "Batas pengiriman full paper: 31 Agustus 2026",
  "Full paper dikirimkan melalui upload saat pendaftaran",
];

const PETUNJUK_ORAL = [
  "Membuat slide presentasi berisi: pendahuluan, metode, hasil dan diskusi, kesimpulan, referensi utama, dan dapat menambahkan ucapan terima kasih.",
  "Menambahkan kode di slide pertama PPT.",
  "Presentasi maksimal 7 (tujuh) menit dalam bentuk video presentasi, ukuran file max 100 MB, resolusi min 720 pixel.",
  "Dianjurkan menggunakan fitur Record di Ms. PowerPoint (wajah dianjurkan terlihat dalam video).",
];

const LUARAN = [
  "Jurnal Manajemen dan Pelayanan Farmasi (Fak. Farmasi UGM, Sinta 2) — dalam konfirmasi",
  "Jurnal Farmasi Sains dan Komunitas (Fak. Farmasi USD, Sinta 2) — dalam konfirmasi",
  "Pharmaciana (Fak. Farmasi UAD, Sinta 2) — dalam konfirmasi",
  "Media Farmasi (Fak. Farmasi UAD, Sinta 3) — dalam konfirmasi",
  "Jurnal Ilmiah Farmasi (Prodi Farmasi UII, Sinta 3) — dalam konfirmasi",
  "Majalah Farmaseutik (Fak. Farmasi UGM, Sinta 4) — dalam konfirmasi",
  "Journal of Fundamental and Applied Pharmaceutical Science (Prodi Farmasi UMY, Sinta 2) — dalam konfirmasi",
  "Prosiding Nasional Ber-ISBN",
];

const ALUR_PELAKSANAAN = [
  "Abstrak yang dikirimkan akan diseleksi berdasarkan kriteria yang ditetapkan.",
  "Abstrak terpilih mendapatkan LoA dan instruksi upload full paper sesuai template jurnal kerjasama.",
  "Peserta dapat memilih: diterbitkan di jurnal kerjasama/prosiding, atau tidak diterbitkan.",
  "Review dan seleksi artikel dilakukan Sie Ilmiah bersama editor jurnal kerjasama.",
  "Keputusan akhir penerimaan artikel sesuai kebijakan pengelola jurnal.",
];

function BulletList({ items }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-body-desktop">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

function CfpBlock({ title, children }) {
  return (
    <article className="glass-card glass-card-lg p-5 sm:p-7">
      <h2 className="font-heading text-lg font-bold text-navy sm:text-xl">{title}</h2>
      {children}
    </article>
  );
}

export default function CallForPaperPage() {
  return (
    <>
      <Navbar />
      <FabUp />

      <main className="relative pt-14">
        <section className="relative overflow-hidden px-4 pb-6 pt-8 sm:px-6 sm:pt-12">
          <FloatingOrbs />
          <div className="relative z-10 mx-auto max-w-6xl">
            <p className="tag-caps text-gold-dark">Kompetisi Ilmiah</p>
            <h1 className="mt-2 font-heading text-h2-mobile font-bold text-navy lg:text-h2-desktop">
              Call for Paper — PIE YO 2026
            </h1>
          </div>
        </section>

        <SectionReveal className="px-4 pb-14 sm:px-6 sm:pb-20">
          <div className="mx-auto max-w-6xl space-y-6">
            <CfpBlock title="Topik Abstrak">
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-body-desktop">
                Topik abstrak pada PIE YO 2026 dibagi menjadi 4, yaitu:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {TOPIK_ABSTRAK.map((tema, i) => (
                  <div
                    key={tema}
                    className="rounded-2xl border border-white/50 bg-white/30 px-4 py-3 backdrop-blur-sm"
                  >
                    <span className="tag-caps text-gold-dark">Tema {i + 1}</span>
                    <p className="mt-1 font-heading text-sm font-bold text-navy sm:text-base">{tema}</p>
                  </div>
                ))}
              </div>
            </CfpBlock>

            <CfpBlock title="Ketentuan Abstrak">
              <p className="mt-3 text-sm font-medium text-navy sm:text-base">
                Ketentuan penulisan abstrak:
              </p>
              <ul className="mt-4 space-y-3">
                {KETENTUAN_ABSTRAK.slice(0, 5).map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted sm:text-body-desktop"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                    {item}
                  </li>
                ))}
                <li className="flex gap-3 text-sm leading-relaxed text-muted sm:text-body-desktop">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                  <span>
                    Penulisan abstrak mengikuti{" "}
                    <a
                      href={TEMPLATE_ABSTRAK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-navy underline-offset-2 hover:underline"
                    >
                      Template Abstrak
                    </a>
                    .
                  </span>
                </li>
                {KETENTUAN_ABSTRAK.slice(5).map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted sm:text-body-desktop"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted sm:text-body-desktop">
                <span className="font-medium text-navy">Kontak Person:</span> apt. Michael Raharja
                Gani, M.Farm —{" "}
                <a href="tel:+6285643207613" className="text-navy underline-offset-2 hover:underline">
                  085643207613
                </a>
              </p>
            </CfpBlock>

            <CfpBlock title="Petunjuk Presentasi Oral">
              <BulletList items={PETUNJUK_ORAL} />
            </CfpBlock>

            <CfpBlock title="Luaran">
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-body-desktop">
                Full paper terpilih akan diterbitkan di jurnal kerjasama PIE YO 2026:
              </p>
              <BulletList items={LUARAN} />
            </CfpBlock>

            <CfpBlock title="Alur Pelaksanaan">
              <BulletList items={ALUR_PELAKSANAAN} />
            </CfpBlock>

            <div className="pt-4">
              <Link href="/" className="btn-outline inline-flex px-6">
                ← Kembali ke Beranda
              </Link>
            </div>
          </div>
        </SectionReveal>
      </main>

      <footer className="bg-navy text-cream-bg/90">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="tag-caps text-cream-bg/50">Navigasi</p>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  { href: "/#tentang", label: "Tentang" },
                  { href: "/#agenda", label: "Agenda" },
                  { href: "/#simposium", label: "Simposium" },
                  { href: "/#call-for-paper", label: "Call for Paper" },
                  { href: "/#daftar", label: "Daftar" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-cream-bg/80 hover:text-cream-bg">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="tag-caps text-cream-bg/50">Info</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="mailto:event@iaidiy.id" className="text-cream-bg/80 hover:text-cream-bg">
                    event@iaidiy.id
                  </a>
                </li>
                <li>
                  <a href="https://iaidiy.id" className="text-cream-bg/80 hover:text-cream-bg">
                    iaidiy.id
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-cream-bg/50">
            © {new Date().getFullYear()} PD IAI DIY — PIE YO 2026. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
