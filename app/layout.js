import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "PIE YO 2026 — Pertemuan Ilmiah & Eksibhisi Yogyakarta",
  description:
    "Konferda & Pertemuan Ilmiah PD IAI DIY. Synergy of Pharmaceutical Science, Technology and Practices. 11–13 September 2026, Sahid Raya Hotel Yogyakarta.",
  openGraph: {
    title: "PIE YO 2026",
    description: "Pertemuan Ilmiah & Eksibhisi Yogyakarta — PD IAI DIY",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
