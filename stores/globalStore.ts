import { storeToRefs } from "pinia";
import { Topic, ScreenSize, FilterOptions } from "~~/types"
import { useAlgorithmStore } from "./algorithmStore";
import { useApplicationStore } from "./applicationStore";

export const useGlobalStore = defineStore('global', {
  state: () => ({
    topics: Array<Object>() as Array<Topic>,
    filterOptions: FilterOptions, 
    isDarkMode: Boolean(),
    screenSize: String() as ScreenSize,
    isNavExpanded: Boolean()
  }),

  actions: {
    async getAllTopics() {
      if (this.topics.length > 0) return this.topics
      const { data } = await useFetch('/api/Topic')
      this.topics = data.value as Array<Topic>
      return data.value
    },

    async getAllFilterOptions() {
      const algorithmStore = useAlgorithmStore()
      const applicationStore = useApplicationStore()

      const { algorithms, algorithmTypes } = storeToRefs(algorithmStore)
      // const algorithms = algorithmStore.algorithms
      // const algorithmTypes = algorithmStore.algorithmTypes
      const applications = applicationStore.applications

      if (algorithms) {
        this.filterOptions.algorithm = algorithms.value.map(e => {
          return {id: e.id, name: e.name!}
        })        
      }
      if (algorithmTypes) {
        this.filterOptions.algorithmType = algorithmTypes.value.map(e => {
          return {id: e.id, name: e.name!}
        })        
      }
      if (applications) {
        this.filterOptions.application = applications.map(e => {
          return {id: e.id, name: e.name!}
        })        
      }
      return this.filterOptions
    },

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
