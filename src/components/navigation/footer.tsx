export default function Footer() {
  return (
    <>
      <div className="bg-blue-800 2xl:px-30 lg:px-22 lg:py-4 2xl:py-24">
        <img
          src="/assets/icons/footertop.png"
          alt=""
          className="absolute left-0 2xl:-translate-y-25 lg:-translate-y-5"
        />
        <div className="flex justify-between 2xl:space-x-28 lg:space-x-5">
          <div className="p-3 flex flex-col space-y-10 w-1/3">
            <div>
              <img src="/assets/icons/footerlogo.png" alt="" />
            </div>
            <p className="text-white font-cabin">
              Lorem ipsum dolor sit amet consectetur. Etiam velit eget dui amet
              bibendum elit vitae urna dolor. Commodo vel justo facilisi sit
              volutpat.{" "}
            </p>
            <div className="flex space-x-1">
              <img
                src="/assets/icons/linkedin.png"
                alt=""
                className="drop-shadow-md"
              />
              <img
                src="/assets/icons/GitHub1.png"
                alt=""
                className="drop-shadow-md"
              />
              <img
                src="/assets/icons/upwork.png"
                alt=""
                className="drop-shadow-md"
              />
              <img
                src="/assets/icons/fiverr.png"
                alt=""
                className="drop-shadow-md"
              />
            </div>
          </div>
          <div className="flex space-x-10 justify-between w-1/3">
            <div className="p-3 flex flex-col space-y-10 text-white font-cabin text-xl font-semibold">
              <h1>Profil</h1>
              <h1>Portofolio</h1>
            </div>
            <div className="p-3 flex flex-col space-y-10 text-white font-cabin text-xl font-semibold w-[10rem]">
              <h1>Produk</h1>
              <h1>Kontak Kami</h1>
            </div>
          </div>
          <div className="p-3 flex flex-col space-y-10 w-1/3">
            <div className="flex space-x-3 ">
              <div>
                <img
                  src="/assets/icons/Vector.png"
                  alt=""
                  className="w-10 h-6 xl:w-8"
                />
              </div>
              <p className="text-white font-cabin">
                Jl. Orchard Boulevard, Belian, Kec. Batam Kota, Kota Batam,
                Kepulauan Riau 29464
              </p>
            </div>
            <div className="flex space-x-3">
              <div className="shrink-0 flex items-center">
                <img
                  src="/assets/icons/Vector-1.png"
                  alt=""
                  className="lg:w-5 h-4 "
                />
              </div>
              <p className="text-white font-cabin">
                talentadigitalsolutions@gmail.com
              </p>
            </div>
            <div className="flex space-x-3">
              <div>
                <img
                  src="/assets/icons/Frame.png"
                  alt=""
                  className="size-6"
                />
              </div>
              <p className="text-white font-cabin">0812-3456-7890</p>
            </div>
          </div>
        </div>
        <img
          src="/assets/icons/footerbottom.png"
          alt=""
          className="absolute right-0 2xl:-translate-y-39 lg:-translate-y-58"
        />
      </div>
      <div className="bg-white p-2">
        <h1 className="font-cabin opacity-60 text-sm flex justify-center">
          Copyright © 2025 PT. Talenta Digital Solutions{" "}
        </h1>
      </div>
    </>
  );
}
