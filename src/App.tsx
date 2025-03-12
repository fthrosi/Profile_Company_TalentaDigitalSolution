import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilPage from "./pages/ProfilPage";
import ProductPage from "./pages/ProductPage";
import Layout from "./layouts/layout";
import Portofolio from "./pages/portofolio";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/profile" element={<ProfilPage />} />
          <Route path="/" element={<ProductPage />} />
          <Route path="/portofolio" element={<Portofolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
