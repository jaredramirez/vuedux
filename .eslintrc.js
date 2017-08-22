module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb-base'],
  plugins: ['react'],
  rules: Object.assign({}, require('./.eslint_rules.js'), {
    'import/no-extraneous-dependencies': [
      'error',
      {devDependencies: ['webpack.config.js']},
    ],
  }),
  env: {
    browser: true,
    node: true,
  },
};
