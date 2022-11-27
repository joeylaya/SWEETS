import {
  Application,
  Subtopic,
  Relations,
  ApplicationFilters,
  ApplicationWithRelatedData,
  Algorithm,
  AlgorithmType,
  DataStructure,
  DataType,
  RelatedData,
  ApplicationRelatedDataSubtopic
} from "~~/types"
import { useAlgorithmStore } from "./algorithmStore"

export const useApplicationStore = defineStore('application', {
  state: () => ({
    applications: Array<Object>() as Array<Application>,
    applicationRelations: Relations,
    expandedApplication: Number(),
    expandedApplicationFilterType: String() as Subtopic,
    activeApplicationFilters: ApplicationFilters,
    filteredApplications: Array<Object>() as Array<ApplicationWithRelatedData>,    
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

    toggleApplicationFilterType(filterType: ApplicationRelatedDataSubtopic) {
      if (this.expandedApplicationFilterType == filterType) {
        this.expandedApplicationFilterType = String() as ApplicationRelatedDataSubtopic
      } else {
        this.expandedApplicationFilterType = filterType
      }
    },

    toggleApplicationFilters(filterType: ApplicationRelatedDataSubtopic, id: number) {
      const filterIds = this.activeApplicationFilters[filterType]!
      const index = filterIds.findIndex(e => e == id)
      if (index >= 0) {
        this.activeApplicationFilters[filterType]!.splice(index, 1)
      } else {
        this.activeApplicationFilters[filterType]!.push(id)
      }

      this.updateFilteredApplications()
    },

    resetFilters() {
      this.activeApplicationFilters = structuredClone(ApplicationFilters)
      this.expandedApplicationFilterType = String() as Subtopic
      this.updateFilteredApplications()
    },

    // UPDATE FILTERED APPLICATIONS
    updateFilteredApplications() {
      const algorithmStore = useAlgorithmStore()
      const dataStructureStore = useDataStructureStore()
      const pythonStore = usePythonStore()

      // Get all data, filters, and relations
      let applications = this.applications as Array<ApplicationWithRelatedData>
      const relatedData: RelatedData = {
        algorithm: algorithmStore.algorithms,
        algorithmType: algorithmStore.algorithmTypes,
        dataStructure: dataStructureStore.dataStructures,
        dataType: pythonStore.dataTypes
      }
      const filters = this.activeApplicationFilters
      const relations = this.applicationRelations

      for (const type in filters) {
        const filterIds = filters[type as ApplicationRelatedDataSubtopic]!
        const relationIds = relations[type as ApplicationRelatedDataSubtopic]!

        let filteredApplicationIds = applications.map(e => e.id)

        const getFilteredApplicationIds = () => {
          let filteredRelationIds = []
          for (const relationId of relationIds) {
            if (filterIds.includes(relationId[`${type}Id`])) {
              filteredRelationIds.push(relationId)
            }
          }

          if (filterIds.length != 0) {
            filteredApplicationIds = filteredRelationIds.map(e => e.applicationId)
          }          
        }
        if (filterIds.length > 0) getFilteredApplicationIds()

        let filteredApplications = []
        for (const application of applications) {
          if (filteredApplicationIds.includes(application.id)) {
            filteredApplications.push(application)
          }
        }
        applications = filteredApplications
      }

      let filteredApplicationsWithRelations = [] as Array<ApplicationWithRelatedData>
      for (const application of applications) {
        let filteredRelatedData: RelatedData = {
          algorithm: [],
          algorithmType: [],
          dataStructure: [],
          dataType: []
        }

        for (const type in filters) {
          const relationIds = relations[type as ApplicationRelatedDataSubtopic]!

          let typeIds = []
          for (const relationId of relationIds) {
            if (relationId.applicationId == application.id) {
              typeIds.push(relationId[`${type}Id`])
            }
          }
          for (const data of relatedData[type as ApplicationRelatedDataSubtopic]!) {
            if (typeIds.includes(data.id)) {
              filteredRelatedData[type as ApplicationRelatedDataSubtopic]!.push(data)
            }
          }
        }
        filteredApplicationsWithRelations.push({ ...application, relations: filteredRelatedData })
      }
      this.filteredApplications = filteredApplicationsWithRelations
    }
  }
})
