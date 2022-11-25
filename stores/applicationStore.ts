import {
  Application,
  Subtopic,
  Relations,
  Filters
} from "~~/types"

export const useApplicationStore = defineStore('application', {
  state: () => ({
    applications: Array<Object>() as Array<Application>,
    applicationRelations: Relations,
    expandedApplicationFilterType: String() as Subtopic,
    activeApplicationFilters: Filters,
    filteredApplications: Array<Object>() as Array<Application>,    
  }),

  actions: {
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
      console.log(relations)
      for (const type in filters) {
        const filterIds = filters[type as Subtopic]
        const relationIds = relations[type as Subtopic]

        if (filterIds.length == 0) continue

        let filteredRelationIds = []
        for (const relationId of relationIds) {
          if (filterIds.includes(relationId[`${type}Id`])) {
            filteredRelationIds.push(relationId)
          }
        }
        const filteredApplicationIds = filteredRelationIds.map(e => e.applicationId)

        let filteredApplications = []
        for (const application of applications) {
          if (filteredApplicationIds.includes(application.id)) {
            filteredApplications.push(application)
          }
        }
        applications = filteredApplications

      }
      this.filteredApplications = applications
    }
  }

})
