import Link from "next/link";
import React from "react";

type LiveIncidentFieldProps = {
  C_ID?: string;
  C_NAME?: string;
  C_LATITUDE?: number;
  C_LONGITUDE?: number;
  C_TYPE?: string;
  C_STATUS?: string;
  C_DESC?: string;
  C_TIME?: string;
  C_SEVERITY?: string;
};

function LiveIncidentField({
  C_ID,
  C_NAME,
  C_LATITUDE,
  C_LONGITUDE,
  C_TYPE,
  C_SEVERITY,
}: LiveIncidentFieldProps) {
  let color = "";
  if (C_SEVERITY === "low")
    color = "bg-green-50 text-green-600 border-green-600";
  else if (C_SEVERITY === "medium")
    color = "bg-yellow-50 text-yellow-600 border-yellow-600";
  else if (C_SEVERITY === "critical")
    color = "bg-red-50 text-red-600 border-red-600";

  return (
    <div className="flex items-center justify-between w-full h-fit border border-slate-200 rounded-2xl p-5">
      <div className="flex flex-col items-start justify-start gap-1">
        <p className="font-normal text-sm text-slate-600">Some Mins Ago</p>
        <p className="font-semibold text-base text-black">{C_NAME}</p>
        <p className="text-slate-600 font-normal text-base">
          {C_TYPE} <span>•</span>
          {C_LONGITUDE}, {C_LATITUDE}
        </p>
      </div>
      <div className="flex flex-col items-end justify-between gap-2">
        {/* Low */}
        <div
          className={`text-xs px-2 py-[2px] border rounded-[9px] uppercase ${color}`}
        >
          {C_SEVERITY}
        </div>
        <Link
          href={"/"}
          className="text-white font-medium bg-blue-600 rounded-[9px] px-3 py-1 text-base"
        >
          Respond
        </Link>
      </div>
    </div>
  );
}

export default LiveIncidentField;
