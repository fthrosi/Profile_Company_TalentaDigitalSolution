import { Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
import Navbar from "../components/navigation/topNavbar";
import Footer from "../components/navigation/footer";
import SplashScreen from "../components/splashscreen/splashScreen";
export default function Layout() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeInLayout, setFadeInLayout] = useState(false)
  
    useEffect(() => {
      if (!showSplash) {
        setTimeout(() => {
          setFadeInLayout(true);
        }, 100);
      }
    }, [showSplash]);
  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <div className={`transition-opacity duration-700 ease-in-out ${
          fadeInLayout ? "opacity-100" : "opacity-0"
        }`}>
          <header>
            <Navbar />
          </header>
          <main className="min-h-[100vh] 2xl:pt-23.5 lg:pt-18">
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
}
