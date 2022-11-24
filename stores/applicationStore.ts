import {
  Application,
  Application_Algorithm,
  Application_AlgorithmType,
  Subtopic,
  Relations,
  Filters,
  FilterOptions
} from "~~/types"
import { useAlgorithmStore } from "./algorithmStore"

export const useApplicationStore = defineStore('application', {
  state: () => ({
    applications: Array<Object>() as Array<Application>,
    applicationRelations: Relations,

    applicationFilterOptions: FilterOptions,

    expandedApplicationFilterType: String() as Subtopic,
    activeApplicationFilters: Filters,
    filteredApplications: Array<Object>() as Array<Application>,    
  }),

  actions: {
    // // GET ALL
    // async getAllApplications() {
    //   const time = new Date().getUTCSeconds()
    //   console.log('time', time)
    //   const { data: applications } = await useFetch('api/Application', {key: `api/Application/${time}`})
    //   this.applications = applications.value as Array<Application>
    //   console.log(this.applications)
    //   return this.applications
    // },

    // async getAllApplicationRelations() {
    //   const application_algorithms = await $fetch('api/Application_Algorithm')
    //   this.applicationRelations.algorithm = application_algorithms as Array<Application_Algorithm>      
    //   const application_algorithmTypes = await $fetch('api/Application_AlgorithmType')
    //   this.applicationRelations.algorithmType = application_algorithmTypes as Array<Application_AlgorithmType>
    //   return this.applicationRelations
    // },

    // async getAllApplicationFilterOptions() {

    // },

    // TOGGLE FILTERS
    toggleApplicationFilterType(filterType: Subtopic) {
      if (this.expandedApplicationFilterType == filterType) {
        this.expandedApplicationFilterType = String() as Subtopic
      } else {
        this.expandedApplicationFilterType = filterType
      }
    },

    toggleApplicationFilters(filterType: Subtopic, id: number) {
      const filterIds = this.activeApplicationFilters[filterType]
      const index = filterIds.findIndex(e => e == id)
      if (index >= 0) {
        this.activeApplicationFilters[filterType].splice(index, 1)
      } else {
        this.activeApplicationFilters[filterType].push(id)
      }

      this.updateFilteredApplications()
    },

    // UPDATE FILTERED APPLICATIONS
    updateFilteredApplications() {
      let applications = this.applications
      const filters = this.activeApplicationFilters      
      const relations = this.applicationRelations

      for (const type in filters) {
        const filterIds = filters[type as Subtopic]
        const relationIds = relations[type as Subtopic]

        if (filterIds.length == 0) continue

        const filteredRelationIds = relationIds.filter(e => {
          filterIds.includes(e[`${type}Id`])
        })
        const filteredApplicationIds = filteredRelationIds.map(e => e.applicationId)
        applications = applications.filter(e => {
          filteredApplicationIds.includes(e.id)
        })
      }
      this.filteredApplications = applications
    }
  }

})
