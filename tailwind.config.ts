import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#010309",
        brand: "#6366F1",
        boxes: {
          DEFAULT: 'hsl(232, 30, 8%)',
          light: 'hsl(232, 30, 12%)'
        }
    },
    },
  },
  plugins: [],
} satisfies Config;
