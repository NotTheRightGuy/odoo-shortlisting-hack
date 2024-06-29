import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="h-screen w-screen flex-center">
      <SignIn routing="hash" />
    </main>
  );
}
