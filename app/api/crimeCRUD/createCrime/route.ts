// write an endpoint to upload crime history
// Method: POST
// Body: {
    // C_ID: number;
    // C_TYPE: string;
    // C_LATITUDE: number;
    // C_LONGITUDE: number;
    // C_TIME: string;
    // C_DATE: string;
    // C_SOLVED: boolean;
// }

import { createClient } from "@supabase/supabase-js";
import { Database } from "@/database.types";
import { NextResponse } from "next/server";

const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

const validate = (data: any) => {

    let error = "";
    if (!data.C_NAME) return error = "Name is required";
    if (!data.C_TYPE) return error = "Crime Type is required";
    if (!data.C_LATITUDE) return error = "Latitude is required";
    if (!data.C_LONGITUDE) return error = "Longitude is required";
    if (!data.C_TIME) return error = "Time is required";
    if (!data.C_DATE) return error = "Date is required";
    if (!data.C_STATUS) return error = "Status is required";
    if (!data.C_DESC) return error = "Description is required";

    return error;
}

export async function POST(request: any, response: any) {
    try {
        const { C_NAME, C_TYPE, C_LATITUDE, C_LONGITUDE, C_TIME, C_DATE, C_STATUS, C_DESC } = await request.json();
        
        const isValid = validate({ C_NAME, C_TYPE, C_LATITUDE, C_LONGITUDE, C_TIME, C_DATE, C_STATUS, C_DESC });

        if (isValid !== "") {
            return NextResponse.json({error: {message : isValid}});
        }

        const { error } = await supabase.from("CRIME_DETAILS").insert({
            C_NAME,
            C_TYPE,
            C_LATITUDE,
            C_LONGITUDE,
            C_TIME,
            C_DATE,
            C_STATUS,
            C_DESC
        });

        return NextResponse.json({ error });
    }
    catch (err) {
        return NextResponse.error();
    }
}

        




