/** @type {import('tailwindcss').Config} */
// const withMT = import("@material-tailwind/react/utils/withMT");
const withMT = require("@material-tailwind/react/utils/withMT");
 
export default
	withMT({
		content: [
			"./index.html",
			"./src/**/*.{js,ts,jsx,tsx}",
		],
		theme: {
			container: {
				center: true,
			}, 
			extend: {},
		},
		plugins: [],
	})

