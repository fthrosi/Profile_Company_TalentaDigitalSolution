import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
export default function TopNavbar() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
    );
  }
  );
  return (
    <div className={`flex justify-between items-center 2xl:px-30 lg:px-22 lg:py-4 2xl:py-6.5 fixed z-10 top-0 right-0 w-full  bg-white ${scroll ? "shadow-md" : ""}`}>
      <Link to="/">
        <img src="/assets/icons/navbar.png" alt="logo" className="2xl:w-44 2xl:h-10.5 lg:w-32 lg:h-8"/>
      </Link>
      <div className="flex 2xl:space-x-32 lg:space-x-20 text-blue-800 font-normal 2xl:text-2xl lg:text-lg font-cabin">
        <Link to="/profile" className="hover:text-blue-500">
          Profil
        </Link>
        <Link to="/" className="hover:text-blue-500">
          Produk
        </Link>
        <Link to="/portofolio" className="hover:text-blue-500">
          Portofolio
        </Link>
      </div>
      <Link
        to="/kontak"
        className="bg-blue-800 text-white 2xl:px-10 py-3.5 lg:px-5 lg:py-2 rounded-4xl font-medium text-base hover:bg-blue-500 font-cabin"
      >
        Kontak Kami
      </Link>
    </div>
  );
}
