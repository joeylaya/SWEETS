export const useGlobalStore = defineStore('global', {
  state: () => ({
    darkMode: Boolean()
  }),

  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    }
  }
})
