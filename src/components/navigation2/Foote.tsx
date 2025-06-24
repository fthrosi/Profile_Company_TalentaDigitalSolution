export default function Footer() {
  return (
    <>
        <div className="bg-blue-800 px-4 py-8 md:py-6 sm:px-6 md:px-8 lg:px-12 xl:px-28 flex flex-col justify-between md:flex-row">
            <div className="w-[140px] md:w-[180px] mx-auto mb-4 md:mb-0 md:mx-0">
                <img src="/assets/icons/logo-app2.png" alt="" className="w-full" />
            </div>
            <div className="w-fit gap-y-1 md:gap-y-0 md:gap-2.5 flex flex-col md:flex-row h-full items-center mx-auto md:mx-0">
                <div className="text-white">
                    <h1 className="font-cabin text-sm md:text-md font-medium text-center">
                        Copyright © 2025 PT. Talenta Digital Solution
                    </h1>
                </div>
                <div className="flex flex-row mt-2 gap-2">
                    <img
                        src="/assets/icons/linkedin.png"
                        alt=""
                        className="w-6 h-6 sm:w-10 sm:h-10 drop-shadow-md"
                    />
                    <img
                        src="/assets/icons/GitHub1.png"
                        alt=""
                        className="w-6 h-6 sm:w-10 sm:h-10 drop-shadow-md"
                    />
                    <img
                        src="/assets/icons/upwork.png"
                        alt=""
                        className="w-6 h-6 sm:w-10 sm:h-10 drop-shadow-md"
                    />
                    <img
                        src="/assets/icons/fiverr.png"
                        alt=""
                        className="w-6 h-6 sm:w-10 sm:h-10 drop-shadow-md"
                    />
                </div>
            </div>
        </div>
    </>
  );
}