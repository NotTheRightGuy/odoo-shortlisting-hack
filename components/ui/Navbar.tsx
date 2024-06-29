"use client";
import React from "react";
import WatchDogsIcon from "./WatchDogsIcon";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

function Navbar() {
    const { isLoaded, isSignedIn, user } = useUser();

    return (
        <header className="absolute right-0 top-0 flex h-fit z-10 w-full items-center justify-between px-20 py-5">
            <div className="scale-[0.9]">
                <WatchDogsIcon width={250} height={60} />
            </div>
            <nav className="flex items-center gap-14">

                <Link href={"/"} className="text-base font-normal text-gray-600">
                    Reports
                </Link>
                {
                    isSignedIn ? (
                        <Link href={"/user/dashboard"} className="text-base font-normal text-gray-600">
                            Dashboard
                        </Link>
                    ) : null
                }
                {/* <Link href={"/"} className="text-base font-normal text-gray-600">
                    Dashboard
                </Link> */}
                <Link href={"/"} className="text-base font-normal text-gray-600">
                    Cases
                </Link>
                <Link href={"/"} className="text-base font-normal text-gray-600">
                    Security
                </Link>
                {isSignedIn ? (
                    <UserButton />) :
                    <Link
                        href={"/auth/sign-up"}
                        className="rounded-3xl bg-blue-600 px-7 py-4 text-base font-bold text-white"
                    >
                        Create Account"
                    </Link>
                }

      </nav>
        </header>
    );
}

export default Navbar;
