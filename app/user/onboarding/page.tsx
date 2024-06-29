"use client";
import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import watchdogLogo from "@/components/images/watchdogLogo.png";
import Image from "next/image";
import { useRouter } from 'next/navigation'


function OnBoarding() {
    //   const [userDetails, setUserDetails] = useState({
    //     name: "",
    //     phone: "+91 ",
    //     age: "",
    //     gender: "",
    //     houseNo: "",
    //     societyName: "",
    //     area: "",
    //     city: "",
    //     state: "",
    //     pincode: "",
    //   });
    const router = useRouter()

    const [userDetails, setUserDetails] = useState({
        U_NAME: "",
        U_EMAIL: "",
        U_CONTACT: "",
        U_AGE: "",
        U_SEX: "",
        U_HOUSE_NO: "",
        U_STREET: "",
        U_CITY: "",
        U_STATE: "",
        U_PINCODE: "",
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
        // console.log(userDetails);
        fetch("/api/uploadUserData", {
            method: "POST",
            body: JSON.stringify(userDetails),
        })
            .then((res) => res.json())
            .then((data) =>
                {
                    if (data.error) {
                        alert(data.error.message)
                    }
                    else {
                        alert("Account Created Successfully.")
                        router.push('/user/dashboard')
                    }
                    console.log(data)

                })
            .catch((err) => console.log(err));
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
                    name="U_NAME"
                    value={userDetails.U_NAME}
                    onChange={handleChange}
                />
                <input
                    className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                    placeholder="Enter phone number"
                    value={userDetails.U_CONTACT}
                    name="U_CONTACT"
                    type="number"
                    onChange={handleChange}
                    style={{ content: "''" }}
                />
                    <input
                        type="text"
                        className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                        placeholder="Email"
                        name="U_EMAIL"
                        value={userDetails.U_EMAIL}
                        onChange={handleChange}
                    />
                <div className="flex items-center justify-start gap-5">
                    <input
                        type="number"
                        min={0}
                        className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                        placeholder="Age"
                        // name="age"
                        name="U_AGE"
                        value={userDetails.U_AGE}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                        placeholder="Gender"
                        // name="gender"
                        name = "U_SEX"
                        value={userDetails.U_SEX}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center justify-start gap-5">
                    <input
                        type="text"
                        className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                        placeholder="House no"
                        // name="houseNo"
                        name="U_HOUSE_NO"
                        value={userDetails.U_HOUSE_NO}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                        placeholder="Society Name"
                        // name="societyName"
                        name="U_STREET"
                        value={userDetails.U_STREET}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center justify-start gap-5">
                    <input
                        type="text"
                        className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                        placeholder="City"
                        // name="city"
                        name="U_CITY"
                        value={userDetails.U_CITY}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                        placeholder="State"
                        // name="state"
                        name="U_STATE"
                        value={userDetails.U_STATE}
                        onChange={handleChange}
                    />
                </div>
                <input
                    type="number"
                    min={6}
                    className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-gray-700"
                    placeholder="Pincode"
                    // name="pincode"
                    name="U_PINCODE"
                    value={userDetails.U_PINCODE}
                    onChange={handleChange}
                />
                <button
                    className="mx-auto mt-6 block h-12 w-full rounded-xl bg-blue-600 text-center font-semibold text-white transition-all ease-in hover:bg-blue-700"
                    onClick={handleSubmit}
                >
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
