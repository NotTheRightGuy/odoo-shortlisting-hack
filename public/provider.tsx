"use client";
import { RecoilRoot } from "recoil";
import { ClerkProvider } from "@clerk/nextjs";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRoot>
      <ClerkProvider>{children}</ClerkProvider>
    </RecoilRoot>
  );
}
