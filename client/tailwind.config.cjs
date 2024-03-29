/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'primary': '#0E100F',
				'secondary': '#FFFBE1',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			}
		}
	},

	plugins: []
};

module.exports = config;
