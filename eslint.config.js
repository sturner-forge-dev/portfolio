import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
	js.configs.recommended,
	...tseslint.configs.recommended,
	...astro.configs.recommended,
	{
		ignores: ['.astro/', 'dist/'],
	},
	{
		files: ['**/*.{js,ts,astro}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
];
