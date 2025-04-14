import Header from "../components/portofolio/header"
import Portofoilo from "../components/portofolio/PortofolioSection"
import Teknologi from "../components/portofolio/Technology"
import SlideInUp from "../animations/SlideInUp"
import FadeIn from "../animations/FadeIn"
export default function Portofolio() {
    return (
        <div className="min-h-screen animate-fadein max-w-screen overflow-x-hidden">
            <Header />
            <img src="/assets/icons/Blob5.png" alt="" className="absolute left-0 mt-5"/>
            <FadeIn>
                <Portofoilo />
            </FadeIn>
            <img src="/assets/icons/Blob6.png" alt="" className="absolute right-0"/>
            <SlideInUp>
                <Teknologi />
            </SlideInUp>
        </div>
    )
}