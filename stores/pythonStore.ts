import {
  DataType,
  DataType_Method,
  Method
} from "~~/types";

export const usePythonStore = defineStore('python', {
  state: () => ({
    dataTypes: Array<Object>() as Array<DataType>,
    dataType_Methods: Array<Object>() as Array<DataType_Method>,
    methods: Array<Object>() as Array<Method>,
  }),

  actions: {
    async getAllDataTypes() {
      if (this.dataTypes.length > 0) return this.dataTypes
      const { data } = await useFetch('/api/DataType')
      this.dataTypes = data.value as Array<DataType>
      return this.dataTypes
    },

    async getAllDataType_Methods() {
      if (this.dataType_Methods.length > 0) return this.dataType_Methods
      const { data } = await useFetch('/api/DataType_Method')
      this.dataType_Methods = data.value as Array<DataType_Method>
      return this.dataType_Methods
    },

    async getAllMethods() {
      if (this.methods.length > 0) return this.methods
      const { data } = await useFetch('/api/Method')
      this.methods = data.value as Array<Method>
      return this.methods
    },    
  }
})
