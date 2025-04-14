import { useEffect, useRef } from "react";

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
    <div
      className="-mt-4 pt-28 pb-8 bg-[url(/assets/icons/background.png)] bg-cover bg-top bg-no-repeat min-h-[20rem] sm:min-h-[25rem] md:pt-30 lg:pt-10 h-[60rem] sm:h-[35rem] lg:h-[30rem] xl:h-[35rem] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24"
      ref={parallaxRef1}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-9 lg:py-4 items-center text-white">
        <div className="text-pretty w-full lg:w-1/2 xl:px-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold font-cabin leading-tight">
            Empowering Businesses Through Technology to Achieve Their Full
            Potential.
          </h1>
        </div>
        <div className="text-pretty w-full lg:w-1/2 xl:px-12">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold font-cabin opacity-80 leading-relaxed">
            Talenta menghadirkan solusi perangkat lunak inovatif untuk
            menyederhanakan proses, meningkatkan efisiensi, dan mengoptimalkan
            kinerja.
          </h1>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-x-6 mt-6 sm:mt-8">
        <div className="flex flex-col items-center 2xl:w-[38vw] mb-12 md:mb-28 lg:w-[39.09vw] h-auto bg-white rounded-4xl overflow-hidden box-shadow">
          <div className="w-full px-5 pb-2 pt-5">
            <h1 className="2xl:text-3xl lg:text-xl xl:text-2xl font-bold text-blue-800 font-cabin">
              Meningkatkan efisiensi bisnis perusahaan
            </h1>
            <p className="lg:text-base xl:text-lg 2xl:text-xl mt-2 text-blue-950 font-cabin">
              Talenta Digital membantu perusahaan Anda mencapai efisiensi
              operasional yang optimal melalui integrasi teknologi terdepan.
            </p>
          </div>
          <div className="w-full h-full mt-3">
            <img
              src="/assets/icons/img-1.png"
              alt="card"
              className="w-full object-fill"
            />
          </div>
        </div>
        {/* card2 */}
        <div className="flex flex-col items-center 2xl:w-[38vw] mb-12 md:mb-28 lg:w-[39.09vw] h-auto bg-white rounded-4xl overflow-hidden box-shadow">
          <div className="w-full px-5 pb-2 pt-5">
            <h1 className="2xl:text-3xl lg:text-xl xl:text-2xl font-bold text-blue-800 font-cabin">
              Meningkatkan efisiensi bisnis perusahaan
            </h1>
            <p className="lg:text-base xl:text-lg 2xl:text-xl mt-2 text-blue-950 font-cabin">
              Talenta Digital membantu perusahaan Anda mencapai efisiensi
              operasional yang optimal melalui integrasi teknologi terdepan.
            </p>
          </div>
          <div className="w-full h-full mt-3">
            <img
              src="/assets/icons/img-1.png"
              alt="card"
              className="w-full object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
