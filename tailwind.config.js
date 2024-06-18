/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        colors: {
            black: "#151515",
            white: "#ffffff",
            primary: "#58287F",
            secondary: "#40A2D8",
        },
        extend: {},
    },
    plugins: [],
};
