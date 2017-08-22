module.exports = {
  env: {jest: true},
  parser: 'babel-eslint',
  extends: ['airbnb-base'],
  rules: Object.assign({}, require('../.eslint_rules.js'), {
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
  }),
};
