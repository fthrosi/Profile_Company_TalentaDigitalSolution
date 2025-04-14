import CardJasa from "./CardJasa";
import data from "../../data/jasa.json"

const Jasa = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex justify-center items-center flex-col gap-6 text-center mt-12 sm:mt-16 md:mt-20">
        <h1 className="text-blue-800 text-3xl sm:text-4xl md:text-5xl font-bold">
          Paket Jasa Kami
        </h1>
        <h1 className="text-black opacity-55 text-lg sm:text-xl md:text-2xl max-w-3xl">
        Talenta Digital menawarkan beragam paket layanan yang dirancang untuk memenuhi berbagai kebutuhan Anda. Pilihlah paket yang paling sesuai dengan tahap perjalanan digital Anda.
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 mt-12 sm:mt-16 md:mt-20">
        {data.map((item, index) => (
          <CardJasa
            judul={item.judul}
            list={item.list}
            harga={item.harga}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Jasa;