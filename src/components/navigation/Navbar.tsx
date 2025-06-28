import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 10)
        setVisible(false);
      else
        setVisible(true);

      setLastScrollY(window.scrollY);

      if (scrollTimeout) clearTimeout(scrollTimeout);

      const newTimeout = setTimeout(() => {
        setVisible(true);
      }, 300);
      setScrollTimeout(newTimeout);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`fixed z-20 top-0 lg:h-[80px] 2xl:h-[82px]  w-full bg-transparent transition-transform duration-300 ease-in-out py-2 ${
        visible ? "translate-y-0 bg-white shadow-md" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between h-full items-center px-[clamp(0.5rem,5vw,2rem)] md:px-[clamp(3rem,3vw,3.5rem)] xl:px-[clamp(6rem,10vw,9rem)] 2xl:px-0 2xl:max-w-[1440px] 2xl:mx-auto">
        <Link to="/">
          <img
            src="/assets/icons/logo-app.png"
            alt="logo"
            className="w-28 md:w-35 xl:w-45"
          />
        </Link>

        <button
          className="md:hidden text-blue-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="hidden md:flex md:items-center md:space-x-8 lg:space-x-12 xl:space-x-20 text-blue-800 font-normal text-base lg:text-xl font-cabin">
          <Link to="/" className="hover:text-blue-500">
            Product
          </Link>
          <Link to="/profile" className="hover:text-blue-500">
            Profile
          </Link>
          <Link to="/portofolio" className="hover:text-blue-500">
            Portofolio
          </Link>
        </div>

        <div className="hidden md:flex md:items-center md:space-x-8 lg:space-x-12 xl:space-x-20 2xl:space-x-32 text-blue-800 font-normal text-base text-xk font-cabin">
          <Link
            to="/kontak"
            className="bg-blue-800 text-white px-4 py-2 md:px-3 md:py-2 md:text-sm rounded-4xl hover:bg-blue-900 transition-colors duration-300 ease-in-out"
          >
            Kontak Kami
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      <div
          className={`md:hidden shadow-xl fixed z-50 inset-y-0 left-0 w-full bg-white text-black transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out min-h-screen`}
        >
          <div className="fixed w-full px-[clamp(0.5rem,5vw,2rem)] py-4 flex justify-between items-center ">
            <div className="flex">
              <img src={"/assets/icons/logo-app.png"} className="w-28" alt="Flowbite Logo" />
            </div>
            <button className="text-white focus:outline-none" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="#193cb8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 p-4 font-cabin text-blue-800 font-normal h-screen">
            <Link to="/" className="hover:text-blue-500" onClick={closeMenu}>
              Produk
            </Link>
            <Link to="/profile" className="hover:text-blue-500" onClick={closeMenu}>
              Profil
            </Link>
            <Link to="/portofolio" className="hover:text-blue-500"  onClick={closeMenu}>
              Portofolio
            </Link>
            <Link
            to="/kontak"
            className="bg-blue-800 text-white text-center px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3 2xl:px-10 2xl:py-3.5 rounded-4xl font-medium hover:bg-blue-900 transition-colors duration-300 ease-in-out"
             onClick={closeMenu}>
            Kontak Kami
          </Link>
          </div>
      </div>
    </div>
  );
}