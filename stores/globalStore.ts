import { Topic, ScreenSize } from "~~/types"

export const useGlobalStore = defineStore('global', {
  state: () => ({
    topics: Array<Object>() as Array<Topic>,
    isNavExpanded: Boolean(),
    isDarkMode: Boolean(),
    screenSize: String() as ScreenSize,
  }),

  actions: {
    toggleNavBar() {
      this.isNavExpanded = !this.isNavExpanded
    },

    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
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
