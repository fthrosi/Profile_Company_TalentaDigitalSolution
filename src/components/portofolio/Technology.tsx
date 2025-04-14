const Teknologi = () => {
  return (
    <div className="my-20 px-10 md:px-20 xl:px-40 2xl:px-60 flex flex-wrap lg:flex-nowrap gap-8 lg:gap-30 justify-center">
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end order-2 lg:order-1 ">
        <div className="flex md:gap-20 gap-10 justify-between">
          <div className="flex flex-col gap-y-5 items-center">
            <img src="/assets/icons/NodeJs.png" alt=""  className="size-10"/>
            <h1 className="font-cabin text-blue-950 font-semibold">Node JS</h1>
          </div>
          <div className="flex flex-col gap-y-5 items-center">
            <img src="/assets/icons/flutter.png" alt="" className="size-10" />
            <h1 className="font-cabin text-blue-950 font-semibold">Flutter</h1>
          </div>
          <div className="flex flex-col gap-y-5 items-center">
            <img src="/assets/icons/wordpress.png" alt="" className="size-10" />
            <h1 className="font-cabin text-blue-950 font-semibold">Wordpress</h1>
          </div>
        </div>
        <div className="flex md:gap-20 gap-10 mt-10 justify-around">
          <div className="flex flex-col gap-y-5 items-center">
            <img src="/assets/icons/Kotlin.png" alt=""  className="size-10"/>
            <h1 className="font-cabin text-blue-950 font-semibold">Kotlin</h1>
          </div>
          <div className="flex flex-col gap-y-5 items-center">
            <img src="/assets/icons/React.png" alt="" className="size-10" />
            <h1 className="font-cabin text-blue-950 font-semibold">React JS</h1>
          </div>
          <div className="flex flex-col gap-y-5 items-center">
            <img src="/assets/icons/tensorflow.png" alt="" className="size-10" />
            <h1 className="font-cabin text-blue-950 font-semibold">Tensorflow</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-cabin w-full order-1 lg:order-2 lg:w-1/2">
        <h1 className="text-blue-950 font-semibold 2xl:text-xl">Technologies</h1>
        <h1 className="text-blue-950 text-5xl/15 2xl:text-6xl/18 font-bold mt-2">Teknologi Yang Kami Gunakan</h1>
        <p className="opacity-60 mt-3 2xl:text-xl">
        Kami menggunakan teknologi canggih dan inovatif untuk menawarkan solusi terbaik sesuai dengan kebutuhan Anda.
        </p>
      </div>
    </div>
  );
};
export default Teknologi;
