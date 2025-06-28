import { useEffect, useRef } from "react";
import Card from "./card";
import { cardHeaderProduct } from "../../data/data";
import { useParallax } from "../../animation/paralax";
export default function Header() {
  const parallaxRef1 = useRef<HTMLDivElement>(null);

  useParallax(parallaxRef1, 1000, 1);

  return (
    <div className="lg:min-h-screen">
      <div
        className="bg-[url(/assets/icons/background-1.png)] bg-cover bg-top bg-no-repeat pt-18 md:pt-24 2xl:pt-16 min-h-[35rem] sm:min-h-0 sm:h-[25rem] lg:h-[28rem] xl:h-[35rem] px-[clamp(0.5rem,5vw,2rem)] md:px-[clamp(3rem,3vw,3.5rem)] xl:px-[clamp(6rem,10vw,9rem)] 2xl:px-0 "
        ref={parallaxRef1}
      >
        <div className="flex flex-col sm:flex-row items-stretch text-white gap-2 2xl:max-w-[1440px] 2xl:mx-auto">
          <div className="text-pretty w-full lg:pr-17">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[clamp(2.25rem,3vw,3rem)] 2xl:text-5xl font-bold font-cabin leading-tight">
              Empowering Businesses Through Technology to Achieve Their Full
              Potential.
            </h1>
          </div>
          <div className="text-pretty w-full lg:self-center">
            <h1 className="text-sm sm:text-base md:text-xl lg:text-[1.2rem] xl:text-[1.4rem] 2xl:text-2xl font-semibold font-cabin opacity-80 leading-relaxed ">
              Talenta presents innovative software solutions to simplify processes, improve efficiency, and optimize performance.
            </h1>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-x-2 lg:gap-x-10 xl:gap-x-10  mt-6 sm:mt-8 2xl:mt-[clamp(4rem,4.5vw,6.25rem)]">
          {cardHeaderProduct.map((item, index) => (
            <Card
              key={index}
              judul={item.judul}
              isi={item.isi}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
