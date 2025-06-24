interface ValueCardProps {
    judul: string;
    isi: string;
    icon: string;
    nomor: number;
}

const ValueCard:React.FC<ValueCardProps> = ({judul,isi,icon,nomor}) =>{
    return(
        <div className="px-3 py-3 flex flex-col gap-3">
           <div className="flex justify-between">
                <img src={icon} alt="icon"  className=""/>
                <h1 className="text-lg font-semibold opacity-60">0{nomor+1}</h1>
           </div>
           <h1 className="text-xl font-bold text-blue-800">{judul}</h1>
            <p className="text-base opacity-50">{isi}</p>
        </div>
    )
}
export default ValueCard;