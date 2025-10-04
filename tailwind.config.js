/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'eggshell': '#f4f1de',
        'burnt-sienna': '#e07a5f',
        'delft-blue': '#3d405b',
        'cambridge-blue': '#81b29a',
        'sunset': '#f2cc8f',
      },
      fontFamily: {
        'sans': ['Inter', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        'mono': ['Roboto Mono', 'PingFang SC', 'Microsoft YaHei', 'monospace'],
        'artistic': ['Ma Shan Zheng', 'cursive'],
      },
    },
  },
  plugins: [],
}

