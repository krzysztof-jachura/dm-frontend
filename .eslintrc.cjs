module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'unused-imports',
    'react-refresh',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'unused-imports/no-unused-imports': 'error',
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
};