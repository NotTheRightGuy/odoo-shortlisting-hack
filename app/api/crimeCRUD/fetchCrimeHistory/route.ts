// create a route for fetching crime history
// Method: GET
// Query: {
//     C_ID: number;
// }

import { createClient } from "@supabase/supabase-js";
import { Database } from "@/database.types";
import { NextResponse } from "next/server";

const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export async function GET(request: any, response: any) {
    try {
        // const { C_ID } = request.query;
        const { data, error } = await supabase.from("CRIME_DETAILS").select("*");

        if (error) {
            return NextResponse.json({ error });
        }

        return NextResponse.json({ data });
    }
    catch (err) {
        return NextResponse.error();
    }
}

