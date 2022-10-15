module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'jest',  "react-hooks"],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    indent: ['error', 2],
    /* "linebreak-style": [
      "error",
      "unix"
    ],*/
    quotes: ['error', 'single'],
    /* "semi": [
      2,
      "never"
    ],*/
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    /*"no-console": [2, {"allow": ["warn", "error"] }],*/
    'react/prop-types': 0,
    "react-hooks/rules-of-hoocks": 'error',
    "react-hooks/exhaustive-deps": 'warn'
  },
};
