interface cardJasaProps {
  judul: string;
  list: string[];
  harga: string;
}

const CardJasa: React.FC<cardJasaProps> = ({ judul, list, harga }) => {
  return (
    <div className="px-4 sm:px-6 py-6 sm:py-8 border-[1.5px] border-black rounded-2xl w-full sm:w-[18rem] md:w-[20rem] lg:w-[22rem] xl:w-[24rem] 2xl:w-[25rem] bg-white mb-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-800 font-cabin">
        {judul}
      </h1>
      <h1 className="mt-2 text-lg sm:text-xl md:text-2xl opacity-60 font-cabin">
        Mulai dari
      </h1>
      <div className="border-b-2 border-blue-800 w-full mt-4 sm:mt-5"></div>
      <ul className="flex flex-col mt-4 sm:mt-5 px-4 sm:px-6 gap-y-3 sm:gap-y-4 list-disc">
        {list.map((item, index) => (
          <li key={index} className="text-sm sm:text-base md:text-lg font-cabin">
            {item}
          </li>
        ))}
      </ul>
      <h1 className="align-top text-blue-800 mt-4 sm:mt-5">
        Rp.
        <span className="text-4xl sm:text-4xl xl:text-6xl text-blue-800 font-cabin">
          {harga}
        </span>
      </h1>
      <button className="bg-blue-800 text-white px-4 sm:px-5 py-2 rounded-4xl mt-4 sm:mt-5 w-full text-sm sm:text-base md:text-lg">
        Pesan Paket
      </button>
    </div>
  );
};

export default CardJasa;