import { useEffect, useRef } from "react";
import Card from "./card";

export default function Header() {
  const parallaxRef1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (parallaxRef1.current) {
        const elementHeight = parallaxRef1.current.offsetHeight;
        const imageHeight = 3000; // Sesuaikan dengan tinggi gambar asli
        const maxOffset = Math.max(imageHeight - elementHeight, 0);
        const elementTop =
          parallaxRef1.current.getBoundingClientRect().top + window.scrollY;

        const relativeScroll = Math.max(scrollPosition - elementTop, 0);
        const offset = Math.min(relativeScroll * 1, maxOffset);

        parallaxRef1.current.style.backgroundPositionY = `${offset}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lg:min-h-screen">
      <div
        className="md:w-full pt-18 pb-8 bg-[url(/assets/icons/background.png)] bg-cover bg-top bg-no-repeat min-h-[20rem] md:pt-20 lg:pt-10 h-[60rem] sm:h-[28rem] md:h-[30rem] lg:h-[30rem] xl:h-[35rem] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-48"
        ref={parallaxRef1}
      >
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-9 xl:gap-16 2xl:gap-35 lg:py-4 items-center text-white">
          <div className="text-pretty w-full lg:w-1/2 2xl:w-[50rem]">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold font-cabin leading-tight">
              Empowering Businesses Through Technology to Achieve Their Full
              Potential.
            </h1>
          </div>
          <div className="text-pretty w-full lg:w-1/2">
            <h1 className="text-sm text-justify sm:text-base md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-semibold font-cabin opacity-80 leading-relaxed">
              Talenta menghadirkan solusi perangkat lunak inovatif untuk
              menyederhanakan proses, meningkatkan efisiensi, dan mengoptimalkan
              kinerja.
            </h1>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-x-6 lg:gap-x-20 2xl:gap-40 mt-6 sm:mt-8">
          <Card
            judul="Meningkatkan efisiensi bisnis perusahaan"
            isi="Talenta Digital membantu perusahaan Anda mencapai efisiensi operasional yang optimal melalui integrasi teknologi terdepan."
            img="/assets/icons/img-1.png"
          />
          <Card
            judul="Meningkatkan efisiensi bisnis perusahaan"
            isi="Talenta Digital menawarkan solusi lengkap dirancang untuk menyederhanakan proses bisnis dan mengoptimalkan kinerja perusahaan."
            img="/assets/icons/img-1.png"
          />
        </div>
      </div>
    </div>
  );
}
