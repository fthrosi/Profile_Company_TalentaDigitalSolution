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
    <div className="bg-red-600">
      <header
        ref={parallaxRef1}
        className="relative px-[clamp(0.5rem,5vw,2rem)] md:px-[clamp(3rem,3vw,3.5rem)] xl:px-[clamp(6rem,10vw,9rem)] 2xl:px-0 py-15 md:py-20 lg:py-13 xl:py-20 h-full bg-[url('/assets/icons/background.png')] bg-top bg-no-repeat bg-cover min-h-[30rem] sm:h-[36rem] md:h-[42rem] lg:min-h-0 lg:h-[25rem] xl:[36rem] xl:h-[32.5rem]"
        style={{ backgroundAttachment: "scroll" }}
      >
        <div className="2xl:max-w-[1440px] 2xl:mx-auto">
          <div className="w-full h-full xl:justify-center text-center lg:text-start xl:w-[55%] flex flex-col gap-3 md:mt-0 lg:w-1/2">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[clamp(2.25rem,3vw,3rem)] 2xl:text-5xl font-bold font-cabin text-white leading-tight lg:max-w-[350px] xl:max-w-[450px]">
              Welcome to the Talenta Digital Profile
            </h1>
            <p className="font-cabin text-white text-sm sm:text-base md:text-xl lg:text-base xl:text-[1.2rem] 2xl:text-2xl opacity-80 leading-relaxed">
              We offer innovative software solutions designed to streamline
              processes, enhance business efficiency, and optimize your
              company's performance. With a team of experienced professionals in
              technology, we are ready to support your business's digital
              transformation through effective and efficient solutions. Let’s
              work together to create a smarter future with technology!
            </p>
          </div>
          <img
            src="/assets/icons/Group1.png"
            alt=""
            className="absolute right-[15%] sm:right-[20%] md:right-[20%] lg:right-[0%] xl:right-4 bottom-1 sm:bottom-4 md:bottom-4 lg:bottom-0 xl:bottom-4 w-[70%] sm:w-[60vw] md:w-[60vw] lg:w-[50vw] xl:w-[45%] 2xl:w-[40%]"
          />
          <img
            src="/assets/icons/Group4.png"
            alt=""
            className="absolute right-[20%] sm:right-[25%] md:right-[26%] lg:right-[5%] xl:right-20 bottom-0 sm:bottom-0 md:-bottom-0 lg:bottom-2 w-[60%] xl:bottom-4 sm:w-[50vw] md:w-[50vw] lg:w-[40vw] xl:w-[35%] 2xl:w-[30%]"
          />
        </div>

        <img
          src="/assets/icons/kotak.png"
          alt=""
          className="absolute right-0 bottom-0 sm:bottom-0 w-full h-5 sm:w-full sm:h-10 md:w-full md:h-15 lg:max-w-full"
        />
      </header>
    </div>
  );
}
