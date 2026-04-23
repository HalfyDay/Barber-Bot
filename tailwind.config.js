/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './bot-constructor.js',
    './crm-source/**/*.js',
    './generated/crm-entry.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
