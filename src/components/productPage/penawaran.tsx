import SlideInLeft from "../../animations/SlideInLeft";
import SlideInRight from "../../animations/SlideInRight";
import SlideInUp from "../../animations/SlideInUp";

const Penawaran = () => {
  return (
    <div className="max-w-screen overflow-x-hidden px-[clamp(0.5rem,5vw,2rem)] md:px-[clamp(3rem,3vw,3.5rem)] xl:px-[clamp(6rem,10vw,9rem)] md:mt-10 lg:mt-0 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
      <SlideInUp>
        <div className="flex justify-center items-center flex-col gap-6 text-center px-12 pt-5 sm:pt-40 md:pt-44 lg:pt-5">
          <h1 className="text-blue-800 text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
            What Does Talenta Offer?
          </h1>
          <h1 className="text-black opacity-55 text-base sm:text-lg md:text-xl xl:text-2xl max-w-3xl">
            The complete services we offer are specially designed to meet your
            business needs.
          </h1>
        </div>
      </SlideInUp>

      <SlideInRight>
        <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-between gap-6 md:gap-8 lg:gap-10 mt-12 sm:mt-20 md:mt-20 md:px-0">
          <div className="w-full sm:w-1/2 max-w-[95%] drop-shadow-lg rounded-t-4xl rounded-br-4xl overflow-hidden bg-amber-300">
            <img
              src="/assets/icons/img-2.png"
              alt="asset"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full sm:w-1/2 sm:self-center flex flex-col gap-4 sm:gap-2 2xl:gap-5 text-center sm:text-justify md:text-left">
            <h1 className="text-2xl sm:text-[clamp(1.25rem,3vw,1.5rem)] md:text-[clamp(1.5rem,3vw,1.8rem)] lg:text-3xl xl:text-4xl 2xl:text-5xl text-blue-800 font-bold">
              Development of Applications
            </h1>
            <p className="text-base sm:text-[clamp(0.88rem,3vw,1rem)] md:text-[clamp(1rem,3vw,1.3rem)] xl:text-[clamp(1.5rem,1.5vw,1.7rem)] 2xl:text-[1.8rem] opacity-55 2xl:leading-relaxed">
              We provide custom mobile application solutions for clients who
              want to grow their business through the use of technology. Our
              expert team collaborates with clients to design high-quality,
              user-friendly applications that align with their vision
            </p>
          </div>
        </div>
      </SlideInRight>

      <SlideInLeft>
        <div className="flex flex-col sm:flex-row-reverse items-center sm:items-stretch justify-between gap-6 md:gap-8 lg:gap-10 mt-7 sm:mt-16 md:mt-18 md:px-0">
          <div className="w-full sm:w-1/2 max-w-[95%] drop-shadow-lg rounded-t-4xl rounded-bl-4xl overflow-hidden bg-amber-300">
            <img
              src="/assets/icons/img-1.png"
              alt="asset"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full sm:w-1/2 sm:self-center flex flex-col gap-4 sm:gap-2 2xl:gap-5 text-center sm:text-justify md:text-left">
            <h1 className="text-2xl sm:text-[clamp(1.25rem,3vw,1.5rem)] md:text-[clamp(1.5rem,3vw,1.8rem)] lg:text-3xl xl:text-4xl 2xl:text-5xl text-blue-800 font-bold">
              Website Development
            </h1>
            <p className="text-base sm:text-[clamp(0.88rem,3vw,1rem)] md:text-[clamp(1rem,3vw,1.3rem)] xl:text-[clamp(1.5rem,1.5vw,1.7rem)] 2xl:text-[1.8rem] 2xl:leading-relaxed opacity-55">
              We offer custom web solutions tailored to each client's needs. Our
              experienced developers and designers deliver web applications that
              are not only user-friendly but also visually appealing, while
              being optimized for performance and scalability.
            </p>
          </div>
        </div>
      </SlideInLeft>

      <SlideInRight>
        <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-between gap-6 md:gap-8 lg:gap-10 mt-7 sm:mt-16 md:mt-18 pb-12 sm:pb-16 md:pb-20 md:px-0">
          <div className="w-full sm:w-1/2 max-w-[95%] drop-shadow-lg rounded-t-4xl rounded-br-4xl overflow-hidden">
            <img
              src="/assets/icons/img-3.png"
              alt="asset"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full sm:w-1/2 sm:self-center flex flex-col gap-4 sm:gap-2 2xl:gap-5 text-center sm:text-justify md:text-left">
            <h1 className="text-2xl sm:text-[clamp(1.25rem,3vw,1.5rem)] md:text-[clamp(1.5rem,3vw,1.8rem)] lg:text-3xl xl:text-4xl 2xl:text-5xl text-blue-800 font-bold">
              UI/UX Design
            </h1>
            <p className="text-base sm:text-[clamp(0.88rem,3vw,1rem)] md:text-[clamp(1rem,3vw,1.3rem)] xl:text-[clamp(1.5rem,1.5vw,1.7rem)] 2xl:text-[1.8rem] 2xl:leading-relaxed opacity-55">
              We prioritize enhancing user experience and visual design in our
              software products. This service integrates research, design, and
              technology to create intuitive software that is visually appealing
              and capable of meeting customer needs and expectations.
            </p>
          </div>
        </div>
      </SlideInRight>
    </div>
  );
};

export default Penawaran;
