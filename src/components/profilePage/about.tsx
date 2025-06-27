export default function About() {
  return (
    <div className="relative mx-[clamp(0.5rem,5vw,2rem)] md:mx-[clamp(3rem,3vw,3.5rem)] xl:mx-[clamp(6rem,10vw,9rem)] 2xl:max-w-[1440px] 2xl:mx-auto rounded-3xl bg-[url('/assets/icons/background.png')] bg-cover bg-no-repeat mt-12 sm:mt-16 md:mt-20 lg:mt-20 2xl:mt-0 shadow-xl">
      <img
        src="/assets/icons/logoaja.png"
        alt=""
        className="w-8 sm:w-10 md:w-12 lg:w-12 absolute top-3 right-4 md:top-4 lg:left-5 xl:left-8 2xl:left-5 lg:top-4 xl:top-8"
      />
      <div className="flex flex-col lg:flex-row py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 lg:items-center">
        <div className="text-white font-bold font-cabin w-full lg:w-1/3 mb-6">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-xl">
            About Talenta
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Talenta Digital
            <br />
            Solution
          </h1>
        </div>
        <div className="w-full lg:w-2/3">
          <p className="text-justify text-white font-cabin text-sm sm:text-base md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl leading-relaxed">
            PT Talenta Digital Solution didirikan pada tahun 2024 dengan visi
            untuk menjadi mitra terpercaya dalam pengembangan perangkat lunak
            yang inovatif dan berkualitas. Berawal dari tim kecil yang terdiri
            dari para profesional di bidang teknologi, perusahaan ini lahir
            dari semangat untuk membantu bisnis bertransformasi secara digital
            melalui solusi perangkat lunak yang efektif dan efisien.
          </p>
        </div>
      </div>
    </div>
  );
}