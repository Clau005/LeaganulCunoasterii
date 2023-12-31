export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  access: {
    Tables: {
      User: {
        Row: {
          email: string;
          firstName: string | null;
          id: string;
          lastName: string | null;
          metadata: Json | null;
        };
        Insert: {
          email: string;
          firstName?: string | null;
          id?: string;
          lastName?: string | null;
          metadata?: Json | null;
        };
        Update: {
          email?: string;
          firstName?: string | null;
          id?: string;
          lastName?: string | null;
          metadata?: Json | null;
        };
        Relationships: [];
      };
    }
  }

  public: {
    Tables: {
      [_ in never]: never
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
