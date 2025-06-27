import ValueCard from "./valueCard";
import data from "../../data/value.json"
const Value = () => {
  return (
    <div className="px-[clamp(0.5rem,5vw,2rem)] md:px-[clamp(3rem,3vw,3.5rem)] xl:px-[clamp(6rem,10vw,9rem)] 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
      <div className="flex flex-col items-center justify-center gap-6 text-center mt-8 md:mt-0 sm:px-14 md:px-16 lg:px-18">
        <h1 className="text-blue-800 text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
          Value Yang Kami Berikan
        </h1>
        <h1 className="text-black opacity-55 text-base sm:text-lg md:text-xl xl:text-2xl max-w-3xl">
          Layanan lengkap yang kami tawarkan dirancang khusus untuk memenuhi kebutuhan bisnis Anda.
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-x-10 lg:gap-y-10 2xl:gap-x-48 2xl:gap-y-10 mt-12 sm:mt-16 md:mt-20">
        {data.map((item, index) => (
          <ValueCard
            judul={item.judul}
            isi={item.isi}
            icon={item.icon}
            key={index}
            nomor={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Value;