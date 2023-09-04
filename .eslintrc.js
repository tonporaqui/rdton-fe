module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		parser: '@typescript-eslint/parser',
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:nuxt/recommended',
		'plugin:vue/vue3-recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['@typescript-eslint'],
	rules: {
		'vue/script-setup-no-uses-vars': 0,
		'vue/multi-word-component-names': 0,
		'vue/no-reserved-component-names': 0,
	},
}
