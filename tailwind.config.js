/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sora: ['Sora', 'sans-serif'],
			},
		},
		colors: {
			text: '#d0ebfb',
			background: '#041f2f',
			primary: '#f8c0a0',
			secondary: '#223404',
			accent: '#ee6517',
		},
	},
	plugins: [],
};
