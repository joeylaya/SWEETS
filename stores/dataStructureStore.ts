import {
  DataStructure,
} from "~~/types";

export const useDataStructureStore = defineStore('dataStructure', {
  state: () => ({
    dataStructures: Array<Object>() as Array<DataStructure>,
    dataTypes: Array<Object>() as Array<DataType>,
    dataType_Methods: Array<Object>() as Array<DataType_Method>,
    methods: Array<Object>() as Array<Method>,
  }),

  actions: {
    async getAllDataStructures() {
      if (this.dataStructures.length > 0) return this.dataStructures
      const { data } = await useFetch('/api/DataStructure')
      this.dataStructures = data.value as Array<DataStructure>
      return this.dataStructures
    },
  }
})
