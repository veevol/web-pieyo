/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          bg: "#FAF3E7",
          warm: "#F5E8D0",
        },
        gold: {
          DEFAULT: "#FFB81C",
          dark: "#D99A00",
        },
        red: {
          DEFAULT: "#CC2200",
          soft: "#FF8B6E",
        },
        navy: "#1A1F3C",
        muted: "#7A7A8A",
        wa: "#25D366",
        glass: {
          bg: "rgba(255, 255, 255, 0.25)",
          border: "rgba(255, 255, 255, 0.5)",
        },
      },
      fontFamily: {
        heading: ["Sansation", "var(--font-sansation)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "h1-mobile": ["32px", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "h1-desktop": ["56px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h2-mobile": ["24px", { lineHeight: "1.25" }],
        "h2-desktop": ["36px", { lineHeight: "1.2" }],
        body: ["14px", { lineHeight: "1.65" }],
        "body-desktop": ["15px", { lineHeight: "1.65" }],
        tag: ["11px", { lineHeight: "1.4", letterSpacing: "0.12em" }],
      },
      borderRadius: {
        glass: "24px",
        "glass-lg": "28px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.08)",
        orb: "0 20px 60px rgba(255, 184, 28, 0.4)",
      },
      backdropBlur: {
        glass: "24px",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 2s infinite",
        "float-slow": "float 10s ease-in-out 1s infinite",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
