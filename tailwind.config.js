/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
        lightBlack: "#101828",
        darkLiliac: "#332F6B",
        lilac: "#884BD5",
        darker: "rgba(0, 0, 0, 0.1)",
        menuText: "#B692F6",
        white: "#fff",
        transparent: "transparent",
        greyColor: "#667085",
        linkColor: "#6941C6",
        lightGrey: '#9795AD',
      },
    extend: {
      backgroundImage: {
        analize: "url(/analize.svg)"
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      lineHeight: {
        60: "3.75rem"
      },
      borderWidth: {
        1: "1px"
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
