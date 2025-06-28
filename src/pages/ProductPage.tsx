import Header from "../components/productPage/Header";
import Penawaran from "../components/productPage/penawaran";
import Value from "../components/productPage/value";
import Jasa from "../components/productPage/jasa";

export default function ProductPage() {
  return (
    <div className="lg:mb-30 mb-20 md:mb-25 max-w-screen overflow-x-hidden ">
      <Header />
      <img
        src="/assets/icons/side.png"
        alt=""
        className="absolute left-0 mt-40 -z-50"
      />
      <Penawaran />
      <img
        src="/assets/icons/side2.png"
        alt=""
        className="absolute right-0 2xl:-translate-y-24 lg:-translate-y-8 -z-50"
      />
      <div className="2xl:py-15 lg:pt-10 2xl:mt-2 lg:mt-10">
        <Value />
      </div>
      <div className="mt-20 px-[clamp(0.5rem,5vw,2rem)] md:px-[clamp(3rem,3vw,3.5rem)] xl:px-[clamp(6rem,10vw,9rem)] 2xl:px-0 2xl:max-w-[1440px] 2xl:mx-auto">
        <div className="border-b-6 border-dashed border-blue-800 opacity-40 w-full z-0"></div>
      </div>
      <img
        src="/assets/icons/side3.png"
        alt=""
        className="left-0 absolute translate-y-44 lg:-translate-x-10 xl:translate-x-0 -z-50"
      />
      <Jasa />
      <img
        src="/assets/icons/side4.png"
        alt=""
        className="right-0 absolute -translate-y-56 -z-10 lg:translate-x-10 xl:translate-x-0"
      />
    </div>
  );
}
