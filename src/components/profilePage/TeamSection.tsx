import TeamSwiper from "./TeamSwiper";
import { motion } from "motion/react";
export default function TeamSection() {
  return (
    <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-20 xl:mt-30 px-[clamp(0.5rem,5vw,2rem)] md:px-[clamp(3rem,3vw,3.5rem)] xl:px-[clamp(6rem,10vw,9rem)] 2xl:px-0 2xl:max-w-[1440px] 2xl:mx-auto py-6 sm:py-8 md:py-10">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 1 }}
        className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5 flex flex-col space-y-2 sm:space-y-3 md:space-y-4 font-cabin"
      >
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl text-[#808080] font-semibold">
          Company Members
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-blue-950 font-bold leading-tight">
          We are proud of our team members
        </h1>
        <h1 className="text-sm sm:text-base md:text-lg xl:text-xl text-[#808080] font-semibold">
          Talenta Digital didukung oleh tim profesional yang berpengalaman serta
          memiliki dedikasi tinggi.
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 1 }}
        className="w-full mt-6 sm:mt-8 md:mt-10"
      >
        <TeamSwiper />
      </motion.div>
    </div>
  );
}
