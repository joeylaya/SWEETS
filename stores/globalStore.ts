import { Topic, ScreenSize } from "~~/types"

export const useGlobalStore = defineStore('global', {
  state: () => ({
    topics: Array<Object>() as Array<Topic>,
    darkMode: Boolean(),
    screenSize: String() as ScreenSize
  }),

  actions: {
    async getAllTopics() {
      if (this.topics.length > 0) return this.topics
      const { data } = await useFetch('/api/Topic')
      this.topics = data.value as Array<Topic>
      console.log(data.value)
      return data.value
    },

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
