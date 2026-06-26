"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroBento() {
  return (
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

      <article className="glass-card glass-card-lg relative z-10 flex flex-col justify-between p-5 sm:p-6">
        <div>
          <p className="tag-caps text-black">Tanggal</p>
          <p className="mt-2 font-heading text-lg font-bold leading-snug text-navy sm:text-xl">
            11–13 September 2026
          </p>
          <p className="mt-1 text-sm text-muted">Jum&apos;at – Minggu</p>
        </div>
      </article>

      <article className="glass-card glass-card-lg relative z-10 flex flex-col justify-between p-5 sm:p-6">
        <div>
          <p className="tag-caps text-black">Lokasi</p>
          <p className="mt-2 text-sm font-medium leading-snug text-navy sm:text-base">
            Sahid Raya Hotel &amp; Convention Yogyakarta
          </p>
        </div>
      </article>
    </div>
  );
}
