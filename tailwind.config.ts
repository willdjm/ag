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
        "blue": {
          "500": "#3C6FA5",
          "400": "#22B3FF",
          "600": "#2B71B9",
          "700": "#0085FF",
          "900": "#293462"
        },
        "green": {
          "400": "#2CB900",
          "500": "#5CD1D8",
          "600": "#2A94AB"
        },
        "red": {
          "400": "#F95F57",
          "500": "#F6153D"
        },
        "yellow": {
          "700": "#F9B54A"
        },
        "purple": {
          "500": "#8033B0"
        },
        "linearGradiente": {
          "500": "#F9B54A",
          "600": "#F95F57"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
  ],
}
export default config
