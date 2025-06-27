import { useEffect, useRef } from "react";

export default function Header() {
  const parallaxRef1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (parallaxRef1.current) {
        const elementHeight = parallaxRef1.current.offsetHeight;
        const imageHeight = 3000;
        const maxOffset = Math.max(imageHeight - elementHeight, 0);

        const elementTop = parallaxRef1.current.getBoundingClientRect().top + window.scrollY;
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
    <div
      className="relative h-[46rem] sm:h-[38rem] md:h-[34rem] lg:h-[28.3rem] xl:h-[28rem] bg-[url('/assets/icons/Main.png')] bg-no-repeat bg-cover flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[13rem] py-10 xl:py-20"
      ref={parallaxRef1}
    >
      <img
        src="/assets/icons/hpkiri.png"
        alt=""
        className="hidden md:block absolute md:-left-5 lg:-left-5 xl:left-0 bottom-0 md:w-[18%] lg:w-[20%] xl:w-auto xl:h-auto"
      />
      <img
        src="/assets/icons/hpkanan.png"
        alt=""
        className="hidden md:block absolute md:-right-5 lg:-right-5 xl:right-0 bottom-0 md:w-[18%] lg:w-[20%] xl:w-auto xl:h-auto"
      />
      <div className="w-full max-w-7xl flex flex-col px-[10%] xl:px-0 xl:flex-row mt-20 md:mt-10 lg:mt-0 md:gap-5 lg:gap-3 xl:gap-10">
        <div className="flex flex-col w-full xl:w-3/5 2xl:w-1/2 font-cabin text-white">
          <h3 className="text-xl">Portofolio</h3>
          <h1 className="text-4xl leading-tight xl:text-5xl 2xl:text-6xl ">
            Talenta Portofolio
          </h1>
        </div>
        <div className="flex items-center">
          <p className="text-white font-cabin text-justify text-base xl:text-lg">
            Talenta siap mewujudkan ide digitalmu menjadi kenyataan! Dari website bisnis yang elegan hingga aplikasi mobile yang powerful, portofolio kami membuktikan keahlian dalam menciptakan solusi yang responsif, fungsional, dan user-friendly. Percayakan proyekmu kepada tim profesional kami dan buat brand-mu semakin bersinar di dunia digital
          </p>
        </div>
      </div>
      <div className="w-full px-[10%] md:px-16 lg:px-0 flex flex-wrap lg:flex-nowrap md:flex-row gap-4 mt-6 lg:mt-8 xl:mt-10 justify-center text-base">
        <div className="bg-white rounded-md p-1 flex w-full sm:w-fit items-center gap-2 min-w-fit">
          <img src="/assets/icons/hasil.png" alt="" className="w-auto h-auto" />
          <h2 className="text-blue-800 font-semibold whitespace-nowrap">
            Hasil Maksimal
          </h2>
        </div>
        <div className="bg-white rounded-md p-1 flex w-full sm:w-fit items-center gap-2 min-w-fit">
          <img src="/assets/icons/kustmisasi.png" alt="" className="w-auto h-auto" />
          <h2 className="text-blue-800 font-semibold whitespace-nowrap">
            Kustomisasi Sesuai Kebutuhan
          </h2>
        </div>
        <div className="bg-white rounded-md p-1 flex w-full sm:w-fit items-center gap-2 min-w-fit">
          <img src="/assets/icons/teknologi.png" alt="" className="w-auto h-auto" />
          <h2 className="text-blue-800 font-semibold whitespace-nowrap">
            Teknologi Terkini
          </h2>
        </div>
      </div>
    </div>
  );
}