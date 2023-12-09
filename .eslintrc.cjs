module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: latest,
    sourceType: 'module',
  },
  settings: 
  { 
    react: { 
        version: '18.2' 
    } 
  },
  plugins: [
    'react', 'react-refresh'
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
};
