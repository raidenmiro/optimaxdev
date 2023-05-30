/** @type {import('prettier').Linter.Config} */
module.exports = {
  ...require('prettier-config-standard'),
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  quoteProps: 'consistent'
};
