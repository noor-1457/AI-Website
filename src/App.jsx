import Navbar from "./components/navbar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Pricing from "./pages/PricingPage";
import Contact from "./pages/Contact";
import HowItWork from "./pages/HowItWork";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/how-it-works" element={<HowItWork/>} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
