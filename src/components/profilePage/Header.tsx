import { useEffect, useRef } from "react";

export default function Header() {
  const parallaxRef1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (parallaxRef1.current) {
        const elementHeight = parallaxRef1.current.offsetHeight;
        const imageHeight = 3000
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
    <div className="relative h-[32rem] sm:h-[36rem] md:h-[42rem] lg:h-[38rem] xl:[36rem] xl:h-[32.5rem] overflow-hidden">
      <header
        ref={parallaxRef1}
        className="relative px-4 sm:px-6 md:px-12 lg:px-24 py-6 pt-20 sm:pt-24 md:pt-30 lg:pt-14 xl:pt-8 sm:py-8 md:py-10 lg:py-13 xl:py-20 h-full bg-[url('/assets/icons/background.png')] bg-top bg-no-repeat bg-cover"
        style={{ backgroundAttachment: "scroll" }}
      >
        <div className="w-full h-full xl:justify-center text-center lg:text-start xl:w-[55%] flex flex-col gap-3 mt-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-bold font-cabin text-white leading-tight">
            Selamat Datang di Profil <br />
            Talenta Digital Solution
          </h1>
          <p className="font-cabin text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl opacity-80 leading-relaxed">
          Kami menawarkan solusi perangkat lunak inovatif yang dirancang untuk menyederhanakan proses, meningkatkan efisiensi bisnis, dan mengoptimalkan kinerja perusahaan Anda. Dengan tim profesional berpengalaman di bidang teknologi, kami siap mendukung transformasi digital bisnis Anda melalui solusi yang efektif dan efisien. Mari bersama-sama menciptakan masa depan yang lebih cerdas dengan teknologi!
          </p>
        </div>
        <img
          src="/assets/icons/Group1.png"
          alt=""
          className="absolute right-[15%] bottom-0 sm:right-[10%] md:right-[12%] lg:right-[14%] xl:right-4 sm:-bottom-10 md:-bottom-18 lg:-bottom-30 xl:bottom-4 w-[70%] sm:w-[80%] md:w-[75%] lg:w-[70%] xl:w-[45%] 2xl:w-[40%]"
        />
        <img
          src="/assets/icons/Group4.png"
          alt=""
          className="absolute right-[20%] sm:right-[20%] md:right-[18%] lg:right-[20%] xl:right-20 -bottom-8 sm:-bottom-10 md:-bottom-28 lg:-bottom-36 w-[60%] xl:bottom-4 sm:w-[60%] md:w-[65%] lg:w-[60%] xl:w-[35%] 2xl:w-[30%]"
        />
        <img
          src="/assets/icons/kotak.png"
          alt=""
          className="absolute xl:block hidden right-0 bottom-0 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-full"
        />
      </header>
    </div>
  );
}