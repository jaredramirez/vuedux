module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb-base'],
  rules: {
    'no-unused-vars': ['error', { 'argsIgnorePattern': 'h' }],
    'object-curly-spacing': ['error', 'never'],
    'no-confusing-arrow': ['error', {'allowParens': true}],
    'no-console': ['error', { 'allow': ['log'] } ],
    'import/no-extraneous-dependencies': ['error', {'devDependencies': ['webpack.config.js']}]
  }
}
