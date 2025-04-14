interface cardProps {
  judul: string;
  isi: string;
  img: string;
}
const Card: React.FC<cardProps> = ({ judul, isi, img }) => {
  return (
    <div className="flex flex-col items-center 2xl:w-[38vw] mb-12 md:mb-28 lg:w-[39.09vw] h-auto bg-white rounded-4xl overflow-hidden box-shadow">
      <div className="w-full px-5 pb-2 pt-5">
        <h1 className="2xl:text-3xl lg:text-xl xl:text-2xl font-bold text-blue-800 font-cabin">{judul}</h1>
        <p className="lg:text-base xl:text-lg 2xl:text-xl mt-2 text-blue-950 font-cabin">{isi}</p>
      </div>
      <div className="w-full h-full mt-3">
        <img src={img} alt="card" className="w-full object-fill" />
      </div>
    </div>
  );
};
export default Card;
