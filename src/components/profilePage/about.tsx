const About = () => {
    return(
        <div className="flex 2xl:px-20 2xl:mt-2 lg:mt-7 gap-10 lg:items-center">
          <div className="text-white font-bold font-cabin w-1/3">
            <h1 className=" text-xl">About Talenta</h1>
            <h1 className="2xl:text-[4rem]/18 lg:text-4xl/12">Talenta Digital Solution</h1>
          </div>
          <div className="w-2/3">
            <p className="text-justify text-white font-cabin 2xl:text-2xl/12 lg:text-xl/9">
              PT Talenta Digital Solutions didirikan pada tahun 2024 dengan visi
              untuk menjadi mitra terpercaya dalam pengembangan perangkat lunak
              yang inovatif dan berkualitas. Berawal dari tim kecil yang terdiri
              dari para profesional di bidang teknologi, perusahaan ini lahir
              dari semangat untuk membantu bisnis bertransformasi secara digital
              melalui solusi perangkat lunak yang efektif dan efisien.
            </p>
          </div>
        </div>
    )
}
export default About;