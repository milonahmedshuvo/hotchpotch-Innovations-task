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
        primaryColor: '#FFFFFF',
        secondaryColor:"#FAFAFA",
        darkColor: '#12141D'
      },
      fontFamily : {
        inter: 'Inter'
      }
    },
  },
  plugins: [],
} satisfies Config;
