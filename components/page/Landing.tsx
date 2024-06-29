import Section1 from "./Section1";
import Section2 from "./Section2";
import Section5 from "./section5";

export default function Landing() {
  return (
    <div className="h-max w-screen overflow-x-hidden">
      <Section1 />
      <Section2 />
      <Section5 />
    </div>
  );
}
