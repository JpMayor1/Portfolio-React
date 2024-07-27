/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        colors: {
            black: "#151515",
            white: "#F5F7F8",
            primary: "#58287F",
            secondary: "#40A2D8",
            primaryDark: "#58E6D9",
            yellow: "#F7DF1E",
            typescript: "#007ACC",
        },
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [],
};
