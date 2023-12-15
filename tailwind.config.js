module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { "600_a0": "#828282a0" },
        blue_gray: { 100: "#d9d9d9" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        light_blue: { 800: "#0075bb", "800_a0": "#0075bba0" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { sourcesanspro: "Source Sans Pro", inter: "Inter" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
