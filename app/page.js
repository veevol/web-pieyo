import Navbar from "@/components/Navbar";
import FloatingOrbs from "@/components/FloatingOrbs";
import SectionReveal from "@/components/SectionReveal";
import AgendaTabs from "@/components/AgendaTabs";
import FabUp from "@/components/FabUp";
import Link from "next/link";
import Image from "next/image";

const MARQUEE_ITEMS = [
  "SKP Pembelajaran & Pengabdian",
  "10 Track Simposium",
  "3 Hari · 11–13 September 2026",
  "Call for Paper Oral Presentation",
  "Job Fair",
  "Pameran Industri Farmasi",
  "Sahid Raya Hotel Yogyakarta",
];

const KEGIATAN = [
  {
    title: "Pertemuan Ilmiah",
    desc: "Konferensi dan simposium dengan pembicara nasional terkemuka di bidang farmasi.",
  },
  {
    title: "Pameran",
    desc: "Eksibisi produk dan teknologi farmasi dari industri dan institusi terkait.",
  },
  {
    title: "Kegiatan Lain",
    desc: "Kompetisi oral, cerdas cermat, pengabdian masyarakat, dan networking profesi.",
  },
];

const TUJUAN = [
  "Menggali peran sinergis antara ilmu farmasi, teknologi, dan praktik kefarmasian dalam menghadapi era kecerdasan buatan",
  "Menyediakan platform bagi apoteker untuk meningkatkan kompetensi dan kesiapan menghadapi transformasi digital di bidang kesehatan",
  "Mendorong kolaborasi lintas sektor antara akademisi, praktisi, dan industri farmasi",
  "Mengembangkan inovasi dan penelitian dalam penerapan teknologi cerdas di bidang farmasi",
  "Memperkuat jejaring profesi apoteker dalam skala nasional dan internasional",
];

const SIMPOSIUM = [
  {
    title: "AI-Powered Clinical Decision Support: Meningkatkan Outcome Pasien di Era Digital",
    label: "Simposium 1",
    tint: "from-gold/10 to-gold/5",
  },
  {
    title: "Personalized Medicine & Farmakogenomik: Dari DNA ke Terapi Individual",
    label: "Simposium 2",
    tint: "from-red/8 to-red-soft/10",
  },
  {
    title: "Telepharmacy & Digital Pharmacy Services: Peluang Bisnis dan Pelayanan",
    label: "Simposium 3",
    tint: "from-navy/8 to-navy/4",
  },
  {
    title: "Penggunaan Obat pada Kehamilan & Laktasi: Safety, Evidence, dan Praktik Klinik",
    label: "Simposium 4",
    tint: "from-red-soft/15 to-gold/8",
  },
  {
    title: "Halal Pharmaceutical Industry: Dari Supply Chain ke Global Market",
    label: "Simposium 5",
    tint: "from-gold/12 to-cream-warm/30",
  },
  {
    title: "Future Pharmacist: Leadership, Entrepreneurship & AI di Era Healthcare 5.0",
    label: "Simposium 6",
    tint: "from-navy/10 to-gold/8",
  },
  {
    title: "Update Tatalaksana Diabetes Mellitus: Dari Obat Konvensional ke Terapi Inovatif",
    label: "Simposium 7",
    tint: "from-gold/10 to-gold/5",
  },
  {
    title: "Manajemen Dislipidemia & Penyakit Kardiovaskular: Peran Obat Modern dalam Pencegahan Primer & Sekunder",
    label: "Simposium 8",
    tint: "from-red/8 to-red-soft/10",
  },
  {
    title: "Hipertensi Terkontrol: Strategi Farmakoterapi Terkini dan Kepatuhan Pasien",
    label: "Simposium 9",
    tint: "from-navy/8 to-navy/4",
  },
  {
    title: "Chronic Kidney Disease (CKD): Optimalisasi Terapi dan Peran Apoteker dalam Pencegahan Progresi",
    label: "Simposium 10",
    tint: "from-red-soft/15 to-gold/8",
  },
];

const TICKETS = [
  {
    name: "Early Bird",
    price: "Rp 550.000",
    memberPriceLabel: "Anggota IAI DIY",
    memberPrice: "Rp 450.000",
    active: true,
    highlighted: true,
    badge: "Hingga 31 Juli 2026",
    badgeActive: true,
    featured: false,
  },
  {
    name: "Regular",
    price: "Rp 750.000",
    active: false,
    badge: "1 Agu – 6 Sep 2026",
    featured: true,
  },
];

