import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          dark: "#0082a9",  // الأزرق الغامق
          light: "#5bc0de", // الأزرق الفاتح
        },
      },
    },
  },
  plugins: [],
};
export default config;