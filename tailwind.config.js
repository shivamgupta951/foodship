/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "pulse-slower": "pulse 5s ease-in-out infinite",
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
