import { Special_Elite } from "next/font/google";
const font = Special_Elite({ subsets: ["latin"], weight: ["400"] });
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-[#121212] text-white">
      <Card className="flex h-2/3 w-1/3 flex-col rounded-xl">
        <div className="h-2/3 object-contain">
          <img
            src="https://i.pinimg.com/564x/c4/87/ac/c487acc7e9e07d40287f967908cfc688.jpg"
            className="h-full w-full rounded-t-xl"
          />
        </div>

        <div className="mt-8 px-4 text-xl font-bold opacity-80">
          <div className={font.className}>
            There are time when am convinced I am unfit for any{" "}
            <span className="underline underline-offset-2">
              human realtionships
            </span>
            <div className="mt-2 text-sm opacity-75">- Franz Kafka</div>
          </div>
        </div>
      </Card>
    </main>
  );
}
