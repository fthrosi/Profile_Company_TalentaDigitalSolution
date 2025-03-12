import DotCarousel from "./swiper";
const Teams = () => {
  return (
    <div className="2xl:mt-30 lg:mt-20 2xl:px-52 lg:px-20 py-10">
      <div className="w-2/5 flex flex-col space-y-4 font-cabin">
        <h1 className="2xl:text-3xl lg:text-xl text-[#808080] font-semibold">
          Company Members
        </h1>
        <h1 className="2xl:text-6xl lg:text-[2.6rem]/12 text-blue-950 font-bold">
          We are proud of our team members
        </h1>
        <h1 className="2xl:text-2xl lg:text-lg text-[#808080] font-semibold">
          Lorem ipsum dolor sit amet consectetur. Leo eu purus amet porttitor
          pulvinar ut.{" "}
        </h1>
      </div>
      <div className="w-full mt-2">
        <DotCarousel />
      </div>
      
    </div>
  );
};
export default Teams;
