interface cardProps {
  judul: string;
  isi: string;
  img: string;
}
const Card: React.FC<cardProps> = ({ judul, isi, img }) => {
  return (
    <div className="flex flex-col items-center justify-between mb-6 md:mb-28 w-[clamp(15rem,50vw,25rem)] lg:w-[clamp(26rem,50vw,30rem)] xl:w-[30rem] 2xl:w-[30rem] h-[17rem] lg:h-[22rem] 2xl:h-[25rem] bg-white rounded-2xl overflow-hidden box-shadow">
      <div className="w-full sm:h-3/6 md:h-2/5 p-2 2xl:p-4 lg:h-1/3 gap-1 font-cabin">
        <h1 className="text-base sm:text-[clamp(1rem,2vw,1.1rem)] lg:text-xl xl:text-2xl 2xl:text-2xl font-bold text-blue-800">{judul}</h1>
        <p className="lg:text-base xl:text-lg 2xl:text-xl text-sm sm:text-[clamp(0.87rem,2vw,0.95rem)] text-blue-950 2xl:mt-2">{isi}</p>
      </div>
      <div className="w-full sm:h-3/6 md:h-3/5 lg:h-2/3 xl:h-3/5 2xl:mt-10">
        <img src={img} alt="card" className="w-full h-full object-fill" />
      </div>
    </div>
  );
};
export default Card;
