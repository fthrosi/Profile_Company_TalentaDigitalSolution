interface cardProps {
  judul: string;
  isi: string;
  img: string;
}
const Card: React.FC<cardProps> = ({ judul, isi, img }) => {
  return (
    <div className="flex flex-col items-center 2xl:w-[38vw] lg:w-[39.09vw] xl:h-[33.75vw] 2xl:h-[25vw] lg:h-[34vw] bg-white rounded-4xl shadow-md overflow-hidden">
      <div className="h-2/6 w-full px-5 py-3">
        <h1 className="2xl:text-3xl lg:text-xl xl:text-2xl font-bold text-blue-800 font-cabin">{judul}</h1>
        <p className="lg:text-base xl:text-lg 2xl:text-xl mt-3 text-blue-950 font-cabin">{isi}</p>
      </div>
      <div className="h-4/6 w-full mt-3">
        <img src={img} alt="card" className="w-full h-full object-cover object-center" />
      </div>
    </div>
  );
};
export default Card;
