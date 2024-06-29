"use client";
import React from "react";
import Map from "../Map";
import WatchDogsIcon from "../ui/WatchDogsIcon";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";

import { supabase } from "@/db";
import Link from "next/link";

export default function UserDashboard() {
  const [crimeType, setCrimeType] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [name, setName] = React.useState("anonymous");
  const [pos, setPos] = React.useState({ lat: 0, lng: 0 });

  return (
    <>
      <main className="h-screen">
        <nav className="flex items-center w-screen justify-between px-6 ">
          <Link href={"/"} className="scale-[0.7] relative -left-[30px]">
            <WatchDogsIcon width={250} height={60} />
          </Link>
          <div>
            {/* <Button className="bg-slate-300 rounded-full hover:bg-slate-400">
              Logout
            </Button> */}
            <div className="scale-[1.3  ]">
              <UserButton></UserButton>
            </div>
          </div>
        </nav>
        <div className="flex border-t-2 h-[85vh]">
          <div className="px-4 py-6 flex-1 ">
            <div className="w-full flex justify-between items-center py-2">
              <p className="font-bold text-2xl px-2">Home</p>
              <Sheet>
                <SheetTrigger className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2">
                  Report Incident
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </SheetDescription>
                  </SheetHeader>
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      // Get current location from the browser
                      navigator.geolocation.getCurrentPosition(
                        async (position) => {
                          setPos({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                          });

                          const { data, error } = await supabase
                            .from("CRIME_DETAILS")
                            .insert([
                              {
                                C_TYPE: crimeType,
                                C_LATITUDE: position.coords.latitude,
                                C_LONGITUDE: position.coords.longitude,
                                C_SEVERITY: status,
                                C_DESC: description,
                                C_NAME: name,
                              },
                            ]);
                          if (error) {
                            alert(
                              "An error occurred while reporting the incident"
                            );
                          } else {
                            alert("Incident reported successfully");
                          }
                        }
                      );
                    }}
                    className="space-y-4 mt-4"
                  >
                    <div>
                      <label
                        htmlFor="crime-type"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Type Of Crime
                      </label>
                      <Select
                        name="crimeType"
                        onValueChange={(value) => setCrimeType(value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a crime type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="theft">Theft</SelectItem>
                          <SelectItem value="assault">Assault</SelectItem>
                          <SelectItem value="vandalism">Vandalism</SelectItem>
                          <SelectItem value="fraud">Fraud</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label
                        htmlFor="status"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Status
                      </label>
                      <Select
                        name="Severity"
                        onValueChange={(val) => {
                          setStatus(val);
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Severity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Moderate</SelectItem>
                          <SelectItem value="high">Critical</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Crime Topic in short
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter the crime topic in short"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Describe the crime"
                        rows={4}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="mt-4 bg-green-500 text-white rounded-sm hover:bg-green-600"
                    >
                      Submit
                    </Button>
                  </form>
                </SheetContent>
              </Sheet>
            </div>
            <div className="overflow-hidden rounded-3xl h-full">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
