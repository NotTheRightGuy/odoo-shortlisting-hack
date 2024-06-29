export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      USER_DETAILS: {
        Row: {
          // the data expected from .select()
          U_ID: number;
          //   name: string
          U_NAME: string;
          U_EMAIL: string;
          U_CONTACT: number;
          U_AGE: string;
          U_SEX: string;
          U_HOUSE_NO: string;
          U_STREET: string;
          U_CITY: string;
          U_STATE: string;
          U_PINCODE: number;
          // data: Json | null
        };
        Insert: {
          // the data to be passed to .insert()
          id?: never; // generated columns must not be supplied
          U_NAME: string;
          U_EMAIL: string;
          U_CONTACT: number;
          U_AGE: string;
          U_SEX: string;
          U_HOUSE_NO: string;
          U_STREET: string;
          U_CITY: string;
          U_STATE: string;
          U_PINCODE: number;
        };
        Update: {
          // the data to be passed to .update()
          id?: never;
          // name?: string      // `not null` columns are optional on .update()
          // data?: Json | null
          U_NAME?: string;
          U_EMAIL?: string;
          U_CONTACT?: number;
          U_AGE?: string;
          U_SEX?: string;
          U_HOUSE_NO?: string;
          U_STREET?: string;
          U_CITY?: string;
          U_STATE?: string;
          U_PINCODE?: number;
        };
      };
      CRIME_DETAILS: {
        Row: {
          C_ID: number;
          C_TYPE: string;
          C_LATITUDE: number;
          C_LONGITUDE: number;
          C_TIME: string;
          C_DATE: string;
          C_SOLVED: boolean;
        };
        Insert: {
          id?: never;
          C_TYPE: string;
          C_LATITUDE: number;
          C_LONGITUDE: number;
          C_TIME: string;
          C_DATE: string;
          C_SOLVED: boolean;
        };
        Update: {
          id?: never;
          C_TYPE?: string;
          C_LATITUDE?: number;
          C_LONGITUDE?: number;
          C_TIME?: string;
          C_DATE?: string;
          C_SOLVED?: boolean;
        };
      };
      POLICE_DETAILS: {
        Row: {
          P_ID: number;
          P_NAME: string;
          P_CONTACT: number;
          P_SEX: string;
          P_STATION: string;
          P_HOUSE_NO: string;
          P_HOUSE_STREET: string;
          P_HOUSE_CITY: string;
          P_HOUSE_STATE: string;
          P_HOUSE_PINCODE: number;
        };
        Insert: {
          id?: never;
          P_NAME: string;
          P_CONTACT: number;
          P_SEX: string;
          P_STATION: string;
          P_HOUSE_NO: string;
          P_HOUSE_STREET: string;
          P_HOUSE_CITY: string;
          P_HOUSE_STATE: string;
          P_HOUSE_PINCODE: number;
        };
        Update: {
          id?: never;
          P_NAME?: string;
          P_CONTACT?: number;
          P_SEX?: string;
          P_STATION?: string;
          P_HOUSE_NO?: string;
          P_HOUSE_STREET?: string;
          P_HOUSE_CITY?: string;
          P_HOUSE_STATE?: string;
          P_HOUSE_PINCODE?: number;
        };
      };
    };
  };
}