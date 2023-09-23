// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	devtools: { enabled: true },
	modules: [
		'@pinia/nuxt',
		'nuxt-icon',
		'@nuxt/image',
		'@nuxtjs/color-mode',
		'@nuxtjs/tailwindcss',
		'@vee-validate/nuxt',
	],
	css: ['~/assets/styles/main.scss', '~/assets/css/main.css'],
	colorMode: {
		preference: 'system', // default value of $colorMode.preference
		fallback: 'light', // fallback value if not system preference found
		hid: 'nuxt-color-mode-script',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme',
		classSuffix: '',
		storageKey: 'nuxt-color-mode',
	},
	imports: {
		dirs: [
			// Scan top-level modules
			'composables',
		],
	},
})
