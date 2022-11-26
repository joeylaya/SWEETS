import {
  Application,
  Subtopic,
  Relations,
  Filters,
  ApplicationWithRelations,
  Algorithm,
  AlgorithmType
} from "~~/types"
import { useAlgorithmStore } from "./algorithmStore"

export const useApplicationStore = defineStore('application', {
  state: () => ({
    applications: Array<Object>() as Array<Application>,
    applicationRelations: Relations,
    expandedApplication: Number(),
    expandedApplicationFilterType: String() as Subtopic,
    activeApplicationFilters: Filters,
    filteredApplications: Array<Object>() as Array<Application>,    
  }),

  actions: {
    // TOGGLE FILTERS
    toggleApplication(id: number) {
      if (this.expandedApplication == id) {
        this.expandedApplication = 0
      } else {
        this.expandedApplication = id
      }
    },

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
      const algorithmStore = useAlgorithmStore()

      let applications = this.applications
      const filters = this.activeApplicationFilters      
      const relations = this.applicationRelations

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

      let applicationsWithRelations = [] as Array<ApplicationWithRelations>

      const algorithms = algorithmStore.algorithms
      const algorithmTypes = algorithmStore.algorithmTypes      
      for (let application of applications) {
        let applicationRelations = {
          algorithm: [] as Array<Algorithm>,
          algorithmType: [] as Array<AlgorithmType>
        }

        const algorithmRelations = relations.algorithm
        let algorithmIds = []
        for (const relation of algorithmRelations) {
          if (relation.applicationId == application.id) {
            algorithmIds.push(relation.algorithmId)
          }
        }
        for (const algorithm of algorithms) {
          if (algorithmIds.includes(algorithm.id)) {
            applicationRelations.algorithm.push(algorithm)
          }
        }

        const algorithmTypeRelations = relations.algorithmType
        let algorithmTypeIds = []
        for (const relation of algorithmTypeRelations) {
          if (relation.applicationId == application.id) {
            algorithmTypeIds.push(relation.algorithmTypeId)
          }
        }
        for (const algorithmType of algorithmTypes) {
          if (algorithmTypeIds.includes(algorithmType.id)) {
            applicationRelations.algorithmType.push(algorithmType)
          }
        }

        applicationsWithRelations.push({ ...application, relations: applicationRelations })
      }

      this.filteredApplications = applicationsWithRelations
    }
  }

})
