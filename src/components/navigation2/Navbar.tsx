import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <>
            <div className="w-full bg-transparent transition-transform duration-300 ease-in-out">
                <div className="flex justify-between items-center px-4 md:px-24 py-6">
                    <Link to="/">
                        <img src="/assets/icons/logo-app.png" alt="logo" className="w-42"/>
                    </Link>
                </div>
            </div>
        </>
    )
}