import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  darkMode: 'class',
  content: [
    'docs/content/**/*.md'
  ],
  extend: {  animation: {    shine: "shine 1s",  },  keyframes: {    shine: {      "100%": { left: "125%" },    },  },  },
}