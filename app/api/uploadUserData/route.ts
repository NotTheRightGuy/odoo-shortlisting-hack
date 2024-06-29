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
    if (!data.U_NAME) return error = "Name is required";
    if (!data.U_EMAIL || !data.U_EMAIL.includes("@")) return error = "Invalid Email";
    if (!data.U_CONTACT || data.U_CONTACT.length !== 10) return error = "Invalid Contact Number";
    if (!data.U_AGE) return error = "Age is required";
    if (!data.U_SEX) return error = "Sex is required";
    if (!data.U_HOUSE_NO) return error = "House No is required";
    if (!data.U_STREET) return error = "Street is required";
    if (!data.U_CITY) return error = "City is required";
    if (!data.U_STATE) return error = "State is required";

    if (!data.U_PINCODE || data.U_PINCODE.length !== 6) return error = "Pincode is required and should be of 6 digits";

    return error;
}

export async function POST(request: any, response: any) {
    try {
        const { U_NAME, U_EMAIL, U_CONTACT, U_AGE, U_SEX,
            U_HOUSE_NO, U_STREET, U_CITY, U_STATE, U_PINCODE } = await request.json();
        
        // console.log(U_NAME, U_EMAIL, U_CONTACT, U_AGE, U_SEX, U_HOUSE_NO, U_STREET, U_CITY, U_STATE, U_PINCODE);
        const isValid = validate({ U_NAME, U_EMAIL, U_CONTACT, U_AGE, U_SEX, U_HOUSE_NO, U_STREET, U_CITY, U_STATE, U_PINCODE });
        if (isValid !== "") {
            return NextResponse.json({error: {message : isValid}});
        }

        const { error } = await supabase.from("USER_DETAILS").insert({
            U_NAME,
            U_CONTACT,
            U_AGE,
            U_SEX,
            U_HOUSE_NO,
            U_STREET,
            U_CITY,
            U_STATE,
            U_PINCODE,
            U_EMAIL
        });



        return NextResponse.json({ error });
        // return NextResponse.json(data);
    } catch (err) {
        return NextResponse.error();
    }
}
