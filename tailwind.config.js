/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'icon-link': "url('/link.svg')",
				'icon-github': "url('/github-mark-white.svg')",
			},
		},
		colors: {
			background: '#09201e',
			typography: '#dff6f5',
			primary: '#d67176',
			secondary: '#0b2826',
			accent: '#ae3239',
		},
	},
	plugins: [],
};
