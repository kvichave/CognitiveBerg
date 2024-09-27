"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

export default function Home() {
  const words = [
    "interview",
    "Business meeting",
    "Personal Communication",
    "Group discussion",
  ];

  const router = useRouter();
  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          <br /> Cognitive Berg.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Transforming Conversations into Confident Connections through
          Interactive Simulations!
        </p>
      </BackgroundLines>

      <div className="h-[20rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Build for users to
          <br />
          improve them in <FlipWords words={words} />
        </div>
      </div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Let's Begin <br /> Signup
          <div class="text-lg mt-8 items-center justify-center">
            <button className="px-4 py-1 rounded-l-xl shadow-lg  text-white m-0 bg-blue-500 hover:bg-blue-900 transition">
              Login
            </button>
            <button className="px-2 py-1  text-black rounded-r-xl bg-white hover:bg-blue-900 transition">
              Register
            </button>
          </div>
        </motion.h1>
      </LampContainer>
    </>
  );
}
