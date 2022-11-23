import {
  Application,
  Application_Algorithm,
  Application_DataStructure,
  Application_DataType,
  ApplicationComposite,
  Filters,
  FilterType
} from "~~/types"
import { useAlgorithmStore } from "./algorithmStore";

export const useApplicationStore = defineStore('application', {
  state: () => ({
    applications: Array<Object>() as Array<Application>,
    application_algorithms: Array<Object>() as Array<Application_Algorithm>,
    application_dataStructures: Array<Object>() as Array<Application_DataStructure>,
    application_dataTypes: Array<Object>() as Array<Application_DataType>,
    applicationFilters: Object() as Filters,
    applicationsByFilters: Array<Array<Object>>() as Array<Array<Application>>,
    filteredApplications: Array<Object>() as Array<Application>
  }),

  actions: {
    async getAllApplications() {
      if (this.applications.length > 0) return this.applications
      const { data } = await useFetch('/api/Application')
      this.applications = data.value as Array<Application>
      return this.applications
    },

    async getAllApplication_Algorithms() {
      if (this.application_algorithms.length > 0) return this.application_algorithms
      const { data } = await useFetch('/api/Application_Algorithm')
      this.application_algorithms = data.value as Array<Application_Algorithm>
      return this.application_algorithms
    },

    async getAllApplication_dataStructures() {
      if (this.application_dataStructures.length > 0) return this.application_dataStructures
      const { data } = await useFetch('/api/Application_DataStructure')
      this.application_dataStructures = data.value as Array<Application_DataStructure>
      return this.application_dataStructures
    },

    async getAllApplication_dataTypes() {
      if (this.application_dataTypes.length > 0) return this.application_dataTypes
      const { data } = await useFetch('/api/Application_DataType')
      this.application_dataTypes = data.value as Array<Application_DataType>
      return this.application_dataTypes
    },

    toggleApplicationFilters(filterType: FilterType, id: number) {
      const index =
        this.applicationFilters[`${filterType}Ids`]
          .findIndex(e => e == id)

      if (index >= 0) {
        this.applicationFilters[`${filterType}Ids`]
          .splice(index, 1)
      } else {
        this.applicationFilters[`${filterType}Ids`]
          .push(id)
      }
    },

    getApplicationIdsbyFilter(
      filterIds: Array<number>,
      filterType: FilterType,
      compositeIds: Array<ApplicationComposite>
    ) {
      let applicationIds = []
      for (const el of compositeIds) {
        if (filterIds.includes(el[`${filterType}Id`])) {
          applicationIds.push(el.applicationId)
        }
      }
      return applicationIds
    },

    getApplicationsByAlgorithms(id?: number) {
      if (id) this.toggleApplicationFilters("algorithm", id)
      const { algorithmIds } = this.applicationFilters
      if (algorithmIds.length == 0) return this.applications
      const applicationsByAlgorithms = this.applications.filter(e => {() => {
        this.getApplicationIdsbyFilter(
          algorithmIds,
          "algorithm",
          this.application_algorithms
        ).includes(e.id)
      }})
      this.applicationsByFilters.push(applicationsByAlgorithms)
    },

    getApplicationsByAlgorithmTypes(id?: number) {
      const algorithmStore = useAlgorithmStore()
      if (id) this.toggleApplicationFilters("algorithm", id)
      const { algorithmTypeIds } = this.applicationFilters
      if (algorithmTypeIds.length == 0) return this.applications
      const algorithmIds = algorithmStore.getAlgorithmsByAlgorithmTypes().map(e => e.id)
      const applicationsByAlgorithmTypes = this.applications.filter(e => {() => {
        this.getApplicationIdsbyFilter(
          algorithmIds,
          "algorithm",
          this.application_algorithms
        ).includes(e.id)
      }})
      this.applicationsByFilters.push(applicationsByAlgorithmTypes)
    },

    getApplicationsByDataStructures(id?: number) {
      if (id) this.toggleApplicationFilters("dataStructure", id)
      const { dataStructureIds } = this.applicationFilters
      const applicationsByDataStructures = this.applications.filter(application => {() => {
        let applicationIds = []
        for (const application_dataStructures of this.application_dataStructures) {
          if (dataStructureIds.includes(application_dataStructures.dataStructureId)) {
            applicationIds.push(application_dataStructures.applicationId)
          }
        }
        return applicationIds.includes(application.id)
      }})
      this.applicationsByFilters.push(applicationsByDataStructures)
    },

    getApplicationsByDataTypes(id?: number) {
      if (id) this.toggleApplicationFilters("dataType", id)
      const { dataTypeIds } = this.applicationFilters
      const applicationsByDataTypes = this.applications.filter(application => {() => {
        let applicationIds = []
        for (const application_dataType of this.application_dataTypes) {
          if (dataTypeIds.includes(application_dataType.dataTypeId)) {
            applicationIds.push(application_dataType.applicationId)
          }
        }
        return applicationIds.includes(application.id)
      }})
      this.applicationsByFilters.push(applicationsByDataTypes)
    },

    getApplicationsByFilters() {
      const filteredApplications = this.applications.filter(application => {
        for (const applicationsByFilter of this.applicationsByFilters) {
          if (!applicationsByFilter.includes(application)) return false
        }
        return true
      })
      this.filteredApplications = filteredApplications
      return this.filteredApplications
    }
  }
})
