"use client";

import { useState } from "react";

const AGENDA = [
  {
    id: "jumat",
    label: "Jum'at 11 Sept",
    items: [
      {
        time: "12.00–13.00",
        title: "Registrasi Peserta",
        description: "Pendaftaran dan pengambilan seminar kit peserta.",
        badge: "Registrasi",
      },
      {
        time: "12.00–17.00",
        title: "Job Fair",
        description: "Pameran lowongan kerja industri farmasi.",
        badge: "Job Fair",
      },
      {
        time: "12.00–17.00",
        title: "Ekshibisi & Pameran",
        description: "Pameran produk dan inovasi industri farmasi.",
        badge: "Ekshibisi",
      },
      {
        time: "12.00–17.00",
        title: "Konferensi Daerah (Konferda)",
        description: "Konferensi Daerah IAI DIY.",
        badge: "Konferda",
      },
      {
        time: "13.00–15.00",
        title: "Presentasi Oral Sesi 1",
        description: "8 ruang paralel untuk presentasi ilmiah.",
        badge: "Kompetisi",
      },
      {
        time: "15.00–15.30",
        title: "Coffee Break",
        description: "Istirahat dan networking.",
        badge: "Break",
      },
      {
        time: "15.30–17.00",
        title: "Presentasi Oral Sesi 2",
        description: "Kelanjutan presentasi ilmiah di ruang paralel.",
        badge: "Kompetisi",
      },
    ],
  },
  {
    id: "sabtu",
    label: "Sabtu 12 Sept",
    items: [
      { time: "07.00–08.00", title: "Registrasi & Coffee Break", description: "Pendaftaran ulang dan kopi pagi.", badge: "Registrasi" },
      {
        time: "07.00–17.30",
        title: "Job Fair",
        description: "Pameran lowongan kerja industri farmasi.",
        badge: "Job Fair",
      },
      {
        time: "07.00–17.30",
        title: "Ekshibisi & Pameran",
        description: "Pameran produk dan inovasi industri farmasi.",
        badge: "Ekshibisi",
      },
      { time: "08.00–08.45", title: "Pembukaan & Pertunjukan Seni", description: "Upacara pembukaan resmi PIE YO 2026.", badge: "Ceremonial" },
      {
        time: "08.45–09.15",
        title: "Keynote Speech — Kementerian Kesehatan RI",
        description: "Dirjen Farmalkes",
        descriptionEmphasis: "apt. Dr. Dra. Lucia Rizka Andalusia, M.Pharm, MARS",
        badge: "Keynote",
      },
      { time: "09.15–09.30", title: "Presentasi Sponsor", description: "Apresiasi dan presentasi mitra acara.", badge: "Sponsor" },
      {
        time: "09.30–11.00",
        title: "Plenary Session",
        description: "Transforming Health Systems Through Workforce Innovation, Equity, and Digital Readiness",
        details: [
          "Technical Officer (Health Policy and Strategy), Health Systems, WHO – Indonesia)",
          { text: "Ms Deki", emphasis: true },
        ],
        badge: "Pleno",
      },
      { time: "11.00–13.30", title: "ISHOMA", description: "Istirahat shalat dan makan siang.", badge: "Break" },
      { time: "13.30–15.00", title: "Simposium Paralel Materi 1", description: "6 track simposium berjalan paralel.", badge: "Simposium" },
      { time: "15.00–15.30", title: "Coffee Break", description: "Istirahat sore.", badge: "Break" },
      { time: "15.30–17.00", title: "Simposium Paralel Materi 2", description: "Kelanjutan 6 track simposium.", badge: "Simposium" },
      { time: "17.00–17.30", title: "Award & Closing Ceremony", description: "Penghargaan dan penutupan hari ke-2.", badge: "Penutupan" },
    ],
  },
  {
    id: "minggu",
    label: "Minggu 13 Sept",
    items: [
      { time: "06.15–07.00", title: "Registrasi", description: "Registrasi peserta kegiatan hari ketiga.", badge: "Registrasi" },
      { time: "07.00–07.30", title: "Senam Bersama", description: "Aktivitas pagi bersama peserta.", badge: "Wellness" },
      { time: "07.30–10.00", title: "Pengabdian Masyarakat & Penutupan", description: "Kegiatan pengabdian dan penutupan resmi PIE YO 2026.", badge: "Pengabdian" },
    ],
  },
];

const BADGE_COLORS = {
  Registrasi: "bg-navy/10 text-navy",
  Kompetisi: "bg-gold/20 text-gold-dark",
  Break: "bg-muted/15 text-muted",
  Ceremonial: "bg-red/10 text-red",
  Keynote: "bg-red/15 text-red",
  Sponsor: "bg-gold/15 text-gold-dark",
  Pleno: "bg-navy/15 text-navy",
  Simposium: "bg-gold/25 text-gold-dark",
  Penutupan: "bg-navy/20 text-navy",
  Wellness: "bg-red-soft/30 text-red",
  Pengabdian: "bg-gold/20 text-gold-dark",
  "Job Fair": "bg-red/10 text-red",
  Ekshibisi: "bg-gold/15 text-gold-dark",
  Konferda: "bg-navy/15 text-navy",
};

export default function AgendaTabs() {
  const [active, setActive] = useState(0);
  const day = AGENDA[active];

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {AGENDA.map((d, i) => (
          <button
            key={d.id}
            type="button"
            onClick={() => setActive(i)}
            className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-all min-h-[44px] ${
              active === i
                ? "bg-navy text-cream-bg shadow-md"
                : "glass-card text-navy hover:bg-white/40"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {day.items.map((item, idx) => (
          <article
            key={`${day.id}-${idx}`}
            className="glass-card glass-card-lg p-4 sm:p-5 transition-transform hover:translate-y-[-2px]"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <span className="font-mono text-sm font-semibold text-gold-dark">{item.time}</span>
              <span className={`tag-caps rounded-full px-2.5 py-1 ${BADGE_COLORS[item.badge] || "bg-muted/15 text-muted"}`}>
                {item.badge}
              </span>
            </div>
            <h3 className="mt-2 font-heading text-lg font-bold text-navy sm:text-xl">{item.title}</h3>
            <p className="mt-1.5 text-sm text-muted leading-relaxed">
              {item.description}
              {item.descriptionEmphasis && (
                <span className="block font-heading font-bold text-navy">{item.descriptionEmphasis}</span>
              )}
            </p>
            {item.details?.map((line, i) => {
              const text = typeof line === "string" ? line : line.text;
              const emphasis = typeof line === "object" && line.emphasis;
              return (
                <p
                  key={i}
                  className={`mt-1 leading-relaxed ${
                    emphasis
                      ? "text-sm font-heading font-bold text-navy"
                      : "text-sm text-muted"
                  }`}
                >
                  {text}
                </p>
              );
            })}
          </article>
        ))}
      </div>
    </div>
  );
}
