/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'upper-right': "url('/assets/img/buttom-left.webp')",
                'bottom-left': "url('/assets/img/buttom-left.webp')",
            }
        }
    },
    plugins: [],
};
