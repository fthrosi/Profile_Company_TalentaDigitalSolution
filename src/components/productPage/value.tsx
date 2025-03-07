import ValueCard from "./valueCard";
const Value = () => {
  const data = [
    {
      judul: "Innovation",
      isi: "Terus inovasi untuk layanan yang lebih baik untuk klien.",
      icon: "/assets/icons/lamp.png",
    },
    {
      judul: "Excellence",
      isi: "Solusi berkualitas tinggi yang melampaui harapan klien.",
      icon: "/assets/icons/lencana.png",
    },
    {
      judul: "Agility",
      isi: "Respon cepat dan efektif terhadap perubahan kebutuhan.",
      icon: "/assets/icons/layer.png",
    },
    {
      judul: "Warranty",
      isi: "Website cepat, ringan, dan optimal berdasarkan GTmetrix/PageSpeed.",
      icon: "/assets/icons/Warranty.png",
    },
    {
      judul: "Partnership",
      isi: "Membangun kemitraan kuat dengan kepercayaan dan rasa hormat.",
      icon: "/assets/icons/salaman.png",
    },
    {
      judul: "Security Protection",
      isi: "Keamanan ketat, bebas malware, dan perlindungan optimal.",
      icon: "/assets/icons/globe.png",
    },
    {
      judul: "Free Hosting",
      isi: "Termasuk domain dan hosting jika diperlukan.",
      icon: "/assets/icons/Cloud.png",
    }
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <h1 className="text-blue-800 text-5xl font-bold">
          Value Yang Kami Berikan
        </h1>
        <h1 className="text-black opacity-55 text-2xl 2xl:w-[55rem] lg:w-[45rem]">
          Layanan lengkap yang kami tawarkan dirancang khusus untuk memenuhi
          kebutuhan bisnis Anda.
        </h1>
      </div>
      <div className="grid grid-cols-3 2xl:gap-x-48 2xl:gap-y-10 lg:gap-x-10 lg:gap-y-10 mt-20">
        {data.map((item, index) => (
          <ValueCard judul={item.judul} isi={item.isi} icon={item.icon} key={index} nomor={index}/>
        ))}
      </div>
    </>
  );
};
export default Value;
