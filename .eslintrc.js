module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'standard',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      parser: '@typescript-eslint/parser',
      jsx: true,
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      'import/first': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      camelcase: 'off',
    },
    
  }
  