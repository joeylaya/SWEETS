import { FilterType, IApplication, IApplication_Algorithm, IApplication_DataStructure, IApplication_DataType, IFilters } from "~~/types";
import { useAlgorithmStore } from "./algorithmStore";
const algorithmStore = useAlgorithmStore()
type ApplicationComposite = IApplication_Algorithm | IApplication_DataStructure | IApplication_DataType

export const useApplicationStore = defineStore('application', {
  state: () => ({
    applications: Array<Object>() as Array<IApplication>,
    application_algorithms: Array<Object>() as Array<IApplication_Algorithm>,
    application_dataStructures: Array<Object>() as Array<IApplication_DataStructure>,
    application_dataTypes: Array<Object>() as Array<IApplication_DataType>,
    applicationFilters: Object() as IFilters,
    applicationsByFilters: Array<Array<Object>>() as Array<Array<IApplication>>,
    filteredApplications: Array<Object>() as Array<IApplication>
  }),

  actions: {
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
