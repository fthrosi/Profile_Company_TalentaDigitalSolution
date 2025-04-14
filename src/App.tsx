import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilPage from "./pages/ProfilPage";
import ProductPage from "./pages/ProductPage";
import MainLayout from "./layouts/MainLayout";
import ContactLayout from "./layouts/ContactLayout";
import Portofolio from "./pages/PortofolioPage";
import ContactUs from "./pages/ContactUs";
import emailjs from '@emailjs/browser';
import 'sweetalert2/dist/sweetalert2.min.css';

emailjs.init("5pBO-mhwVlJDWENwR");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/profile" element={<ProfilPage />} />
          <Route path="/" element={<ProductPage />} />
          <Route path="/portofolio" element={<Portofolio />} />
        </Route>
        <Route element={<ContactLayout />}>
          <Route path="/kontak" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