const TICKET_FASILITAS = [
  "Job Fair",
  "Ekshibisi & Pameran",
  "Semua Simposium",
  "Seminar Kit",
  "Konsumsi",
  "SKP Pembelajaran & Pengabdian",
];

const CFP_TEMAS = [
  "Farmasi Sosial, Manajemen, dan Pendidikan",
  "Farmasi Klinik",
  "Farmakologi dan Toksikologi",
  "Farmasi Sains dan Teknologi",
];

const WA_BASE = "https://wa.me/6285163627358?text=";
const WA_VEE_TEXT = "Halo Vee, mohon info event PIE YO 2026";
const WA_CHAT_VEE_LINK = `${WA_BASE}${encodeURIComponent(WA_VEE_TEXT)}`;

export default function Home() {
  return (
    <>
      <Navbar />
      <FabUp />

      <main className="relative pt-14">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pb-12 pt-6 sm:px-6 sm:pt-10 lg:pb-16">
          <FloatingOrbs />
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4">
              <article className="glass-card glass-card-lg relative z-10 col-span-1 flex flex-col justify-between p-5 sm:p-6 lg:col-span-2 lg:row-span-2 lg:p-8">
                <div>
                  <p className="tag-caps text-muted">Pertemuan Ilmiah &amp; Ekshibisi Yogyakarta</p>
                  <h1 className="mt-3 font-heading text-h1-mobile font-bold text-navy lg:text-h1-desktop">
                    PIE YO <span className="text-red">2026</span>
                  </h1>
                  <div className="mt-4 flex justify-center sm:justify-start">
                    <Image
                      src="/pieyo-logo.png"
                      alt="Logo PIE YO 2026"
                      width={320}
                      height={220}
                      className="logo-blend h-auto w-full max-w-[280px] object-contain sm:max-w-[320px]"
                      priority
                    />
                  </div>
                  <p className="mt-4 text-sm font-medium text-navy/80 sm:text-base">
                    Konferda &amp; Pertemuan Ilmiah
                  </p>
                  <blockquote className="mt-4 border-l-2 border-gold/60 pl-3 text-sm leading-relaxed text-muted sm:text-body-desktop">
                    &ldquo;Synergy of Pharmaceutical Science, Technology and Practices: Preparing
                    Pharmacists for the Intelligence Future&rdquo;
                  </blockquote>
                </div>
                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                  <Link href="#daftar" className="btn-primary">
                    Daftar Sekarang
                  </Link>
                  <Link href="#tentang" className="btn-outline">
                    Tentang Acara ↓
                  </Link>
                </div>
              </article>

              <article className="glass-card glass-card-lg relative z-10 flex flex-col p-5 sm:p-6">
                <p className="tag-caps text-black">Tanggal</p>
                <p className="mt-2 font-heading text-lg font-bold leading-snug text-navy sm:text-xl">
                  11–13 September 2026
                </p>
                <p className="mt-1 text-sm text-muted">Jum&apos;at – Minggu</p>
              </article>

              <article className="glass-card glass-card-lg relative z-10 flex flex-col p-5 sm:p-6">
                <p className="tag-caps text-black">Lokasi</p>
                <p className="mt-2 text-sm font-medium leading-snug text-navy sm:text-base">
                  Sahid Raya Hotel &amp; Convention Yogyakarta
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="relative z-20 overflow-hidden bg-navy py-3">
          <div className="marquee-track gap-8">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-8 text-sm text-cream-bg/90 whitespace-nowrap"
              >
                <span>{item}</span>
                <span className="text-gold" aria-hidden>
                  ◆
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Tentang */}
        <SectionReveal id="tentang" className="px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="tag-caps text-gold-dark">Tentang</p>
            <h2 className="mt-2 font-heading text-h2-mobile font-bold text-navy lg:text-h2-desktop">
              PIE YO 2026
            </h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-10">
              <div>
                <p className="text-sm leading-relaxed text-muted sm:text-body-desktop">
                  PIE YO (Pertemuan Ilmiah &amp; Ekshibisi Yogyakarta) 2026 merupakan forum
                  ilmiah tahunan PD IAI DIY yang menghadirkan sinergi ilmu farmasi, teknologi,
                  dan praktik kefarmasian. Acara ini menjadi wadah bagi apoteker, akademisi,
                  mahasiswa, dan industri untuk berkolaborasi menghadapi era kecerdasan buatan
                  dalam pelayanan kesehatan.
                </p>
                <div className="mt-6 space-y-3">
                  {KEGIATAN.map((k) => (
                    <article key={k.title} className="glass-card p-4 sm:p-5">
                      <h3 className="font-heading text-base font-bold text-navy sm:text-lg">
                        {k.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted">{k.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
              <article className="glass-card glass-card-lg h-fit p-5 sm:p-7">
                <h3 className="font-heading text-lg font-bold text-navy sm:text-xl">
                  Tujuan Kegiatan
                </h3>
                <ul className="mt-4 space-y-3">
                  {TUJUAN.map((t, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </SectionReveal>

        {/* Agenda */}
        <SectionReveal id="agenda" className="px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="tag-caps text-gold-dark">Agenda</p>
            <h2 className="mt-2 font-heading text-h2-mobile font-bold text-navy lg:text-h2-desktop">
              Jadwal Acara
            </h2>
            <p className="mt-2 text-sm text-muted">11–13 September 2026 · Sahid Raya Yogyakarta</p>
            <div className="mt-8">
              <AgendaTabs />
            </div>
          </div>
        </SectionReveal>

        {/* Simposium */}
        <SectionReveal id="simposium" className="px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="tag-caps text-gold-dark">Simposium</p>
            <h2 className="mt-2 font-heading text-h2-mobile font-bold text-navy lg:text-h2-desktop">
              Simposium Paralel
            </h2>
            <p className="mt-2 text-sm text-muted">6 track · Sabtu, 12 September 2026</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
              {SIMPOSIUM.map((s, i) => (
                <article
                  key={i}
                  className={`group glass-card glass-card-lg relative overflow-hidden bg-gradient-to-br ${s.tint} p-5 transition-all hover:-translate-y-1 hover:shadow-glass sm:p-6`}
                >
                  <span className="tag-caps text-gold-dark">{s.label}</span>
                  <h3 className="mt-3 pr-6 text-sm font-medium leading-snug text-navy sm:text-base">
                    {s.title}
                  </h3>
                  <span
                    className="absolute bottom-4 right-4 text-xl text-navy/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
                    aria-hidden
                  >
                    ↗
                  </span>
                </article>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Call for Paper */}
        <SectionReveal id="call-for-paper" className="px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="tag-caps text-gold-dark">Kompetisi Ilmiah</p>
            <h2 className="mt-2 font-heading text-h2-mobile font-bold text-navy lg:text-h2-desktop">
              Call for Paper
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-body-desktop">
              PIE YO 2026 membuka kesempatan bagi apoteker, akademisi, dan mahasiswa untuk
              mempresentasikan karya ilmiah. Kompetisi yang tersedia adalah Presentasi Oral.
              Abstrak dapat dikirimkan sesuai 4 tema berikut:
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {CFP_TEMAS.map((tema, i) => (
                <article key={tema} className="glass-card glass-card-lg p-5 sm:p-6">
                  <span className="tag-caps text-gold-dark">Tema {i + 1}</span>
                  <h3 className="mt-2 font-heading text-base font-bold text-navy sm:text-lg">
                    {tema}
                  </h3>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/call-for-paper" className="btn-primary inline-flex px-6">
                Selengkapnya →
              </Link>
            </div>
          </div>
        </SectionReveal>

        {/* Registrasi */}
        <SectionReveal id="daftar" className="px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="tag-caps text-gold-dark">Registrasi</p>
            <h2 className="mt-2 font-heading text-h2-mobile font-bold text-navy lg:text-h2-desktop">
              Tiket &amp; Pendaftaran
            </h2>
            <div className="mt-8">
              <p className="font-heading text-base font-bold text-navy sm:text-lg">Fasilitas :</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {TICKET_FASILITAS.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted">
                    <span className="text-gold" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 md:items-stretch">
              {TICKETS.map((ticket) => {
                const isInactive = ticket.featured && !ticket.active;
                const isHighlighted = ticket.highlighted;

                return (
                <article
                  key={ticket.name}
                  className={`flex flex-col rounded-[28px] border p-5 sm:p-6 ${
                    isHighlighted
                      ? "relative overflow-hidden border-gold/50 bg-gradient-to-br from-gold/25 via-white/55 to-cream-warm/70 shadow-[0_12px_40px_rgba(255,184,28,0.22)] ring-2 ring-gold/30 md:-translate-y-1"
                      : isInactive
                      ? "border-navy/40 bg-navy text-cream-bg shadow-glass opacity-60"
                      : "glass-card glass-card-lg"
                  }`}
                >
                  {isHighlighted && (
                    <span
                      className="pointer-events-none absolute -right-8 top-5 rotate-45 bg-gold px-10 py-1 text-[10px] font-bold uppercase tracking-wider text-navy shadow-sm"
                      aria-hidden
                    >
                      Promo
                    </span>
                  )}
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      className={`font-heading text-lg font-bold ${
                        isInactive ? "text-cream-bg" : "text-navy"
                      }`}
                    >
                      {ticket.name}
                    </h3>
                    {ticket.badge && (
                      <span
                        className={`tag-caps flex shrink-0 items-center gap-1 rounded-full px-2 py-1 ${
                          ticket.badgeActive
                            ? "bg-wa/15 text-wa ring-1 ring-wa/25"
                            : "bg-white/20 text-cream-bg/80"
                        } ${isHighlighted ? "mr-11 sm:mr-14" : ""}`}
                      >
                        {ticket.badgeActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-wa" aria-hidden />
                        )}
                        {ticket.badge}
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-3 font-heading font-bold ${
                      ticket.strikethrough ? "line-through opacity-70" : ""
                    } ${isHighlighted ? "text-3xl text-navy sm:text-4xl" : "text-2xl"} ${
                      isInactive ? "text-cream-bg" : isHighlighted ? "" : "text-navy"
                    }`}
                  >
                    {ticket.price}
                  </p>
                  {ticket.memberPrice && (
                    <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl border border-gold/40 bg-white/75 px-4 py-3 shadow-sm backdrop-blur-sm">
                      <p className="font-heading text-lg font-bold text-gold-dark">
                        {ticket.memberPriceLabel}
                      </p>
                      <p className="shrink-0 text-right font-heading text-3xl font-bold text-gold-dark sm:text-4xl">
                        {ticket.memberPrice}
                      </p>
                    </div>
                  )}
                </article>
                );
              })}
            </div>
            <div className="mt-6 space-y-3 text-xs text-muted sm:text-sm">
              <p>
                * Calon peserta dengan pembiayaan mandiri silahkan langsung booking tiket dengan akses
                &quot;Daftar Sekarang&quot; → Isi data → Save → Upload Bukti Trf
              </p>
              <p>
                * Calon peserta dengan pembiayaan sponsor / institusi, silahkan hubungi marketing / PIC
                institusi Anda untuk mendapatkan link pendaftaran khusus
              </p>
            </div>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={WA_CHAT_VEE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa w-full max-w-md sm:w-auto sm:min-w-[280px]"
              >
                Chat AI Vee
              </a>
              <a
                href="https://event.iaidiy.id/login?event=konferda-pie-yo-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] w-full max-w-md items-center justify-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-white transition-all hover:bg-navy/90 active:scale-[0.98] sm:w-auto sm:min-w-[280px]"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
        </SectionReveal>
      </main>

      {/* Footer */}
      <footer className="bg-navy text-cream-bg/90">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="tag-caps text-cream-bg/50">Navigasi</p>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  { href: "#tentang", label: "Tentang" },
                  { href: "#agenda", label: "Agenda" },
                  { href: "#simposium", label: "Simposium" },
                  { href: "#daftar", label: "Daftar" },
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
              <div className="mt-4 flex gap-3">
                <a
                  href="https://www.instagram.com/pd_iai_diy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                  aria-label="Instagram PD IAI DIY"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="mailto:event@iaidiy.id"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                  aria-label="Email"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-cream-bg/50">
            © {new Date().getFullYear()} PD IAI DIY — PIE YO 2026. All rights reserved.
          </p>
          <p className="mt-4 text-center text-xs leading-relaxed text-cream-bg/60">
            Sekretariat IAI: Perum Perwita Regency, Kab Dolphin, RT.8/RW.9, Randubelang,
            Sariharjo, Sewon, Bantul, Daerah Istimewa Yogyakarta
          </p>
        </div>
      </footer>
    </>
  );
}
