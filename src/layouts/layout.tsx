import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/navigation/topNavbar";
import Footer from "../components/navigation/footer";
import SplashScreen from "../components/splashscreen/splashScreen";
export default function Layout() {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <div>
        <header>
          <Navbar />
        </header>
        <main className="h-[100vh] bg-amber-400 pt-26">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
