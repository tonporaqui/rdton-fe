/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'media',
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
		'docs/content/**/*.md',
	],
	theme: {
		extend: {
			animation: { shine: 'shine 1s' },
			keyframes: { shine: { '100%': { left: '125%' } } },
			colors: {
				dark: {
					primary100: '#FFD700',
					primary200: '#ddb900',
					primary300: '#917800',
					accent100: '#c49216',
					accent200: '#5e3b00',
					text100: '#dcdcdc',
					text200: '#929292',
					bg100: '#1E1E1E',
					bg200: '#2d2d2d',
					bg300: '#454545',
				},
				light: {
					primary100: '#d4eaf7',
					primary200: '#b6ccd8',
					primary300: '#3b3c3d',
					accent100: '#71c4ef',
					accent200: '#00668c',
					text100: '#1d1c1c',
					text200: '#313d44',
					bg100: '#fffefb',
					bg200: '#f5f4f1',
					bg300: '#cccbc8',
				},
			},
			fontFamily: {
				montserrat: ['Montserrat Alternates', 'sans-serif'],
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
}
