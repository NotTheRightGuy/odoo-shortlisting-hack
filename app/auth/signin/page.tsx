import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex-center h-screen w-screen">
      <SignIn routing="hash" />
    </main>
  );
}
