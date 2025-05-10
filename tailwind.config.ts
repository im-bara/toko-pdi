import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow' : '0 4px 15px rgba(200, 50, 50, 0.7)',
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        medievalbrew: {
          primary: '#a35c1e',
          secondary: '#f2a365',
          accent: '#ddb892', 
          neutral: '#3e2c1c',
          'base-100': '#1f1b16',
          info: '#c8b6a6',
          success: '#88c070',
          warning: '#f4a259',
          error: '#d00000',
        },
      },
      'dark', // fallback just in case
    ],
  },
}
export default config
