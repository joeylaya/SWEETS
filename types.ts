export interface IAlgorithm {
  id: number
  name: string
  slug: string
  algorithmTypeId: number
  timeComplexityId: number
  spaceComplexityId: number
}

export interface IAlgorithmComplexity {
  id: number
  name: string
  notation: string
}

export interface IAlgorithmType {
  id: number
  name: string
  slug: string
}

export interface IApplication {
  id: number
  name: string
  slug: string
  url: string
  priority: boolean
}

export interface IApplication_Algorithm {
  applicationId: number
  algorithmId: number
}

export interface IApplication_DataStructure {
  applicationId: number
  dataStructureId: number
}

export interface IApplication_DataType {
  applicationId: number
  dataTypeId: number
}

export interface IDataStructure {
  id: number
  name: string
  slug: string
}

export interface IDataType {
  id: number
  name: string
  slug: string
  syntax: string
  dataStructureId: number
}

export interface IDataType_Method {
  dataTypeId: number
  methodId: number
}

export interface IMethod {
  id: number
  name: string
  slug: string
  syntax: string
  returnValue: string
  mutation: boolean
  description: string
}

export interface ITopic {
  id: number
  name: string
  slug: string
}

export interface IFilters {
  algorithmIds: Array<number>
  algorithmTypeIds: Array<number>
  applicationIds: Array<number>
  dataStructureIds: Array<number>
  dataTypeIds: Array<number>
}

export type FilterType =
  "algorithm" |
  "algorithmType" |
  "application" |
  "dataStructure" |
  "dataType"
