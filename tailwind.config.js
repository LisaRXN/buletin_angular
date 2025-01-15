// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        montUnderline: ["Montserrat Underline", "sans-serif"],
      },
      colors: {
        mygreen: "#00FECA",
        myyellow: "#FDF200",
        mypink: "#FF85EA",
        myviolet: "#7B61F8",
        myviolet_shade: "#f1effe",

        mygreen2: "#8AF7EA",
        mypink2: "#FDCBFC",
        myviolet2: "#C6BDEA",
        myblue2: "#48ADF1",
      }
    },
  },
  plugins: [],
};
