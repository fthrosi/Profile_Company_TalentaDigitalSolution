import { motion } from "motion/react";
export default function Pertumbuhan() {
  return (
    <div className="px-[clamp(0.5rem,5vw,2rem)] md:px-[clamp(3rem,3vw,3.5rem)] xl:px-[clamp(6rem,10vw,9rem)] 2xl:px-0 2xl:max-w-[1440px] 2xl:mx-auto mt-12 sm:mt-16 md:mt-20 lg:mt-40 flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-x-5">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full lg:w-1/2 flex flex-col justify-center gap-4 sm:gap-6 md:gap-8"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-cabin text-[#102B5B] font-bold">
          Perjalanan & Pertumbuhan
        </h1>
        <p className="text-justify text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 md:leading-8 opacity-65">
          Sejak awal, PT Talenta Digital Solution berfokus pada pengembangan
          aplikasi dan website yang dirancang untuk memenuhi kebutuhan berbagai
          industri, mulai dari startup hingga perusahaan besar. Dengan komitmen
          terhadap kualitas dan kepuasan pelanggan, perusahaan berhasil
          menyelesaikan berbagai proyek penting dan membangun reputasi sebagai
          penyedia layanan digital yang handal.
        </p>
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full lg:w-1/2 flex items-center justify-center mt-6 lg:mt-0"
      >
        <img
          src="/assets/icons/img-section.png"
          alt=""
          className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[90%]"
        />
      </motion.div>
    </div>
  );
}
