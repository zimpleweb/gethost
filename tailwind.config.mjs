// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B00',
        'primary-dark': '#E55A00',
        secondary: '#f8f9fa',
        dark: '#1a1a1a',
        gray: '#6c757d',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: { themes: ['light'] },
};