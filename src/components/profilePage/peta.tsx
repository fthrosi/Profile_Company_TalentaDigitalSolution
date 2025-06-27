export default function Peta() {
  return (
    <div className="flex flex-col justify-center gap-6 sm:gap-8 md:gap-10 items-center font-cabin w-full px-[clamp(0.5rem,5vw,2rem)] md:px-[clamp(3rem,3vw,3.5rem)] xl:px-[clamp(6rem,10vw,9rem)] 2xl:px-0 2xl:max-w-[1440px] 2xl:mx-auto">
      <div className="flex flex-col gap-4 sm:gap-5 w-full justify-center items-center">
        <h1 className="text-blue-950 opacity-85 text-lg sm:text-xl md:text-2xl">
          Lokasi Kantor
        </h1>
        <h1 className="text-blue-800 text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Kantor Talenta Digital Solution
        </h1>
        <p className="text-blue-950 opacity-55 text-sm sm:text-base md:text-lg lg:text-xl text-center">
          Terletak di lokasi yang sangat strategis di jantung kota Batam,
          memudahkan akses ke berbagai pusat perbelanjaan, perkantoran, tempat
          hiburan, serta fasilitas umum lainnya.
        </p>
      </div>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0671646493124!2d104.0664135756797!3d1.1118158622932461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d988c5a019a585%3A0x918adca6b431ac04!2sJl.%20Orchard%20Boulevard%2C%20Belian%2C%20Kec.%20Batam%20Kota%2C%20Kota%20Batam%2C%20Kepulauan%20Riau!5e0!3m2!1sid!2sid!4v1741702278547!5m2!1sid!2sid"
          width="100%"
          height="300"
          loading="lazy"
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] rounded-2xl shadow-xl"
        ></iframe>
      </div>
    </div>
  );
}