import { supabase } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { data, error } = await supabase
    .from("CRIME_DETAILS")
    .insert(body)
    .select();
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ data });
}
