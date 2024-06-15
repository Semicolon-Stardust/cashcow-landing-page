const { text } = require('stream/consumers');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["var(--font-logo)"],
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        subtitle: ["var(--font-subtitle)"],
        paragragh: ["var(--font-paragraph)"],
      },
      colors: {
        primary: "#1F2937",
        secondary: "#4B5563",
        accent: "#818CF8",
        background: "#111827",
        text: "#F9FAFB",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}