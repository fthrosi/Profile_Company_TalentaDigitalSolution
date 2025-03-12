import About from "../components/profilePage/about";
import VisiMisi from "../components/profilePage/visiMisi";
import Pertumbuhan from "../components/profilePage/pertumbuhan";
import Teams from "../components/profilePage/team";
import Peta from "../components/profilePage/peta";
export default function ProfilPage() {
  return (
    <div className="pb-10">
      <div className=" px-15 2xl:py-50 lg:py-13 xl:py-20 2xl:min-h-screen h-[28.5rem] bg-[url('/assets/icons/Main.png')] bg-top bg-no-repeat 2xl:bg-[length:100%_88%] lg:bg-[length:100%_100%] xl:bg-[length:100%_100%]">
        <div className="w-2/5 flex flex-col 2xl:space-y-10 lg:space-y-5">
          <h1 className="2xl:text-6xl/18 lg:text-3xl/10 font-bold font-cabin text-white">
            Selamat Datang di Profil Talenta Digital
          </h1>
          <p className="font-cabin text-white 2xl:text-2xl/10 lg:text-lg opacity-80">
            We provide innovative software solutions to streamline processes,
            enhance business efficiency, and optimize your company's
            performance. With an experienced team of technology professionals,
            we are ready to support your business’s digital transformation
            through effective and efficient solutions. Let's create a smarter
            future together with technology!
          </p>
        </div>
        <img
          src="/assets/icons/Group4.png"
          alt=""
          className="absolute right-26 2xl:bottom-45 lg:w-[40%] lg:bottom-95"
        />
        <img
          src="/assets/icons/Group1.png"
          alt=""
          className="absolute right-10 2xl:bottom-10 lg:w-[50%] lg:bottom-65"
        />
        <img
          src="/assets/icons/kotak.png"
          alt=""
          className="absolute right-0 w-full 2xl:bottom-0 lg:bottom-65"
        />
      </div>
      <div className="mx-5 2xl:px-20 lg:px-10 2xl:py-25 lg:py-10 rounded-3xl bg-[url('/assets/icons/Main.png')] bg-cover bg-no-repeat lg:mt-20 2xl:mt-0">
        <img
          src="/assets/icons/logoaja.png"
          alt=""
          className="w-20 h-20 absolute left-10 lg:-translate-y-5 2xl:-translate-y-20"
        />
        <About />
      </div>
      <img
        src="/assets/icons/Blob1.png"
        alt=""
        className="absolute right-0 mt-5"
      />
      <VisiMisi />
      <img src="/assets/icons/Blob2.png" alt="" className="absolute left-0" />
      <Pertumbuhan />
      <Teams />
      <img src="/assets/icons/Blob1.png" alt="" className="absolute right-0 " />
      <img src="/assets/icons/Blob4.png" alt="" className="absolute left-0 translate-y-50" />
      <div className="mt-5 2xl:px-52 lg:px-20 py-10">
        <Peta />
      </div>
    </div>
  );
}
