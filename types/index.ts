import { Database } from "~~/types/supabase"
export type Algorithm = Database["public"]["Tables"]["Algorithm"]["Row"]
export type Algorithm_AlgorithmType = Database["public"]["Tables"]["Algorithm_AlgorithmType"]["Row"]
export type AlgorithmComplexity = Database["public"]["Tables"]["AlgorithmComplexity"]["Row"]
export type AlgorithmType = Database["public"]["Tables"]["AlgorithmType"]["Row"]
export type Application = Database["public"]["Tables"]["Application"]["Row"]
export type Application_Algorithm = Database["public"]["Tables"]["Application_Algorithm"]["Row"]
export type Application_DataStructure = Database["public"]["Tables"]["Application_DataStructure"]["Row"]
export type Application_DataType = Database["public"]["Tables"]["Application_DataType"]["Row"]
export type DataStructure = Database["public"]["Tables"]["DataStructure"]["Row"]
export type DataType = Database["public"]["Tables"]["DataType"]["Row"]
export type DataType_Method = Database["public"]["Tables"]["DataType_Method"]["Row"]
export type Method = Database["public"]["Tables"]["Method"]["Row"]
export type Term = Database["public"]["Tables"]["Term"]["Row"]
export type Topic = Database["public"]["Tables"]["Topic"]["Row"]

export type ApplicationComposite = Application_Algorithm | Application_DataStructure | Application_DataType

export type Filters = {
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

export type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
