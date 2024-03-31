module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        pink: { 100: "#ffaebd", 300: "#fe6784", 800: "#aa1070", "400_01": "#cd3f97" },
        gray: { 400: "#b6b6b6", "900_03": "#1e242f" },
        purple: { 50: "#f8ebfd" },
        teal: { 400: "#25a3a1", A100: "#a4fdfb" },
        black: { 900: "#000000" },
        blue_gray: { 100: "#cccccc" },
      },
      boxShadow: {
        xs: "0px 0px  11px 0px #0000003f",
        sm: "0px 8px  2px 0px #0000003f",
        md: "0px 0px  10px 0px #0000003f",
        bs: "inset 0px 0px  10px 0px #00000019",
      },
      fontFamily: { shortstack: "Short Stack" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
