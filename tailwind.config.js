/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      orbitron: ['Orbitron', 'sans-serif'],
      fredoka: ['Fredoka', 'sans-serif'],
      sharetech: ['Share Tech Mono', 'monospace']
    }
  }

},
  plugins: [],
}
