const Portofoilo = () => {
  return (
    <div className="px-26 py-12.5">
      <div className="flex flex-col items-center font-cabin px-10 2xl:px-50 gap-3">
        <h1 className="text-[#102B5BCC] font-semibold 2xl:text-xl">Mobile App</h1>
        <h1 className="text-blue-900 text-4xl font-bold 2xl:text-7xl">Smart Pelican</h1>
        <p className="opacity-60 text-center 2xl:text-xl">
          Aplikasi Tracking Perusahaan adalah sebuah sistem digital yang
          dirancang untuk memantau, mengelola, dan menganalisis aktivitas
          operasional suatu perusahaan secara real-time. Aplikasi ini membantu
          perusahaan dalam meningkatkan efisiensi, produktivitas, dan
          transparansi dalam berbagai aspek bisnis.
        </p>
      </div>
      <div className="flex mt-10 justify-center">
        <img src="/assets/icons/hp1.png" alt=""  className="w-38 xl:w-42 2xl:w-55"/>
        <img src="/assets/icons/hp2.png" alt="" className="w-38 xl:w-42 2xl:w-55"/>
        <img src="/assets/icons/hp3.png" alt="" className="size-60 xl:size-70 2xl:size-90"/>
        <img src="/assets/icons/hp4.png" alt="" className="w-38 xl:w-42 2xl:w-55"/>
        <img src="/assets/icons/hp5.png" alt="" className="w-38 xl:w-42 2xl:w-55" />
      </div>
    </div>
  );
};
export default Portofoilo;
