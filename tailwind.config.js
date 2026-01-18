/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#b5d6ff",
          300: "#82b7ff",
          400: "#4f92ff",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
          800: "#1e3a8a",
          900: "#1e3263"
        }
      },
      boxShadow: {
        card: "0 12px 30px -18px rgba(15, 23, 42, 0.4)"
      }
    }
  },
  plugins: []
};
