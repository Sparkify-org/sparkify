import GlowEffect from "@/components/GlowEffect/GlowEffect";
import { WandSparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="min-h-screen w-100 flex justify-center items-center relative overflow-x-hidden gap-20">
        <div className="relative">
          <WandSparkles
            className="mx-auto"
            size={"200px"}
            strokeWidth={"1px"}
            fill="#ffffff"
          />
          <GlowEffect />
        </div>
        <h1 className="font-semibold mt-20 text-center text-6xl font-mono">Sparkify</h1>
      </main>
    </div>
  );
}
