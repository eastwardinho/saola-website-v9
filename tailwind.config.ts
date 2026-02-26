import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saola: {
          orange: '#FFA400',
          coral: '#FF7F32',
          golden: '#FFB81C',
          navy: '#001871',
          caramel: '#AC7644',
          blush: '#F5D0C4',
          'light-pink': '#F5CDF0',
          peach: '#F3CFB3',
          'dark-olive': '#5A4522',
          cream: '#FDF6ED',
          warm: '#FAF3EB',
        },
      },
      fontFamily: {
        serif: ['DM Serif Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        heading: '-0.03em',
        body: '0.006em',
      },
    },
  },
  plugins: [],
}

export default config
