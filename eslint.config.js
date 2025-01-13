import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import googleConfig from 'eslint-config-google';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    // Merge the recommended configurations
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended, // TypeScript rules
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Merge Google rules but remove `valid-jsdoc`
      ...Object.fromEntries(
        Object.entries(googleConfig.rules).filter(
          ([ruleName]) => ruleName !== 'valid-jsdoc'
        )
      ),
      // Merge other rules
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'require-jsdoc': 'off', // Explicitly disable Google's require-jsdoc rule
    },
  },
);
