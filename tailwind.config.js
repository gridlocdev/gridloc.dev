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
			text: '#f4dce0',
			background: '#040102',
			primary: '#6fd3c0',
			secondary: '#0e142f',
			accent: '#44c5ae',
		},
	},
	plugins: [],
};
