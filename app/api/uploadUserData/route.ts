import { createClient } from "@supabase/supabase-js";
import { Database } from "@/database.types";
import { NextResponse } from "next/server";

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export async function GET(request: any, response: any) {
  const { data, error } = await supabase.from("USER_DETAILS").insert({
    U_ID: request.query.U_ID,
    HOUSE_NO: request.query.HOUSE_NO,
    SOCIETY_NAME: request.query.SOCIETY_NAME,
    CITY: request.query.CITY,
    STATE: request.query.STATE,
    PINCODE: request.query.PINCODE,
  });

  try {
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.error();
  }
}
