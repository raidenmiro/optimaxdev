const { presets, configure } = require('eslint-kit')

/** @type {import('eslint-kit').Linter.Config} */
module.exports = configure({
  presets: [
    presets.imports({ sort: { newline: true } }),
    presets.typescript(),
    presets.prettier(),
    presets.node(),
    presets.react({ version: '18.0' })
  ],
  extend: {}
})
