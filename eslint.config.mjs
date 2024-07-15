import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    extends: [
      "airbnb-base",
      "prettier",
      "plugin:node/recommended",
      pluginJs.configs.recommended,
    ],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error",
      "no-unused-vars": "error",
      "no-console": "off",
    },
  },
];
