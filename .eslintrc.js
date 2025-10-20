

const js = require('@eslint/js')

module.exports = [
	js.configs.recommended,
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: 'module',

		}
	}
]