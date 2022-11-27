import {
  DataType,
  Method,
  Relations
} from "~~/types";

export const usePythonStore = defineStore('python', {
  state: () => ({
    dataTypes: Array<Object>() as Array<DataType>,
    methods: Array<Object>() as Array<Method>,
    dataTypeRelations: Relations
  }),

  actions: {

  }
})
