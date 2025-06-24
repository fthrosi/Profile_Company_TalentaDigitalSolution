interface cardProps {
  judul: string;
  isi: string;
  img: string;
}
const Card: React.FC<cardProps> = ({ judul, isi, img }) => {
  return (
    <div className="flex flex-col items-center justify-between 2xl:items-start 2xl:w-[40rem] mb-6 md:mb-28 lg:w-[39.09vw] xl:w-[39vw] h-auto bg-white rounded-4xl overflow-hidden box-shadow">
      <div className="w-full sm:h-3/6 md:h-2/5 px-5 pb-2 pt-5 lg:h-1/3">
        <h1 className="2xl:text-2xl lg:text-xl xl:text-2xl font-bold text-blue-800 font-cabin">{judul}</h1>
        <p className="lg:text-base xl:text-lg 2xl:text-xl text-sm mt-2 text-blue-950 font-cabin">{isi}</p>
      </div>
      <div className="w-full sm:h-3/6 md:h-3/5 lg:h-2/3 mt-3 2xl:mt-2">
        <img src={img} alt="card" className="w-full h-full object-fill" />
      </div>
    </div>
  );
};
export default Card;
