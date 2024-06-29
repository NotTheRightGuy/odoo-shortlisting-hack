// create an endpoint for update crime
// Method: PUT
// Body: {
//     C_ID: number;
// C_NAME: string;
//     C_TYPE: string;
//     C_LATITUDE: number;
//     C_LONGITUDE: number;
//     C_TIME: string;
//     C_DATE: string;
//     C_STATUS: string;
//     C_DESC: string;
// }

import { createClient } from "@supabase/supabase-js";
import { Database } from "@/database.types";
import { NextResponse } from "next/server";

const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);


const checkChangedField = (data: any) => {

    // let changedFields = [];
    const changedFields:any = {};
    return changedFields;
}

export async function PUT(request: any, response: any) {
    try {
        const data = await request.json();
        const changedFields = checkChangedField(data);
        const { error } = await supabase.from("CRIME_DETAILS").update(data).eq("C_ID", data.C_ID);
        return NextResponse.json({ error});
    }
    catch (err) {
        return NextResponse.error();
    }
}
