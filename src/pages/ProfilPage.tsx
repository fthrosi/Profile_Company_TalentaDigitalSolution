import About from "../components/profilePage/about";
import Header from "../components/profilePage/Header";
import VisiMisi from "../components/profilePage/visiMisi";
import Pertumbuhan from "../components/profilePage/pertumbuhan";
import TeamSection from "../components/profilePage/TeamSection";
import Peta from "../components/profilePage/peta";
import SlideInUp from "../animations/SlideInUp";
import SlideInLeft from "../animations/SlideInLeft";
import FadeIn  from "../animations/FadeIn";
import SlideInRight from "../animations/SlideInRight";

export default function ProfilPage() {
  return (
    <div className="pb-10 bg-white max-w-screen overflow-x-hidden">
      <Header/>
      <FadeIn>
        <About/>
      </FadeIn>
      <img
        src="/assets/icons/Blob1.png"
        alt=""
        className="absolute right-0 mt-5"
      />
      <SlideInUp>
        <VisiMisi />
      </SlideInUp>
      <img src="/assets/icons/Blob2.png" alt="" className="absolute left-0" />
      <SlideInLeft>
        <Pertumbuhan />
      </SlideInLeft>
      <SlideInRight>
        <TeamSection />
      </SlideInRight>
      <img src="/assets/icons/Blob1.png" alt="" className="absolute right-0 w-" />
      <img
        src="/assets/icons/Blob4.png"
        alt=""
        className="absolute left-0 translate-y-50"
      />
      <SlideInUp>
        <div className="mt-5 py-10">
            <Peta />
        </div>        
      </SlideInUp>
    </div>
  );
}