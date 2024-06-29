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

export default function UserDashboard() {
  return (
    <>
      <main className="h-screen">
        <nav className="flex items-center w-screen justify-between px-6 ">
          <div className="scale-75">
            <WatchDogsIcon />
          </div>
          <div>
            <Button className="bg-slate-300 rounded-full hover:bg-slate-400">
              Logout
            </Button>
          </div>
        </nav>
        <div className="flex border-t-2 h-[85vh]">
          <div className="px-4 py-6 flex-1 ">
            <div className="w-full flex justify-between items-center py-2">
              <p className="font-bold text-2xl">Home</p>
              <Sheet>
                <SheetTrigger>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                    Report Incident
                  </Button>
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
                    onSubmit={(e) => {
                      e.preventDefault();
                      // Add your form submission logic here
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
                      <Select name="crimeType">
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
                      <Select name="status">
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="reported">Reported</SelectItem>
                          <SelectItem value="under-investigation">
                            Under Investigation
                          </SelectItem>
                          <SelectItem value="resolved">Resolved</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
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
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <Button type="submit" className="mt-4">
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
