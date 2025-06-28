import { motion } from "motion/react";
export default function VisiMisi() {
  return (
    <div className="w-full flex justify-center px-[clamp(0.5rem,5vw,2rem)] md:px-[clamp(3rem,3vw,3.5rem)] xl:px-[clamp(6rem,10vw,9rem)] 2xl:px-0 2xl:max-w-[1440px] 2xl:mx-auto">
      <div className="flex flex-col w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] xl:max-w-[70%] items-center mt-12 sm:mt-16 md:mt-20 lg:mt-20 gap-4 sm:gap-5 md:gap-6">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-cabin text-blue-900 font-bold"
        >
          Visi
        </motion.h1>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 1 }}
          className="text-xl sm:text-2xl md:text-3xl font-cabin text-blue-800 opacity-80 font-semibold text-center"
        >
          Merevolusi Lanskap Teknologi
        </motion.h1>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 1 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl font-cabin font-light opacity-65 text-center"
        >
          Mengubah lanskap teknologi dengan menghadirkan layanan aplikasi dan
          web yang luar biasa. Talenta Digital Solution berkomitmen untuk
          membantu bisnis mencapai tujuan mereka dan tetap unggul dalam
          persaingan dengan menyediakan solusi inovatif, andal, dan mudah
          digunakan yang terus berkembang sesuai kebutuhan klien.
        </motion.p>
        <div className="my-4 sm:my-5 border-b-6 border-dashed border-blue-800 opacity-40 w-full z-0"></div>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-cabin text-blue-900 font-bold"
        >
          Misi
        </motion.h1>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 1 }}
          className="text-xl sm:text-2xl md:text-3xl font-cabin text-blue-800 opacity-80 font-semibold text-center"
        >
          Inovasi, Pemberdayaan dan Transformasi
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 1 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl font-cabin opacity-65 text-center"
        >
          Visi kami adalah menjadi penyedia layanan aplikasi dan web terdepan
          yang dikenal atas keahlian dan komitmen dalam memberikan hasil terbaik
          bagi klien. Kami berupaya untuk terus berinovasi dan meningkatkan
          layanan kami agar tetap unggul di pasar serta menjadi mitra tepercaya
          bagi bisnis di seluruh.
        </motion.p>
      </div>
    </div>
  );
}
