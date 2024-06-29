// write an endpoint to create police record
// Method: POST
// Body: {
    // "P_NAME": "jeet",
    // "P_CONTACT": 9191910001,
    // "P_AGE": 12,
    // "P_SEX": "male",
    // "P_STATION": "Sabarmati",
    // "P_HOUSE_NO": 20,
    // "P_HOUSE_STREET": "shukan eye",
    // "P_HOUSE_CITY": "Gandhinagar",
    // "P_HOUSE_STATE": "Gujarat",
    // "P_HOUSE_PINCODE": 382424
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/database.types";
import { NextResponse } from "next/server";

const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);


const validate = (data: any) => {

    let error = "";
    if (!data.P_NAME) return error = "Name is required";
    if (!data.P_CONTACT) return error = "Contact is required";
    if (!data.P_AGE) return error = "Age is required";
    if (!data.P_SEX) return error = "Sex is required";
    if (!data.P_STATION) return error = "Station is required";
    if (!data.P_HOUSE_NO) return error = "House Number is required";
    if (!data.P_HOUSE_STREET) return error = "Street is required";
    if (!data.P_HOUSE_CITY) return error = "City is required";
    if (!data.P_HOUSE_STATE) return error = "State is required";
    if (!data.P_HOUSE_PINCODE) return error = "Pincode is required";

    return error;
}

export async function POST(request: any, response: any) {
    try {
        const data = await request.json();

        const isValid = validate(data);

        if (isValid !== "") {
            return NextResponse.json({error: {message : isValid}});
        }

        const { error } = await supabase.from("POLICE_DETAILS").insert(data);

        return NextResponse.json({ error });
    }
    catch (err) {
        return NextResponse.error();
    }
}

