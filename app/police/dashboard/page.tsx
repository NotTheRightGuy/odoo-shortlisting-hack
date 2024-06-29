"use client";

import Map from "@/components/Map";
import LiveIncidentField from "@/components/ui/LiveIncidentField";
import PoliceNavbar from "@/components/ui/PoliceNavbar";
import PoliceSidebar from "@/components/ui/PoliceSidebar";
import { supabase } from "@/db";
import React from "react";

function PoliceDashboard() {
  const [crimes, setCrimes] = React.useState<any[]>([]);

  const handleUpdate = (payload: any) => {
    setCrimes((prev: any[]) => [payload.new, ...prev]);
  };

  React.useEffect(() => {
    const fetchCrimes = async () => {
      const { data, error } = await supabase
        .from("CRIME_DETAILS")
        .select()
        .order("C_TIME", { ascending: false });
      if (error) console.log("error", error);
      else {
        setCrimes(data);
        console.log(data);
      }
    };

    fetchCrimes();

    supabase
      .channel("crimes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "CRIME_DETAILS" },
        handleUpdate
      )
      .subscribe();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-start justify-start gap-5">
      <PoliceNavbar />
      <PoliceSidebar />
      <div className="pt-20 pl-24 font-semibold text-3xl">Dashboard</div>
      <div className="flex md:flex-row flexc items-center justify-between gap-5 w-full h-full overflow-hidden pl-24 pb-8 pr-4">
        <div className="h-full md:w-[calc(100vw-40em)] w-full overflow-hidden rounded-3xl">
          <Map />
        </div>
        <div className="w-full px-5 pt-0 pb-5 rounded-xl border border-slate-200 h-full overflow-y-scroll overflow-x-hidden flex-1 flex flex-col items-start justify-start gap-3">
          <div className="sticky font-semibold text-2xl w-full h-fit py-5 top-0 bg-white">
            Live Incident Feed
          </div>
          {crimes.map((crime: any, index: number) => (
            <LiveIncidentField
              key={index}
              C_ID={crime.C_ID}
              C_LATITUDE={crime.C_LATITUDE}
              C_LONGITUDE={crime.C_LONGITUDE}
              C_NAME={crime.C_NAME}
              C_TYPE={crime.C_TYPE}
              C_STATUS={crime.C_STATUS}
              C_DESC={crime.C_DESC}
              C_SEVERITY={crime.C_SEVERITY}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default PoliceDashboard;
