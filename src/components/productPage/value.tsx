import ValueCard from "./valueCard";
import data from "../../data/value.json"
const Value = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 text-center px-4 mt-8 md:mt-0 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-blue-800 text-3xl sm:text-4xl md:text-5xl font-bold">
          Value Yang Kami Berikan
        </h1>
        <h1 className="text-black opacity-55 text-lg sm:text-xl md:text-2xl max-w-3xl">
          Layanan lengkap yang kami tawarkan dirancang khusus untuk memenuhi kebutuhan bisnis Anda.
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-x-10 lg:gap-y-10 2xl:gap-x-48 2xl:gap-y-10 mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-8 lg:px-12">
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
    </>
  );
};

export default Value;