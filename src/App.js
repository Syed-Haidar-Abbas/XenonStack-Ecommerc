import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import banners from "./Components/Assets/images/img-grid-1.jpg";
function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/sofas"
            element={<ShopCategory banner={banners} category="sofas" />}
          />
          <Route
            path="/bedss"
            element={<ShopCategory banner={banners} category="beds" />}
          />
          <Route
            path="/tabless"
            element={<ShopCategory banner={banners} category="tables" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
