interface cardJasaProps {
  judul: string;
  list: string[];
  harga: string;
}

const CardJasa: React.FC<cardJasaProps> = ({ judul, list, harga }) => {
  return (
    <div className="px-6 py-8 border-[1.5px] border-black rounded-2xl 2xl:w-[25rem] lg-w-[15rem]">
      <h1 className="text-5xl font-bold text-blue-800 font-cabin">{judul}</h1>
      <h1 className="mt-2 text-2xl opacity-60 font-cabin">Mulai dari</h1>
      <div className="border-b-2 border-blue-800 w-full mt-5"></div>
      <ul className="flex flex-col mt-5 px-6 gap-y-4 list-disc">
        {list.map((item,index) => {
          return <li key={index} className="text-lg font-cabin">{item}</li>;
        })}
      </ul>
      <h1 className="align-top text-blue-800 mt-5">Rp.<span className="text-6xl text-blue-800 font-cabin">{harga}</span></h1>
        <button className="bg-blue-800 text-white px-5 py-2 rounded-4xl mt-5 w-full">Pesan Paket</button>
    </div>
  );
};
export default CardJasa;
