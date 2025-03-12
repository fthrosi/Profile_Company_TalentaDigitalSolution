const Header = () => {
  return (
    <div className="h-[24.3rem] xl:h-[28rem] 2xl:h-[30rem] bg-[url('/assets/icons/Main.png')] bg-no-repeat bg-cover px-[13rem] py-20">
      <img
        src="/assets/icons/hpkiri.png"
        alt=""
        className="absolute left-0 bottom-82 xl:bottom-67.5 2xl:bottom-81"
      />
      <img
        src="/assets/icons/hpkanan.png"
        alt=""
        className="absolute right-0 bottom-82 xl:bottom-67.5 2xl:bottom-81"
      />
      <div className="flex gap-5 2xl:gap-10">
        <div className="w-2/5 xl:w-3/5 2xl:w-1/2 font-cabin text-white">
          <h3 className="text-xl">Portofolio</h3>
          <h1 className="text-5xl/13 xl:text-7xl 2xl:text-8xl">Talenta Portofolio</h1>
        </div>
        <div>
          <p className="text-white font-cabin text-justify xl:text-xl 2xl:text-2xl/12">
            Talenta siap mewujudkan ide digitalmu menjadi kenyataan! Dari
            website bisnis yang elegan hingga aplikasi mobile yang powerful,
            portofolio kami membuktikan keahlian dalam menciptakan solusi yang
            responsif, fungsional, dan user-friendly. Percayakan proyekmu kepada
            tim profesional kami dan buat brand-mu semakin bersinar di dunia
            digital
          </p>
        </div>
      </div>
      <div className="flex gap-2 2xl:gap-10 mt-5 justify-center">
        <div className="bg-white rounded-md p-2 flex gap-2">
            <img src="/assets/icons/hasil.png" alt="" />
            <h2 className="text-blue-800 text-base 2xl:text-xl">Hasil Maksimal</h2>
        </div>
        <div className="bg-white rounded-md p-2 flex gap-2">
            <img src="/assets/icons/kustmisasi.png" alt="" />
            <h2 className="text-blue-800 text-base 2xl:text-xl">Kustomisasi Sesuai Kebutuhan</h2>
        </div>
        <div className="bg-white rounded-md p-2 flex gap-2">
            <img src="/assets/icons/teknologi.png" alt="" />
            <h2 className="text-blue-800 text-base 2xl:text-xl">Teknologi Terkini</h2>
        </div>
      </div>
    </div>
  );
};
export default Header;
