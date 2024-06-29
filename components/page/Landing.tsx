import Map from "../Map";
import Section1 from "./Section1";
import Section2 from "./Section2";
export default function Landing() {
  return (
    <div className="h-maxf w-screen overflow-x-hidden">
      <Section1 />
      <Section2 />
    </div>
  );
}
