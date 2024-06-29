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
                    U_CONTACT: number;
                    U_AGE: number;
                    U_SEX: string;
                    U_HOUSE_NO: string;
                    U_STREET: string;
                    U_CITY: string;
                    U_STATE: string;
                    U_PINCODE: number;
                    U_EMAIL: string;
                    // data: Json | null
                };
                Insert: {
                    // the data to be passed to .insert()
                    id?: never; // generated columns must not be supplied
                    U_NAME: string;
                    U_CONTACT: number;
                    U_AGE: string;
                    U_SEX: string;
                    U_HOUSE_NO: string;
                    U_STREET: string;
                    U_CITY: string;
                    U_STATE: string;
                    U_PINCODE: number;
                    U_EMAIL: string;
                };
                Update: {
                    // the data to be passed to .update()
                    id?: never;
                    U_NAME?: string;
                    U_CONTACT?: number;
                    U_AGE?: string;
                    U_SEX?: string;
                    U_HOUSE_NO?: string;
                    U_STREET?: string;
                    U_CITY?: string;
                    U_STATE?: string;
                    U_PINCODE?: number;
                    U_EMAIL?: string;
                };
            };
            CRIME_DETAILS: {
                Row: {
                    C_ID: number;
                    C_NAME: string;
                    C_TYPE: string;
                    C_LATITUDE: number;
                    C_LONGITUDE: number;
                    C_TIME: string;
                    C_DATE: string;
                    //   C_SOLVED: boolean;
                    C_STATUS: string;
                    C_DESC: string;
                };
                Insert: {
                    id?: never;
                    C_NAME: string;
                    C_TYPE: string;
                    C_LATITUDE: number;
                    C_LONGITUDE: number;
                    C_TIME: string;
                    C_DATE: string;
                    C_STATUS: string;
                    C_DESC: string;
                };
                Update: {
                    id?: never;
                    C_NAME?: string;
                    C_TYPE?: string;
                    C_LATITUDE?: number;
                    C_LONGITUDE?: number;
                    C_TIME?: string;
                    C_DATE?: string;
                    C_STATUS?: string;
                    C_DESC?: string;
                };
            };
            POLICE_DETAILS: {
                Row: {
                    P_ID: number;
                    P_NAME: string;
                    P_CONTACT: number;
                    P_AGE: number;
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
                    P_AGE: number;
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
                    P_AGE?: number;
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
