import { Database } from "~~/types/supabase"
export type Algorithm = Database["public"]["Tables"]["Algorithm"]["Row"]
export type Algorithm_AlgorithmType = Database["public"]["Tables"]["Algorithm_AlgorithmType"]["Row"]
export type AlgorithmComplexity = Database["public"]["Tables"]["AlgorithmComplexity"]["Row"]
export type AlgorithmType = Database["public"]["Tables"]["AlgorithmType"]["Row"]
export type Application = Database["public"]["Tables"]["Application"]["Row"]
export type Application_Algorithm = Database["public"]["Tables"]["Application_Algorithm"]["Row"]
export type Application_AlgorithmType = Database["public"]["Tables"]["Application_AlgorithmType"]["Row"]
export type Application_DataStructure = Database["public"]["Tables"]["Application_DataStructure"]["Row"]
export type Application_DataType = Database["public"]["Tables"]["Application_DataType"]["Row"]
export type DataStructure = Database["public"]["Tables"]["DataStructure"]["Row"]
export type DataType = Database["public"]["Tables"]["DataType"]["Row"]
export type DataType_Method = Database["public"]["Tables"]["DataType_Method"]["Row"]
export type Method = Database["public"]["Tables"]["Method"]["Row"]
export type Term = Database["public"]["Tables"]["Term"]["Row"]
export type Topic = Database["public"]["Tables"]["Topic"]["Row"]
export type Subtopic = "algorithm" | "algorithmType" | "dataStructure" | "dataType" | "method" | "application"

export type ApplicationRelatedDataSubtopic = "algorithm" | "algorithmType" | "dataStructure" | "dataType"
export type RelatedData = Partial<Record<Subtopic, Array<Algorithm | AlgorithmType | DataStructure | DataType>>>
export interface ApplicationWithRelatedData extends Application {
  relations: RelatedData
}

export const Relations: Partial<Record<Subtopic, Array<Record<string, number>>>> = {
  "algorithm": Array<Record<string, number>>(),
  "algorithmType": Array<Record<string, number>>(),
  "dataStructure": Array<Record<string, number>>(),
  "dataType": Array<Record<string, number>>(),
  "method": Array<Record<string, number>>(), 
}

export const ApplicationFilters: Partial<Record<ApplicationRelatedDataSubtopic, Array<number>>> = {
  "algorithm": [],
  "algorithmType": [],
  "dataStructure": [],
  "dataType": []
}

export const FilterOptions = {
  "algorithm": Array<Record<"id" | "name", number | string>>(),
  "algorithmType": Array<Record<"id" | "name", number | string>>(),
  "dataStructure": Array<Record<"id" | "name", number | string>>(),
  "dataType": Array<Record<"id" | "name", number | string>>(),
}

export type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
