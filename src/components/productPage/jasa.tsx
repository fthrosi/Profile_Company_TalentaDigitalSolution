import CardJasa from "./cardJasa";
const Jasa = () => {
    const data = [
        {
            judul: "Website",
            list: [
                "Desain Website Custom",
                "Optimasi SEO",
                "Desain Responsif",
                "Pemeliharaan Website",
                "Free Domain & Hosting",
                "Integrasi Payment Gateway"
            ],
            harga: "5.000.000"
        },
        {
            judul: "E-Commerce",
            list: [
                "Desain Website Custom",
                "Optimasi SEO",
                "Desain Responsif",
                "Pemeliharaan Website",
                "Free Domain & Hosting",
                "Integrasi Payment Gateway"
            ],
            harga: "8.000.000"
        },
    ];
  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-8 text-center">
        <h1 className="text-blue-800 text-5xl font-bold">Paket Jasa Kami</h1>
        <h1 className="text-black opacity-55 text-2xl 2xl:w-[55rem]">
          Lorem ipsum dolor sit amet consectetur. Viverra tincidunt porta augue
          nullam sit tempus ut. Quam ante feugiat enim magna sodales porttitor
          aliquam at.
        </h1>
      </div>
        <div className="flex justify-center items-center gap-10 mt-20">
            {data.map((item, index) => (
                <CardJasa judul={item.judul} list={item.list} harga={item.harga} key={index} />
            ))}
        </div>
    </div>
  );
};
export default Jasa;
