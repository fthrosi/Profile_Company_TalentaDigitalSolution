import TeamSwiper from "./TeamSwiper";

export default function TeamSection() {
  return (
    <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-20 xl:mt-30 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-52 py-6 sm:py-8 md:py-10">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5 flex flex-col space-y-2 sm:space-y-3 md:space-y-4 font-cabin">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl text-[#808080] font-semibold">
          Company Members
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-5xl 2xl:text-6xl text-blue-950 font-bold leading-tight">
          We are proud of our team members
        </h1>
        <h1 className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-[#808080] font-semibold">
        Talenta Digital didukung oleh tim profesional yang berpengalaman serta memiliki dedikasi tinggi.
        </h1>
      </div>
      <div className="w-full mt-6 sm:mt-8 md:mt-10">
        <TeamSwiper />
      </div>
    </div>
  );
}