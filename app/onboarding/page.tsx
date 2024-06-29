"use client";
import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";

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
  };
  return (
    <div className="grid h-screen w-screen border border-gray-300 bg-gray-50">
      <form className="h-full min-w-96 max-w-[50%] border border-gray-300 bg-gray-50 p-6 px-4">
        <h1 className="mb-2 mt-8 text-3xl font-semibold text-gray-900">
          Onboarding
        </h1>
        <p className="mb-4 text-gray-600">Set Up Your Guardian Account</p>

        <input
          type="text"
          className="mx-auto block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-white"
          placeholder="Name"
          name="name"
          value={userDetails.name}
          onChange={handleChange}
        />
        <input
          className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-white"
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
            className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-white"
            placeholder="Age"
            name="age"
            value={userDetails.age}
            onChange={handleChange}
          />

          <input
            type="text"
            className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-white"
            placeholder="Gender"
            name="gender"
            value={userDetails.gender}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-start gap-5">
          <input
            type="text"
            className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-white"
            placeholder="House no"
            name="houseNo"
            value={userDetails.houseNo}
            onChange={handleChange}
          />
          <input
            type="text"
            className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-white"
            placeholder="Society Name"
            name="societyName"
            value={userDetails.societyName}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-white"
          placeholder="Area"
          name="area"
          value={userDetails.area}
          onChange={handleChange}
        />
        <div className="flex items-center justify-start gap-5">
          <input
            type="text"
            className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-white"
            placeholder="City"
            name="city"
            value={userDetails.city}
            onChange={handleChange}
          />
          <input
            type="text"
            className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-white"
            placeholder="State"
            name="state"
            value={userDetails.state}
            onChange={handleChange}
          />
        </div>
        <input
          type="number"
          min={6}
          className="mx-auto mt-6 block h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-left text-white"
          placeholder="Pincode"
          name="pincode"
          value={userDetails.pincode}
          onChange={handleChange}
        />
        <button className="mx-auto mt-6 block h-12 w-full rounded-xl bg-blue-600 text-center font-semibold text-white transition-all ease-in hover:bg-blue-700">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default OnBoarding;
