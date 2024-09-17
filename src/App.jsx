import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Menu from "./layout/Menu";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <BrowserRouter basename="/reto-tecnico-nelumbo">
      <Navbar />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
