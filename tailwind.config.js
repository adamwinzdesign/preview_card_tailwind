/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		backgroundImage: {
			mobileImg: "url('./images/image-product-mobile.jpg')",
			desktopImg: "url('./images/image-product-desktop.jpg')",
		},
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
			custom12: "12px",
			custom13: "13px",
			custom14: "14px",
			custom15: "15px",
			big: "32px",
		},
		letterSpacing: {
			customLetter5: "5px",
		},
		lineHeight: {
			custom23: "23px",
			custom32: "32px",
		},
		height: {
			48: "48px",
			240: "240px",
			450: "450px",
			611: "611px",
			full: "100%",
			screen: "100vh",
		},
		width: {
			300: "300px",
			343: "343px",
			600: "600px",
		},
	},
	plugins: [],
};
