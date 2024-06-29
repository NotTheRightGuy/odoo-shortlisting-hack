"use client";

import React from "react";
import { supabase } from "@/db";

export default function Home() {
  function handleInsert(payload: any) {
    console.log("Change Received!", payload);
  }

  React.useEffect(() => {
    supabase
      .channel("CRIME_DETAILS")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "CRIME_DETAILS",
        },
        handleInsert
      )
      .subscribe();
  }, []);
  return <div>Landing</div>;
}
