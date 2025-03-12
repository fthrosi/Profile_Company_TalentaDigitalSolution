import Header from "../components/portofolio/header"
import Portofoilo from "../components/portofolio/portofolio"
import Teknologi from "../components/portofolio/teknologi"
export default function Portofolio() {
    return (
        <div>
            <Header />
            <img src="/assets/icons/Blob5.png" alt="" className="absolute left-0 mt-5"/>
            <Portofoilo />
            <img src="/assets/icons/Blob6.png" alt="" className="absolute right-0"/>
            <Teknologi />
        </div>
    )
}