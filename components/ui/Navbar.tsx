"use client";
import React from "react";
import WatchDogsIcon from "./WatchDogsIcon";
import Link from "next/link";

function Navbar() {
  return (
    <header className="absolute right-0 top-0 flex h-fit w-full items-center justify-between px-20 py-5 z-10">
      <div className="">
        <WatchDogsIcon width={250} height={60} />
      </div>
      <nav className="flex items-center gap-14">
        <Link href={"/"} className="text-base font-normal text-gray-600">
          Reports
        </Link>
        <Link href={"/"} className="text-base font-normal text-gray-600">
          Blogs
        </Link>
        <Link href={"/"} className="text-base font-normal text-gray-600">
          Cases
        </Link>
        <Link href={"/"} className="text-base font-normal text-gray-600">
          Security
        </Link>
        <Link
          href={"/"}
          className="rounded-3xl bg-blue-600 px-7 py-4 text-base font-bold text-white cursor-pointer hover:bg-blue-700 transition-all duration-300 ease-in-out"
        >
          Create Account
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
