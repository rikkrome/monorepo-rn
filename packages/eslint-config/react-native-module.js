import { defineConfig } from 'eslint/config';
import { baseConfig } from './base.js';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import pluginPrettier from 'eslint-plugin-prettier';

const config = defineConfig([
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    plugins: {
      'react-hooks': pluginReactHooks,
      prettier: pluginPrettier,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
]);

export default config;
