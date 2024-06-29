import Link from "next/link";
import React from "react";
import HandIcon from "../ui/HandIcon";
import ClockIcon from "../ui/ClockIcon";
import SolvedIcon from "../ui/SolvedIcon";
import Downfall from "../ui/Downfall";

function Section2() {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-start gap-24 px-10 py-20">
        <h1 className="text-3xl font-bold tracking-tight text-gray-800">
          Our Impact
        </h1>
        <div className="flex items-start justify-between gap-6 rounded-[40px] border w-full border-slate-200 p-16">
          <div className="flex h-fit w-64 flex-col items-center justify-start">
            <div>
              <HandIcon />
            </div>
            <div className="h-fit w-full text-wrap font-medium text-2xl text-center "><span className="text-blue-800">15,00,000</span> incidents reported</div>
          </div>
          <div className="flex h-fit w-64 flex-col items-center justify-start">
            <ClockIcon />
            <div className="h-fit w-full text-wrap font-medium text-2xl text-center"><span className="text-blue-800">35%</span> reduction in average response time</div>
          </div>
          <div className="flex h-fit w-64 flex-col items-center justify-start">
            <SolvedIcon />
            <div className="h-fit w-full text-wrap font-medium text-2xl text-center"><span className="text-blue-800">65%</span> of reported cases resolved</div>
          </div>
          <div className="flex h-fit w-64 flex-col items-center justify-start">
            <Downfall />
            <div className="h-fit w-full text-wrap font-medium text-2xl text-center"><span className="text-blue-800">15,00,000</span> cases solved</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
