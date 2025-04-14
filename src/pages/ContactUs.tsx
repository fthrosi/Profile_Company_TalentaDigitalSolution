import HeaderText from "../components/contactUs/HeaderText"
import FormSection from "../components/contactUs/FormSection"
import { Link } from "react-router-dom"
export default function ContactUs(){
    return(
        <>
            <section className="min-h-screen relative flex flex-col items-center">
            <div className="flex flex-row space-x-2 w-[90%] sm:w-[80%] lg:w-[60%] justify-start items-center mb-4 pt-12 lg:pt-0">
                <Link to="/">
                    <img
                        src="/assets/icons/icon-home.png"
                        alt=""
                        className="w-[18px] lg:w-[22px] lg:h-[22px] drop-shadow-md"
                    />
                </Link>
                <img
                    src="/assets/icons/icon-chevron.png"
                    alt=""
                    className="w-6 h-6 drop-shadow-md"
                />
                <p className="text-xl font-cabin font-bold text-blue-950">Kontak Kami</p>
            </div>
            <HeaderText/>
            <h1 className="w-[90%] sm:w-[80%] lg:w-[60%] text-2xl font-bold font-cabin text-blue-950 my-4">
                Bagaimana anda menghubungi kami?
            </h1>
            <FormSection/>
            <img
                src="/assets/icons/lingkaran.png"
                alt=""
                className="absolute -z-5 left-0 -top-34 -translate-y-1/2 sm:-translate-y-1/3 lg:-translate-y-5 w-[360px] opacity-3"
            />
            <img
                src="/assets/icons/lingkaran2.png"
                alt=""
                className="absolute -z-5 right-0 -bottom-12 -translate-y-1/2 sm:-translate-y-1/3 lg:-translate-y-5 w-[360px] opacity-5"
            />
            </section>
        </>
    )
}