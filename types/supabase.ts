export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Algorithm: {
        Row: {
          id: number
          name: string
          spaceComplexityId: number | null
          slug: string | null
          timeComplexityId: number | null
        }
        Insert: {
          id?: number
          name: string
          spaceComplexityId?: number | null
          slug?: string | null
          timeComplexityId?: number | null
        }
        Update: {
          id?: number
          name?: string
          spaceComplexityId?: number | null
          slug?: string | null
          timeComplexityId?: number | null
        }
      }
      Algorithm_AlgorithmType: {
        Row: {
          algorithmId: number
          algorithmTypeId: number
        }
        Insert: {
          algorithmId: number
          algorithmTypeId: number
        }
        Update: {
          algorithmId?: number
          algorithmTypeId?: number
        }
      }
      AlgorithmComplexity: {
        Row: {
          id: number
          notation: string | null
          name: string | null
        }
        Insert: {
          id?: number
          notation?: string | null
          name?: string | null
        }
        Update: {
          id?: number
          notation?: string | null
          name?: string | null
        }
      }
      AlgorithmType: {
        Row: {
          id: number
          name: string | null
          slug: string | null
        }
        Insert: {
          id?: number
          name?: string | null
          slug?: string | null
        }
        Update: {
          id?: number
          name?: string | null
          slug?: string | null
        }
      }
      Application: {
        Row: {
          id: number
          name: string | null
          url: string | null
          slug: string | null
          priority: boolean
        }
        Insert: {
          id?: number
          name?: string | null
          url?: string | null
          slug?: string | null
          priority?: boolean
        }
        Update: {
          id?: number
          name?: string | null
          url?: string | null
          slug?: string | null
          priority?: boolean
        }
      }
      Application_Algorithm: {
        Row: {
          algorithmId: number
          applicationId: number
        }
        Insert: {
          algorithmId: number
          applicationId: number
        }
        Update: {
          algorithmId?: number
          applicationId?: number
        }
      }
      Application_AlgorithmType: {
        Row: {
          algorithmTypeId: number
          applicationId: number
        }
        Insert: {
          algorithmTypeId: number
          applicationId: number
        }
        Update: {
          algorithmTypeId?: number
          applicationId?: number
        }
      }
      Application_DataStructure: {
        Row: {
          applicationId: number
          dataStructureId: number
        }
        Insert: {
          applicationId: number
          dataStructureId: number
        }
        Update: {
          applicationId?: number
          dataStructureId?: number
        }
      }
      Application_DataType: {
        Row: {
          applicationId: number
          dataTypeId: number
        }
        Insert: {
          applicationId: number
          dataTypeId: number
        }
        Update: {
          applicationId?: number
          dataTypeId?: number
        }
      }
      DataStructure: {
        Row: {
          id: number
          name: string | null
          slug: string | null
        }
        Insert: {
          id?: number
          name?: string | null
          slug?: string | null
        }
        Update: {
          id?: number
          name?: string | null
          slug?: string | null
        }
      }
      DataType: {
        Row: {
          id: number
          name: string | null
          slug: string | null
          dataStructureId: number | null
          syntax: string | null
        }
        Insert: {
          id?: number
          name?: string | null
          slug?: string | null
          dataStructureId?: number | null
          syntax?: string | null
        }
        Update: {
          id?: number
          name?: string | null
          slug?: string | null
          dataStructureId?: number | null
          syntax?: string | null
        }
      }
      DataType_Method: {
        Row: {
          methodId: number
          dataTypeId: number
        }
        Insert: {
          methodId: number
          dataTypeId: number
        }
        Update: {
          methodId?: number
          dataTypeId?: number
        }
      }
      Method: {
        Row: {
          id: number
          name: string | null
          slug: string | null
          syntax: string | null
          returnValue: string | null
          mutation: boolean | null
          description: string | null
        }
        Insert: {
          id?: number
          name?: string | null
          slug?: string | null
          syntax?: string | null
          returnValue?: string | null
          mutation?: boolean | null
          description?: string | null
        }
        Update: {
          id?: number
          name?: string | null
          slug?: string | null
          syntax?: string | null
          returnValue?: string | null
          mutation?: boolean | null
          description?: string | null
        }
      }
      Term: {
        Row: {
          id: number
          name: string | null
          description: string | null
          example: string | null
          dataStructureId: number | null
        }
        Insert: {
          id?: number
          name?: string | null
          description?: string | null
          example?: string | null
          dataStructureId?: number | null
        }
        Update: {
          id?: number
          name?: string | null
          description?: string | null
          example?: string | null
          dataStructureId?: number | null
        }
      }
      Topic: {
        Row: {
          id: number
          name: string | null
          slug: string | null
        }
        Insert: {
          id?: number
          name?: string | null
          slug?: string | null
        }
        Update: {
          id?: number
          name?: string | null
          slug?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
