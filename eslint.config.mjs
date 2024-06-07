import pluginJs from '@eslint/js';
import globals from 'globals';


export default [
	{files: ['**/*.js'], languageOptions: {
		globals: {
			...globals.browser,
			...globals.node, 
			...globals.commonjs,
			...globals.es2021,
			myCustomGlobal: 'readonly'
		}
	},},
	pluginJs.configs.recommended,
	{
		rules: {
			'no-console': 'off',
			'no-unused-vars': 'warn',
			'linebreak-style': [
				'error',
				'unix'
			],
			'semi': [
				'error', 
				'always'
			],
			// Enforces a maximum line length of 80 characters
			'max-len': [
				'error', 
				{ 'code': 80 }
			],
			// Enforces tabs with a width of 4 spaces for indentation
			'indent': [
				'error', 
				'tab', 
			],
			// Enforces the use of single quotes for string literals
			'quotes': [
				'error', 
				'single'
			],
		},
		
	}
];