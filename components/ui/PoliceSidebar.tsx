import React from "react";
import PoliceDashboardIcon from "./PoliceDashboardIcon";
import LiveFeedIcon from "./LiveFeedIcon";
import { UserButton } from "@clerk/nextjs";

function PoliceSidebar() {
  return (
    <aside className="flex flex-col items-center gap-10 justify-between w-20 h-full border border-r-gray-200 fixed left-0 z-10 pt-28 pb-5">
      <div className="flex flex-col items-center justify-center gap-10">
        <PoliceDashboardIcon />
        <LiveFeedIcon />
      </div>
      <div className="scale-150">
        <UserButton />
      </div>
    </aside>
  );
}

export default PoliceSidebar;
