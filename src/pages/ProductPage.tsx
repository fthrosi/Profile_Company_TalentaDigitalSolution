import Header from "../components/productPage/Header";
import Penawaran from "../components/productPage/penawaran";
import Value from "../components/productPage/value";
import Jasa from "../components/productPage/jasa";
import SlideInUp from "../animations/SlideInUp";

export default function ProductPage() {
  return (
    <div className="2xl:pb-20 lg:pb-20 max-w-screen overflow-x-hidden">
      <Header />
      <div className="2xl:px-25 lg:px-22 2xl:pt-15 ">
      <img
        src="/assets/icons/side.png"
        alt=""
        className="absolute left-0 mt-40"
      />
      <div className="2xl:py-15 2xl:mt-7">
        <Penawaran />
      </div>
      <img
        src="/assets/icons/side2.png"
        alt=""
        className="absolute right-0 2xl:-translate-y-24 lg:-translate-y-8"
      />
      <SlideInUp>
        <div className="2xl:py-15 lg:pt-10 2xl:mt-2 lg:mt-10">
          <Value />
        </div>
      </SlideInUp>
      <div className="mt-20 border-b-6 border-dashed border-blue-800 opacity-40 w-full z-0"></div>
      <img src="/assets/icons/side3.png" alt="" className="left-0 absolute translate-y-44 lg:-translate-x-10 xl:translate-x-0"/>
      <SlideInUp>
        <div className="mt-20 z-10">
          <Jasa />
        </div>
      </SlideInUp>
      <img src="/assets/icons/side4.png" alt="" className="right-0 absolute -translate-y-56 -z-10 lg:translate-x-10 xl:translate-x-0"/>
      </div>
    </div>
  );
}
