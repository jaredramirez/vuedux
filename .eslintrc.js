module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: ['airbnb-base'],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': ["error", { "argsIgnorePattern": "h" }],
    'object-curly-spacing': ['error', 'never'],
    "no-confusing-arrow": ["error", {"allowParens": true}],
    'no-console': ['error', { 'allow': ['log'] } ],
  }
}
