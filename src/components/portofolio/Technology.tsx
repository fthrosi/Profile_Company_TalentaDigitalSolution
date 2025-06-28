import { motion } from "motion/react";
import { teknologiData } from "../../data/data";
const Teknologi = () => {
  return (
    <div className="px-[clamp(0.5rem,5vw,2rem)] md:px-[clamp(3rem,3vw,3.5rem)] xl:px-[clamp(6rem,10vw,9rem)] 2xl:px-0 2xl:max-w-[1440px] 2xl:mx-auto my-20 flex flex-wrap lg:flex-nowrap gap-8 lg:gap-30 justify-center">
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end order-2 lg:order-1 ">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-3 md:gap-20 gap-10"
        >
          {teknologiData.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-5 items-center">
              <img
                src={item.img}
                alt={item.judul}
                className="size-10 2xl:size-25"
              />
              <h1 className="font-cabin text-blue-950 font-semibold">
                {item.judul}
              </h1>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col font-cabin w-full order-1 lg:order-2 lg:w-1/2"
      >
        <h1 className="text-blue-950 font-semibold 2xl:text-xl">
          Technologies
        </h1>
        <h1 className="text-blue-950 text-5xl/15 2xl:text-6xl/18 font-bold mt-2">
          Teknologi Yang Kami Gunakan
        </h1>
        <p className="opacity-60 mt-3 2xl:text-xl">
          Kami menggunakan teknologi canggih dan inovatif untuk menawarkan
          solusi terbaik sesuai dengan kebutuhan Anda.
        </p>
      </motion.div>
    </div>
  );
};
export default Teknologi;
