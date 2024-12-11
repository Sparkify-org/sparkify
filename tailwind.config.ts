import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light: "#e9e9e9"
      },
      fontFamily: {
        sans: ["var(--font-rubik)", "sans-serif"],
        mono: ["var(--font-fira-mono)", "monospace"],
      },
      boxShadow: {
        'box-black-md': "10px 10px 0 0 #000000",
        'box-white-md': "10px 10px 0 0 #ffffff",
        'box-black-sm': "5px 5px 0 0 #000000",
        'box-white-sm': "5px 5px 0 0 #ffffff",
      },
      backgroundImage: {
        "sparkify-light": "url('/bg-light.svg')",
        "sparkify-dark": "url('/bg-dark.svg')"
      }
    },
  },
  plugins: [],
};

export default config;
