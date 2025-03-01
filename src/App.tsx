import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilPage from "./pages/ProfilPage";
import ProductPage from "./pages/ProductPage";
import Layout from "./layouts/layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/profile" element={<ProfilPage />} />
          <Route path="/" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
