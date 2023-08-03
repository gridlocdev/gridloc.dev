/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'icon-link': "url('/icons/link.svg')",
				'icon-github': "url('/icons/github-mark-white.svg')",
			},
			fontFamily: {
				sora: ["Sora", "sans-serif"],
			},
		},
		colors: {
			text: '#fcf4f3',
			background: '#1d0a07',
			primary: '#d96e59',
			secondary: '#190906',
			accent: '#bf442b',
		},
	},
	plugins: [],
};
