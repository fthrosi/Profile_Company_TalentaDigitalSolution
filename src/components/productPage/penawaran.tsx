import SlideInLeft from "../../animations/SlideInLeft";
import SlideInRight from "../../animations/SlideInRight";
import SlideInUp from "../../animations/SlideInUp";

const Penawaran = () => {
  return (
    <div className="max-w-screen overflow-x-hidden md:px-5">
      <SlideInUp>
        <div className="flex justify-center items-center flex-col gap-6 text-center px-12 pt-5 sm:pt-40 md:pt-44 lg:pt-5">
          <h1 className="text-blue-800 text-2xl sm:text-3xl md:text-4xl font-bold">
            Apa Yang Talenta Tawarkan
          </h1>
          <h1 className="text-black opacity-55 text-base sm:text-lg md:text-xl max-w-3xl">
            Layanan lengkap yang kami tawarkan dirancang khusus untuk memenuhi kebutuhan bisnis Anda.
          </h1>
        </div>
      </SlideInUp>

      <SlideInRight>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10 mt-12 sm:mt-20 md:mt-20 px-2 md:px-0">
          <div className="w-full md:w-1/2">
            <div className="h-full w-full max-w-[95%] mx-auto drop-shadow-lg rounded-t-4xl rounded-br-4xl overflow-hidden bg-amber-300">
              <img
                src="/assets/icons/img-2.png"
                alt="asset"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6 md:gap-2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-[2.5rem] text-blue-800 font-bold">
              Pengembangan Aplikasi
            </h1>
            <p className="text-base sm:text-lg md:text-xl md:text-justify opacity-55">
              Solusi aplikasi mobile kustom untuk klien yang ingin meningkatkan bisnis mereka melalui teknologi. Tim ahli kami bekerja sama dengan klien untuk menciptakan aplikasi berkualitas tinggi, mudah digunakan, dan sesuai dengan visi mereka.
            </p>
          </div>
        </div>
      </SlideInRight>

      <SlideInLeft>
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:gap-8 lg:gap-10 mt-12 sm:mt-16 md:mt-20 px-2 md:px-0">
          <div className="w-full md:w-1/2">
            <div className="h-full w-full max-w-[95%] mx-auto drop-shadow-lg rounded-t-4xl rounded-bl-4xl overflow-hidden bg-amber-300">
              <img
                src="/assets/icons/img-1.png"
                alt="asset"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6 md:gap-2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-[2.5rem] text-blue-800 font-bold">
              Pengembangan Website
            </h1>
            <p className="text-base md:text-justify sm:text-lg md:text-xl opacity-55">
              Menyediakan solusi web kustom yang disesuaikan dengan kebutuhan unik klien. Tim developer dan desainer berpengalaman kami menciptakan aplikasi web yang ramah pengguna dan menarik secara visual, serta dioptimalkan untuk performa dan skalabilitas.
            </p>
          </div>
        </div>
      </SlideInLeft>

      <SlideInRight>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10 mt-12 sm:mt-16 md:mt-20 pb-12 sm:pb-16 md:pb-20 px-2 md:px-0">
          <div className="w-full md:w-1/2">
            <div className="h-full w-full max-w-[95%] mx-auto drop-shadow-lg rounded-t-4xl rounded-br-4xl overflow-hidden bg-amber-300">
              <img
                src="/assets/icons/img-3.png"
                alt="asset"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6 md:gap-2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-[2.5rem] text-blue-800 font-bold">
              UI/UX Desain
            </h1>
            <p className="text-base sm:text-lg md:text-justify md:text-xl opacity-55">
              Berfokus pada peningkatan pengalaman pengguna dan desain visual produk perangkat lunak. Layanan ini menggabungkan penelitian, desain, dan teknologi untuk menciptakan perangkat lunak yang mudah digunakan dan menarik secara visual, serta memenuhi kebutuhan dan harapan pelanggan.
            </p>
          </div>
        </div>
      </SlideInRight>
    </div>
  );
};

export default Penawaran;