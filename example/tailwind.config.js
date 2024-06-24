import catppuccin from '@catppuccin/daisyui'

// eslint-disable-next-line no-console
console.log(['latte', 'frappe', 'macchiato', 'mocha'].map(theme => catppuccin(theme)))

module.exports = {
  content: ['./src/**/*.{js,ts}', 'index.html'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'light',
      // You can simply select a catppuccin flavor with sane default colors
      catppuccin('latte'),
      // Or you can optionally specify accent colors
      catppuccin('frappe', 'pink'),
      // Or you can optionally customize more semantic colors
      catppuccin('macchiato', { primary: 'maroon' }),
      // Values not explicitly defined will use default values
      catppuccin('mocha', { primary: 'sky', secondary: 'rosewater' }),
    ],
  },
}
