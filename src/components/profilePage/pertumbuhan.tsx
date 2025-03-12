const Pertumbuhan = () => {
  return (
    <div className="2xl:px-52 lg:px-20 mt-50">
      <div className="w-1/2 flex flex-col gap-8">
        <h1 className="text-5xl font-cabin text-[#102B5B] font-bold">
          Perjalanan & Pertumbuhan
        </h1>
        <p className="text-justify text-2xl/10 opacity-65">
          Sejak awal, PT Talenta Digital Solutions berfokus pada pengembangan
          aplikasi dan website yang dirancang untuk memenuhi kebutuhan berbagai
          industri, mulai dari startup hingga perusahaan besar. Dengan komitmen
          terhadap kualitas dan kepuasan pelanggan, perusahaan berhasil
          menyelesaikan berbagai proyek penting dan membangun reputasi sebagai
          penyedia layanan digital yang handal.{" "}
        </p>
      </div>
      <img
        src="/assets/icons/shapes.png"
        alt=""
        className="absolute 2xl:right-150 lg:right-85 2xl:-translate-y-96 xl:-translate-y-76 lg:-translate-y-96"
      />
      <img
        src="/assets/icons/gb2.png"
        alt=""
        className="absolute 2xl:right-47 lg:right-20 2xl:-translate-y-110 xl:-translate-y-90 lg:-translate-y-110 rounded-xl 2xl:size-105 lg:size-70"
      />
      <img
        src="/assets/icons/gb1.png"
        alt=""
        className="absolute 2xl:right-100 lg:right-60 2xl:-translate-y-77 xl:-translate-y-63 lg:-translate-y-83 rounded-xl 2xl:size-90 lg:size-60"
      />
    </div>
  );
};
export default Pertumbuhan;
