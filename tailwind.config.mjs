/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Swis721', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        roman: ['Swis721', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontWeight: {
        thin:       '300',
        extralight: '300',
        light:      '300',
        normal:     '300',
        medium:     '400',
        semibold:   '400',
        bold:       '400',
        extrabold:  '400',
        black:      '400',
      },
    },
  },
  plugins: [],
}
