module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    jsx: true,
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    'import/first': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'off', // allow any type
    camelcase: 'off',
    'eol-last': ['error', 'always'],
    'array-bracket-newline': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'no-trailing-spaces': ['error', { skipBlankLines: false }],
  },
}
