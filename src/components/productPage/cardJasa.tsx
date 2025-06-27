interface cardJasaProps {
  img: string;
  judul: string;
  isi: string;
}

const CardJasa: React.FC<cardJasaProps> = ({ img, judul, isi }) => {
  return (
    <div className="flex flex-col items-center gap-2 font-cabin max-w-[300px] mx-auto sm:max-w-[350px] md:max-w-[400px] ">
     <img src={img} alt={judul} className="size-13 2xl:size-20"/>
     <h1 className="font-semibold text-blue-800 text-xl sm:text-lg xl:text-xl 2xl:text-2xl">{judul}</h1>
      <p className="text-center text-base sm:text-sm xl:text-base 2xl:text-lg opacity-80">{isi}</p>
    </div>
  );
};

export default CardJasa;