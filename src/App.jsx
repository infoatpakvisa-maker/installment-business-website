import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
function App() {
  return (
     <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
    <WhatsAppButton />
    </>
  );
}

export default App;