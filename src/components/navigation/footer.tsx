import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="bg-blue-800 px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative">
        <img
          src="/assets/icons/footertop.png"
          alt=""
          className="absolute left-0 -translate-y-1/2 sm:-translate-y-1/3 lg:-translate-y-5 2xl:-translate-y-25 w-20 sm:w-24 md:w-28"
        />
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 lg:gap-6 xl:gap-10">
          {/* Left Section */}
          <div className="flex flex-col space-y-6 md:w-1/3">
            <div className="w-[140px] sm:w-[160px] md:w-[180px]">
              <img src="/assets/icons/logo-app2.png" alt="" className="w-full" />
            </div>
            <p className="text-white font-cabin font-light text-sm sm:text-base">
            Inovasi, Integritas, dan Kolaborasi. Kami hadir untuk memberikan solusi digital yang membantu bisnis Anda mencapai potensi maksimal.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <img
                src="/assets/icons/linkedin.png"
                alt=""
                className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-md"
              />
              <img
                src="/assets/icons/GitHub1.png"
                alt=""
                className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-md"
              />
              <img
                src="/assets/icons/upwork.png"
                alt=""
                className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-md"
              />
              <img
                src="/assets/icons/fiverr.png"
                alt=""
                className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-md"
              />
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex justify-between gap-6 sm:gap-10 md:w-1/3 py-4 md:px-4">
            <div className="flex flex-col space-y-6 text-white font-cabin font-parallel text-sm sm:text-base">
              <Link to="/profile">Produk</Link>
              <Link to="/">Profil</Link>
            </div>
            <div className="flex flex-col space-y-6 text-white font-cabin font-light text-sm sm:text-base">
              <Link to="/">Portofolio</Link>
              <Link to="/">Kontak Kami</Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col space-y-6 md:w-1/3">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <img
                  src="/assets/icons/Vector.png"
                  alt=""
                  className="mt-[2px]"
                />
              </div>
              <p className="text-white font-cabin text-sm sm:text-base">
                Jl. Orchard Boulevard, Belian, Kec. Batam Kota, Kota Batam,
                Kepulauan Riau 29464
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 flex items-center">
                <img
                  src="/assets/icons/Vector-1.png"
                  alt=""
                  className=""
                />
              </div>
              <p className="text-white font-cabin text-sm sm:text-base">
                talentadigitalsolution@gmail.com
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <img
                  src="/assets/icons/Frame.png"
                  alt=""
                  className=""
                />
              </div>
              <p className="text-white font-cabin text-sm sm:text-base">
                0812-3456-7890
              </p>
            </div>
          </div>
        </div>
        <img
          src="/assets/icons/footerbottom.png"
          alt=""
          className="absolute bottom-12 right-0 w-20 sm:w-24 md:w-28 translate-y-1/2"
        />
      </div>
      <div className="bg-white py-3 px-4">
        <h1 className="font-cabin opacity-60 text-xs sm:text-sm text-center">
          Copyright © 2025 PT. Talenta Digital Solution
        </h1>
      </div>
    </>
  );
}