module.exports = {
  root: true,
  env: { es6: true, browser: true, es2020: true, node: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-ally/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  rules: {
    "react/prop-types": 0,
    "react/react-in-jsx-scope":0
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: {'jsx':true} },
  settings: { 
    react: { version: '18.2' },
    "import/resolver": {
      node: {
        "extentions": [".js", ".jsx"]
      }
    }
  },
  plugins: ['react', 'react-refresh', 'import', 'jsx-ally'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ]
  },
}
