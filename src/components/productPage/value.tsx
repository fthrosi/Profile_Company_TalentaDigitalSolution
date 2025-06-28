import ValueCard from "./valueCard";
import { valueData } from "../../data/data";
import { motion } from "motion/react";
const Value = () => {
  return (
    <div className="px-[clamp(0.5rem,5vw,2rem)] md:px-[clamp(3rem,3vw,3.5rem)] xl:px-[clamp(6rem,10vw,9rem)] 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
      <motion.div 
        initial={{ y: -200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center justify-center gap-6 text-center mt-8 md:mt-0 sm:px-14 md:px-16 lg:px-18">
        <h1 className="text-blue-800 text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
          The Value We Provide
        </h1>
        <h1 className="text-black opacity-55 text-base sm:text-lg md:text-xl xl:text-2xl max-w-3xl">
          The comprehensive services we offer are specifically designed to meet the needs of your business.
        </h1>
      </motion.div>
      <motion.div 
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-x-10 lg:gap-y-10 2xl:gap-x-48 2xl:gap-y-10 mt-12 sm:mt-16 md:mt-20">
        {valueData.map((item, index) => (
          <ValueCard
            judul={item.judul}
            isi={item.isi}
            icon={item.icon}
            key={index}
            nomor={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Value;