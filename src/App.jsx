import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function App() {
  return (
    <BrowserRouter basename="/reto-tecnico-nelumbo">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>INICIO</h1>} />
        <Route path="/two" element={<h2>twoooo</h2>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
