/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			cream: "#F2EAE2",
			aurometal_saurus: "#6C7289",
			deep_aquamarine: "#3D8168",
			deep_aquamarine_hover: "#1A4032",
			gunmetal: "#1C232B",
		},
		fontFamily: {
			sans: ["Montserrat", "sans-serif"],
			serif: ["Fraunces", "serif"],
		},
		fontSize: {
			big: "32px",
		},
		maxWidth: {
			600: "600px",
		},
	},
	plugins: [],
};
