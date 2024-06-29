"use client";
import React from "react";
import WatchDogsIcon from "./WatchDogsIcon";
import Link from "next/link";

function PoliceNavbar() {
  return (
    <header className="absolute right-0 top-0 flex h-fit z-20 w-full items-center bg-white justify-between border border-b-gray-200">
      <div className="scale-[0.6] relative -left-[30px]">
        <WatchDogsIcon width={250} height={60} />
      </div>
    </header>
  );
}

export default PoliceNavbar;
