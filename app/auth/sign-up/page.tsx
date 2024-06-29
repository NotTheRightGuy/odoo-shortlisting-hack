"use client";
import { SquareGridFaded } from "@/components/ui/SquareBg";
import { SignUp, useAuth, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
export default function Page() {
  const { isSignedIn } = useUser();

  // if (isSignedIn) redirect("/user/dashboard");

  return (
    <main className="h-screen w-screen flex-center">
      <SquareGridFaded faded={true}>
        <SignUp routing="hash" />
      </SquareGridFaded>
    </main>
  );
}
