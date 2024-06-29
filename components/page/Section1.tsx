"use client";
import React from "react";
import Navbar from "../ui/Navbar";
import Link from "next/link";
import { Globe } from "../ui/Globe";

function Section1() {
  return (
    <div className="relative overflow-hidden ">
      <Navbar />
      <Globe />
      <div className="flex h-screen w-screen flex-col items-start justify-center gap-5 px-20">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Empowering Communities,
          <br />
          Enhancing <span className="text-blue-700">Security</span>
        </h1>
        <p className="text-lg leading-9 text-gray-600">
          Empowering Communities to{" "}
          <span className="rounded-xl bg-pink-500 px-4 py-1.5 text-slate-50">
            Report
          </span>{" "}
          Incidents, Enabling <br />
          Switch{" "}
          <span className="rounded-xl bg-blue-600 px-4 py-1.5 text-slate-50">
            Response
          </span>{" "}
          ,and Facilitating Effective{" "}
          <span className="rounded-xl bg-orange-500 px-4 py-1.5 text-slate-50">
            Resolution
          </span>
        </p>
        <Link
          href={"/"}
          className="rounded-xl bg-slate-900 px-4 py-3 text-base font-bold text-slate-50"
        >
          Report Incident
        </Link>
      </div>
    </div>
  );
}

export default Section1;
