export default function PortofoiloSection() {
  return (
    <div className="px-[clamp(0.5rem,5vw,2rem)] md:px-[clamp(3rem,3vw,3.5rem)] xl:px-[clamp(6rem,10vw,9rem)] 2xl:px-0 2xl:max-w-[1440px] 2xl:mx-auto py-8 flex flex-col items-center">
      <div className="flex flex-col items-center font-cabin px-4 md:px-8 lg:px-10 2xl:px-50 gap-4 w-full max-w-4xl">
        <h1 className="text-[#102B5BCC] font-semibold text-lg md:text-xl 2xl:text-2xl">
          Mobile App
        </h1>
        <h1 className="text-blue-900 text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold">
          Smart Pelican
        </h1>
        <p className="opacity-60 text-center text-sm md:text-base lg:text-lg 2xl:text-xl">
          Aplikasi Tracking Perusahaan adalah sebuah sistem digital yang
          dirancang untuk memantau, mengelola, dan menganalisis aktivitas
          operasional suatu perusahaan secara real-time. Aplikasi ini membantu
          perusahaan dalam meningkatkan efisiensi, produktivitas, dan
          transparansi dalam berbagai aspek bisnis.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 md:mt-10">
        <img
          src="/assets/icons/hp1.png"
          alt="Mobile preview 1"
          className="w-28 md:w-36 xl:w-42 2xl:w-55 h-auto"
        />
        <img
          src="/assets/icons/hp2.png"
          alt="Mobile preview 2"
          className="w-28 md:w-36 xl:w-42 2xl:w-55 h-auto"
        />
        <img
          src="/assets/icons/hp3.png"
          alt="Mobile preview 3"
          className="size-60 xl:size-70 2xl:size-90"
        />
        <img
          src="/assets/icons/hp4.png"
          alt="Mobile preview 4"
          className="w-28 md:w-36 xl:w-42 2xl:w-55 h-auto"
        />
        <img
          src="/assets/icons/hp5.png"
          alt="Mobile preview 5"
          className="w-28 md:w-36 xl:w-42 2xl:w-55 h-auto"
        />
      </div>
    </div>
  );
}