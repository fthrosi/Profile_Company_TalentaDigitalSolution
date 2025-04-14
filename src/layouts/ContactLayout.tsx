import { Outlet } from "react-router-dom"
import Navbar from "../components/navigation2/Navbar"
import Footer from "../components/navigation2/Footer"

export default function ContactLayout(){
    return(
        <div
          className="transition-opacity duration-700 ease-in-out">
          <nav>
            <Navbar />
          </nav>
          <main className="min-h-[100vh] 2xl:pt-23.5 lg:pt-18">
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
    )
}