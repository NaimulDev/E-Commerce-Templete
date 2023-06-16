/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      themes: [
        {
          mytheme: {
            primary: "#eff3ff",
          },
        },
        "light",
      ],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
