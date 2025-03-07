const Penawaran = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-8 text-center">
        <h1 className="text-blue-800 text-5xl font-bold">
          Apa Yang Talenta Tawarkan
        </h1>
        <h1 className="text-black opacity-55 text-2xl 2xl:w-[55rem]">
          Layanan lengkap yang kami tawarkan dirancang khusus untuk memenuhi
          kebutuhan bisnis Anda.
        </h1>
      </div>
      <div className="flex items-center justify-between gap-10 mt-20">
        <div className="w-1/2">
          <div className="2xl:w-[38vw] 2xl:h-[25vw] lg:w-[39.06vw] lg:h-[31vw] rounded-t-4xl rounded-br-4xl overflow-hidden bg-amber-300">
            <img
              src="/assets/icons/Pio.jpg"
              alt="asset"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col 2xl:gap-8 lg:gap-4">
          <h1 className="2xl:text-[2.5rem] lg:text-3xl text-blue-800 font-bold">
            Pengembangan Aplikasi
          </h1>
          <p className="2xl:text-[1.875rem]/14 lg:text-[clamp(1rem,2.2vw,1.875rem)] opacity-55">
            Solusi aplikasi mobile kustom untuk klien yang ingin meningkatkan
            bisnis mereka melalui teknologi. Tim ahli kami bekerja sama dengan
            klien untuk menciptakan aplikasi berkualitas tinggi, mudah
            digunakan, dan sesuai dengan visi mereka.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-10 mt-20">
        <div className="w-1/2 flex flex-col 2xl:gap-8 lg:gap-4">
          <h1 className="2xl:text-[2.5rem] lg:text-3xl text-blue-800 font-bold">
            Pengembangan Website
          </h1>
          <p className="2xl:text-[1.875rem]/14 lg:text-[clamp(1rem,2.2vw,1.875rem)] 2xl:w-[41vw] lg:w-[39.06vw] opacity-55">
            Menyediakan solusi web kustom yang disesuaikan dengan kebutuhan unik
            klien. Tim developer dan desainer berpengalaman kami menciptakan
            aplikasi web yang ramah pengguna dan menarik secara visual, serta
            dioptimalkan untuk performa dan skalabilitas.
          </p>
        </div>
        <div className="w-1/2">
          <div className="2xl:w-[38vw] 2xl:h-[25vw] lg:w-[39.06vw] lg:h-[31vw] rounded-t-4xl rounded-bl-4xl overflow-hidden bg-amber-300">
            <img
              src="/assets/icons/Pio.jpg"
              alt="asset"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-10 mt-20">
        <div className="w-1/2">
          <div className="2xl:w-[38vw] 2xl:h-[25vw] lg:w-[39.06vw] lg:h-[31vw] rounded-t-4xl rounded-br-4xl overflow-hidden bg-amber-300">
            <img
              src="/assets/icons/Pio.jpg"
              alt="asset"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col 2xl:gap-8 lg:gap-4">
          <h1 className="2xl:text-[2.5rem] lg:text-3xl text-blue-800 font-bold">UI/UX Desain</h1>
          <p className="2xl:text-[1.875rem]/14 lg:text-[clamp(1rem,2.2vw,1.875rem)] opacity-55">
            Berfokus pada peningkatan pengalaman pengguna dan desain visual
            produk perangkat lunak. Layanan ini menggabungkan penelitian,
            desain, dan teknologi untuk menciptakan perangkat lunak yang mudah
            digunakan dan menarik secara visual, serta memenuhi kebutuhan dan
            harapan pelanggan.
          </p>
        </div>
      </div>
    </>
  );
};
export default Penawaran;
