import { teknologiData } from "../../data/data";
const Teknologi = () => {
  return (
    <div className="mt-10 px-20 xl:px-40 2xl:px-60 flex gap-30 xl:gap-50 2xl:gap-60 2xl:justify-center">
        <div className="flex gap-10">
          {teknologiData.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-5 items-center">
              <img src={item.img} alt={item.judul} />
              <h1 className="font-cabin text-blue-950 font-semibold">
                {item.judul}
              </h1>
            </div>
          ))}
          {/* <div className="flex flex-col gap-y-5 items-center">
            <img src="/assets/icons/NodeJs.png" alt="" />
            <h1 className="font-cabin text-blue-950 font-semibold">Node JS</h1>
          </div>
          <div className="flex flex-col gap-y-5 items-center">
            <img src="/assets/icons/React.png" alt="" />
            <h1 className="font-cabin text-blue-950 font-semibold">React JS</h1>
          </div>
          <div className="flex flex-col gap-y-5 items-center">
            <img src="/assets/icons/flutter.png" alt="" />
            <h1 className="font-cabin text-blue-950 font-semibold">Flutter</h1>
          </div> */}
        </div>
        {/* <div className="flex gap-10 my-10">
          <div className="flex flex-col gap-y-5 items-center">
            <img src="/assets/icons/Kotlin.png" alt="" />
            <h1 className="font-cabin text-blue-950 font-semibold">Kotlin</h1>
          </div>
          <div className="flex flex-col gap-y-5 items-center">
            <img src="/assets/icons/wordpress.png" alt="" />
            <h1 className="font-cabin text-blue-950 font-semibold">
              Wordpress
            </h1>
          </div>
          <div className="flex flex-col gap-y-5 items-center">
            <img src="/assets/icons/tensorflow.png" alt="" />
            <h1 className="font-cabin text-blue-950 font-semibold">
              Tensorflow
            </h1>
          </div>
        </div> */}
      <div className="flex flex-col font-cabin w-2/5">
        <h1 className="text-blue-950 font-semibold 2xl:text-xl">
          Technologies
        </h1>
        <h1 className="text-blue-950 text-5xl/15 2xl:text-6xl/18 font-bold mt-2">
          Teknologi Yang Kami Gunakan
        </h1>
        <p className="opacity-60 mt-3 2xl:text-xl">
          Lorem ipsum dolor sit amet consectetur. Leo eu purus amet porttitor
          pulvinar ut.
        </p>
      </div>
    </div>
  );
};
export default Teknologi;
