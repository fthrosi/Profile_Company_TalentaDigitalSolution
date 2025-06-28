import CardJasa from "./cardJasa";
import { jasaData } from "../../data/data";
import { motion } from "motion/react";
const Jasa = () => {
  return (
    <div className="px-[clamp(0.5rem,5vw,2rem)] md:px-[clamp(3rem,3vw,3.5rem)] xl:px-[clamp(6rem,10vw,9rem)] md:mt-10 lg:mt-0 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center items-center flex-col gap-6 text-center mt-12 sm:mt-16 md:mt-20"
      >
        <h1 className="text-blue-800 text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
          Comprehensive Business Solutions
        </h1>
        <h1 className="text-black opacity-55 text-base sm:text-lg md:text-xl xl:text-2xl max-w-3xl">
          Tailored Technology to Streamline Operations and Drive Growth
        </h1>
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 sm:gap-y-10 md:gap-20 gap-x-5 mt-20 2xl:mt-25"
      >
        {jasaData.map((item, index) => (
          <CardJasa
            img={item.img}
            judul={item.judul}
            isi={item.isi}
            key={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Jasa;
