import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  theme: {
    shortcuts: {
      "header-1": "font-header font-extrabold text-3xl sm:(text-5xl)",
      "header-2": "font-header font-semibold text-2xl sm:(text-3xl)",
      "header-3": "font-header font-semibold text-lg sm:(text-xl)",
      "header-4": "font-header font-semibold",
      "header-5": "font-header font-medium text-sm",
      "outline-hover": "outline outline-2 outline-primary-300",
      "font-primary": "text-primary-500 dark:(text-primary-400)",
      "font-primary-hover": "text-primary-400 dark:(text-primary-300)",
      "bg-section": "rounded bg-neutral-100 dark:(bg-neutral-800)",
      "text-gradient": "bg-gradient-4 bg-clip-text text-transparent",
      "flex-center": "flex justify-center place-items-center",
      "btn": "px-2 py-1 rounded-lg flex-center",
      "icon": "w-6 min-w-6 h-6 min-h-6 p-1 rounded-full bg-neutral-200 hover:(bg-primary-100) dark:(bg-neutral-600 hover:(bg-neutral-700))",
      "temp": "",
      "temp2": "",      
    },
    extend: {
      fontFamily: {
        header: ["Rubik", "Arial", "sans-serif"],
        body: ["Questrial", "Arial", "sans-serif"]
      },
      colors: {
        primary: colors.violet,
        secondary: colors.amber
      },
      boxShadow: {
        DEFAULT: ""
      },
      borderRadius: {
        DEFAULT: "rounded-xl",
      }
    }
  }
})
