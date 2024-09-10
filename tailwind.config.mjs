// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      extend: {
        background: 'var(--color-background)',
        backdropBlur: {
          sm: '4px',
        },
        surface: 'var(--color-surface)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        link: 'var(--color-link)',
        accent: 'var(--color-accent)',
        border: 'var(--color-border)',
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  };
  