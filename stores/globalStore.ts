type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    darkMode: Boolean(),
    screenSize: String() as ScreenSize
  }),

  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },

    updateScreenSize(width: number) {
      if (width < 640) this.screenSize = 'xs'
      else if (width < 768) this.screenSize = 'sm'
      else if (width < 1024) this.screenSize = 'lg'
      else if (width < 1280) this.screenSize = 'xl'
      else this.screenSize = '2xl'
    }
  }
})
