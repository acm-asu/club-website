/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-dark": "#8A4FFF",
        "black-dark": "#121113",
        "purple-light": "#C3BEF7",
        "blue-light": "#E5ECF4",
        "green-light": "#EFFFFA",
      },
      "soda-blue": {
        "900": "oklch(55% 0.2 266)",
        "775": "oklch(55% 0.2 266)",
        "675": "oklch(55% 0.2 266)",
        "550": "oklch(55% 0.2 266)",
        "450": "oklch(55% 0.2 266)",
        "325": "oklch(55% 0.2 266)",
        "225": "oklch(55% 0.2 266)",
        "100": "oklch(55% 0.2 266)"
      },
      "soda-red": {
        "900": "oklch(55% 0.2 12)",
        "775": "oklch(55% 0.2 12)",
        "675": "oklch(55% 0.2 12)",
        "550": "oklch(55% 0.2 12)",
        "450": "oklch(55% 0.2 12)",
        "325": "oklch(55% 0.2 12)",
        "225": "oklch(55% 0.2 12)",
        "100": "oklch(55% 0.2 12)"
      },
      "surface": {
        "900": "oklch(13.85% 0.0019 196.94)",
        "775": "oklch(21.5% 0.001 196.94)",
        "675": "oklch(33% 0.003 196.94)",
        "550": "oklch(44.5% 0.004 196.94)",
        "450": "oklch(55.5% 0.006 196.94)",
        "325": "oklch(67% 0.005 196.94)",
        "225": "oklch(78.5% 0.006 196.94)",
        "100": "oklch(90% 0.006 196.94)"
      },
      "success": {
        "900": "oklch(82.56% 0.1805 124.75)",
        "775": "oklch(82.56% 0.1805 124.75)",
        "675": "oklch(82.56% 0.1805 124.75)",
        "550": "oklch(82.56% 0.1805 124.75)",
        "450": "oklch(82.56% 0.1805 124.75)",
        "325": "oklch(82.56% 0.1805 124.75)",
        "225": "oklch(82.56% 0.1805 124.75)",
        "100": "oklch(82.56% 0.1805 124.75)"
      },
      "caution": {
        "900": "oklch(78.5% 0.148 90.52)",
        "775": "oklch(78.5% 0.148 90.52)",
        "675": "oklch(78.5% 0.148 90.52)",
        "550": "oklch(78.5% 0.148 90.52)",
        "450": "oklch(78.5% 0.148 90.52)",
        "325": "oklch(78.5% 0.148 90.52)",
        "225": "oklch(78.5% 0.148 90.52)",
        "100": "oklch(78.5% 0.148 90.52)"
      },
      "danger": {
        "900": "oklch(62.74% 0.2425 16.82)",
        "775": "oklch(62.74% 0.2425 16.82)",
        "675": "oklch(62.74% 0.2425 16.82)",
        "550": "oklch(62.74% 0.2425 16.82)",
        "450": "oklch(62.74% 0.2425 16.82)",
        "325": "oklch(62.74% 0.2425 16.82)",
        "225": "oklch(62.74% 0.2425 16.82)",
        "100": "oklch(62.74% 0.2425 16.82)"
      },
      "info": {
        "900": "oklch(63.28% 0.1249 231.85)",
        "775": "oklch(63.28% 0.1249 231.85)",
        "675": "oklch(63.28% 0.1249 231.85)",
        "550": "oklch(63.28% 0.1249 231.85)",
        "450": "oklch(63.28% 0.1249 231.85)",
        "325": "oklch(63.28% 0.1249 231.85)",
        "225": "oklch(63.28% 0.1249 231.85)",
        "100": "oklch(63.28% 0.1249 231.85)"
      }
    },
    fontFamily: {
      apfel: ["Apfel", "sans-serif"],
      "apfel-brukt": ["Apfel-Brukt", "sans-serif"],
      "apfel-fett": ["Apfel-Fett", "sans-serif"],
      "apfel-regular": ["Apfel-Regular", "sans-serif"],
      "array-regular": ["Array-Regular", "sans-serif"],
      "array-semibold": ["Array-Semibold", "sans-serif"],
      "array-semibold-wide": ["Array-SemiboldWide", "sans-serif"],
      "array-bold": ["Array-Bold", "sans-serif"],
    },
  },
  plugins: [require('daisyui')],
};
