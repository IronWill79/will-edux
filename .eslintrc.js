/* eslint-env node */
module.exports = {
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: 'tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  root: true,
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-console': 0,
    'no-multiple-empty-lines': 'error',
    'no-multi-spaces': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    semi: 'error',
    'space-in-parens': 'error',
  },
  overrides: [
    {
      files: ['tests/**/*.ts'],
      env: { jest: true, node: true },
    },
  ],
};
