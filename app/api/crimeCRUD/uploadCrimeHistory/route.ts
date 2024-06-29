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
    // const errors: any = {};
    let error = "";
    if (!data.C_TYPE) return error = "Crime Type is required";
    if (!data.C_LATITUDE) return error = "Latitude is required";
    if (!data.C_LONGITUDE) return error = "Longitude is required";
    if (!data.C_TIME) return error = "Time is required";
    if (!data.C_DATE) return error = "Date is required";
    if (!data.C_SOLVED) return error = "Solved is required";

    return error;
}

export async function POST(request: any, response: any) {
    try {
        const { C_TYPE, C_LATITUDE, C_LONGITUDE, C_TIME, C_DATE, C_SOLVED } = await request.json();
        
        // console.log(C_TYPE, C_LATITUDE, C_LONGITUDE, C_TIME, C_DATE, C_SOLVED);
        const isValid = validate({ C_TYPE, C_LATITUDE, C_LONGITUDE, C_TIME, C_DATE, C_SOLVED });
        if (isValid !== "") {
            return NextResponse.json({error: {message : isValid}});
        }

        const { error } = await supabase.from("CRIME_DETAILS").insert({
            C_TYPE,
            C_LATITUDE,
            C_LONGITUDE,
            C_TIME,
            C_DATE,
            C_SOLVED
        });

        return NextResponse.json({ error });
    }
    catch (err) {
        return NextResponse.error();
    }
}

        




