/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',

 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        upAnime: {
          'from': { opacity: 1, transform: 'translateY(0)' },
          'to': { opacity: 0, transform: 'translateY(-100px)' },
        },
        downAnime: {
          'from': { opacity: 0, transform: 'translateY(-100px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        upAnime: 'upAnime 0.5s forwards',
        downAnime: 'downAnime 0.5s forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
    require('flowbite/plugin'),
  ],
  //to turn off the daisyui's darkmode by default 
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
