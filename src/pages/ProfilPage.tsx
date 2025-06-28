import About from "../components/profilePage/about";
import Header from "../components/profilePage/Header";
import VisiMisi from "../components/profilePage/visiMisi";
import Pertumbuhan from "../components/profilePage/pertumbuhan";
import TeamSection from "../components/profilePage/TeamSection";
import Peta from "../components/profilePage/peta";

export default function ProfilPage() {
  return (
    <div className="pb-10 bg-white max-w-screen overflow-x-hidden">
      <Header />
      <About />
      <img
        src="/assets/icons/Blob1.png"
        alt=""
        className="absolute right-0 mt-5"
      />
      <VisiMisi />
      <img src="/assets/icons/Blob2.png" alt="" className="absolute left-0" />
      <Pertumbuhan />
      <TeamSection />
      <img
        src="/assets/icons/Blob1.png"
        alt=""
        className="absolute right-0 w-"
      />
      <img
        src="/assets/icons/Blob4.png"
        alt=""
        className="absolute left-0 translate-y-50"
      />
      <div className="mt-5 py-10">
        <Peta />
      </div>
    </div>
  );
}
