import { Link } from "react-router-dom";
export default function TopNavbar() {
  return (
    <div className="flex justify-between items-center px-30 py-6.5 fixed z-10 top-0 right-0 w-full">
      <Link to="/">
        <img src="/assets/icons/logo.png" alt="logo" />
      </Link>
      <div className="flex space-x-32 text-blue-800 font-normal text-xl font-cabin">
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
        className="bg-blue-800 text-white px-10 py-3.5 rounded-4xl font-medium text-base hover:bg-blue-500 font-cabin"
      >
        Kontak Kami
      </Link>
    </div>
  );
}
