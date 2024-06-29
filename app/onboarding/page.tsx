"use client";
import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import watchdogLogo from "@/components/images/watchdogLogo.png";
import Image from "next/image";

function OnBoarding() {
    const [userDetails, setUserDetails] = useState({
        name: "",
        phone: "+91 ",
        age: "",
        gender: "",
        houseNo: "",
        societyName: "",
        area: "",
        city: "",
        state: "",
        pincode: "",
    });

    // const [errorDetails, setErrorDetails] = useState({
    //   name: "",
    //   phone: "",
    //   age: "",
    //   gender: "",
    //   houseNo: "",
    //   societyName: "",
    //   area: "",
    //   city: "",
    //   state: "",
    //   pincode: "",
    // });

    const handleChange = (e: any) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(userDetails);
    };

    return (
        <div className="grid h-screen w-screen grid-cols-2 border border-gray-300 bg-gray-50">
            <form className="h-full min-w-96 border border-gray-300 bg-gray-50 px-4">
                <h1 className="mb-2 mt-8 text-3xl font-semibold text-gray-900">
                    Onboarding
                </h1>
                <p className="mb-4 text-gray-600">Set Up Your Guardian Account</p>

                <input
                    type="text"
                    className="mx-auto block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                    placeholder="Name"
                    name="name"
                    value={userDetails.name}
                    onChange={handleChange}
                />
                <input
                    className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                    placeholder="Enter phone number"
                    value={userDetails.phone}
                    name="phone"
                    type="number"
                    onChange={handleChange}
                    style={{ content: "''" }}
                />
                <div className="flex items-center justify-start gap-5">
                    <input
                        type="number"
                        min={0}
                        className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                        placeholder="Age"
                        name="age"
                        value={userDetails.age}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                        placeholder="Gender"
                        name="gender"
                        value={userDetails.gender}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center justify-start gap-5">
                    <input
                        type="text"
                        className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                        placeholder="House no"
                        name="houseNo"
                        value={userDetails.houseNo}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                        placeholder="Society Name"
                        name="societyName"
                        value={userDetails.societyName}
                        onChange={handleChange}
                    />
                </div>
                <input
                    type="text"
                    className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                    placeholder="Area"
                    name="area"
                    value={userDetails.area}
                    onChange={handleChange}
                />
                <div className="flex items-center justify-start gap-5">
                    <input
                        type="text"
                        className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                        placeholder="City"
                        name="city"
                        value={userDetails.city}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                        placeholder="State"
                        name="state"
                        value={userDetails.state}
                        onChange={handleChange}
                    />
                </div>
                <input
                    type="number"
                    min={6}
                    className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                    placeholder="Pincode"
                    name="pincode"
                    value={userDetails.pincode}
                    onChange={handleChange}
                />
                <button className="mx-auto mt-6 block h-12 w-full rounded-xl bg-blue-600 text-center font-semibold text-white transition-all ease-in hover:bg-blue-700" onClick={handleSubmit}>
                    Create Account
                </button>
            </form>
            <div className="flex h-full w-[100%] items-center justify-center">
                <Image alt="" className="w-42" src={watchdogLogo} />
            </div>
        </div>
    );
}

export default OnBoarding;
