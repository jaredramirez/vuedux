module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb-base'],
  plugins: ['react'],
  rules: {
    'no-unused-vars': ['error', { 'argsIgnorePattern': 'h' }],
    'object-curly-spacing': ['error', 'never'],
    'no-confusing-arrow': ['error', {'allowParens': true}],
    'no-console': ['error', { 'allow': ['log'] } ],
    'import/no-extraneous-dependencies': ['error', {'devDependencies': ['webpack.config.js']}],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
}
