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
    },
  },
  plugins: [],
}