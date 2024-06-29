import React from "react";
import Map from "../Map";

export default function PoliceDashboard() {
  return (
    <main className="flex h-screen w-screen">
      <div className="flex-1">
        <Map />
      </div>
      <div className="flex-1"></div>
    </main>
  );
}
