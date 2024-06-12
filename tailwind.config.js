/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}",         
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
      extend: {
          colors: {
              primary: "#17AF26",
              secondary: "#05422C",
              "neutral-400": "#F4F4F4",
          },
          backgroundSize: {
              "50%": "50%",
          },
      },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
