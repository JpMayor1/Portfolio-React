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
        },
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [],
};
