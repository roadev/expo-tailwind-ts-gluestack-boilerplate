module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  bracketSameLine: true,
  trailingComma: 'es5',

  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  // Tailwind v4 has no JS config: the plugin reads the theme from the stylesheet.
  tailwindStylesheet: './app/global.css',
  tailwindAttributes: ['className'],
  tailwindFunctions: ['tv'],
};
