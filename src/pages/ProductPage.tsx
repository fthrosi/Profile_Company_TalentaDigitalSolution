import Card from "../components/productPage/card";
import Penawaran from "../components/productPage/penawaran";
import Value from "../components/productPage/value";
import Jasa from "../components/productPage/jasa";
export default function ProductPage() {
  return (
    <div className="2xl:px-25 lg:px-22 2xl:pt-15 lg:pt-10 2xl:pb-20 lg:pb-20 bg-[url(/assets/icons/background-1.png)] bg-top bg-no-repeat 2xl:bg-[length:100%_35rem] lg:bg-[length:100%_65%%]">
      <div className="flex gap-9 items-center text-white">
        <div className="text-pretty w-1/2">
          <h1 className="2xl:text-6xl/18 font-bold text-wrap font-cabin lg:text-4xl/12">
            Empowering Businesses Through Technology to Achieve Their Full
            Potential.
          </h1>
        </div>
        <div className="text-pretty lg:text-wrap w-1/2">
          <h1 className="2xl:text-3xl/11 font-semibold font-cabin opacity-80 lg:text-xl">
            Talenta menghadirkan solusi perangkat lunak inovatif untuk
            menyederhanakan proses, meningkatkan efisiensi, dan mengoptimalkan
            kinerja.
          </h1>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <div>
          <Card
            judul="Meningkatkan efisiensi bisnis perusahaan"
            isi="Lorem ipsum dolor sit amet consectetur. Ultricies viverra consequat convallis cursus tristique nec."
            img="/assets/icons/Pio.jpg"
          />
        </div>
        <div>
          <Card
            judul="Meningkatkan efisiensi bisnis perusahaan"
            isi="Lorem ipsum dolor sit amet consectetur. Ultricies viverra consequat convallis cursus tristique nec."
            img="/assets/icons/Pio.jpg"
          />
        </div>
      </div>
      <img
        src="/assets/icons/side.png"
        alt=""
        className="absolute left-0 mt-40"
      />
      <div className="2xl:py-15 lg:pt-10 2xl:mt-7">
        <Penawaran />
      </div>
      <img
        src="/assets/icons/side2.png"
        alt=""
        className="absolute right-0 2xl:-translate-y-24 lg:-translate-y-8"
      />
      <div className="2xl:py-15 lg:pt-10 2xl:mt-2 lg:mt-10">
        <Value />
      </div>
      <div className="mt-20 border-b-6 border-dashed border-blue-800 opacity-40 w-full z-0"></div>
      <img src="/assets/icons/side3.png" alt="" className="left-0 absolute translate-y-44 lg:-translate-x-10 xl:translate-x-0"/>
      <div className="mt-20 z-10">
        <Jasa />
      </div>
      <img src="/assets/icons/side4.png" alt="" className="right-0 absolute -translate-y-56 z-0 lg:translate-x-10 xl:translate-x-0"/>
    </div>
  );
}
