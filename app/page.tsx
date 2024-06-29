import Landing from "@/components/page/Landing";
import { SignUp } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
export default function Home() {
  return <Landing />;
}
