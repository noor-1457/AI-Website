import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
<<<<<<< HEAD
import Footer from "./Components/Footer";
=======
import Pricing from "./pages/PricingPage";
import Contact from "./pages/Contact";
>>>>>>> 08b6682c13ac4e8560faab08db701e0a841d7fa7

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
<<<<<<< HEAD
=======
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
>>>>>>> 08b6682c13ac4e8560faab08db701e0a841d7fa7
      </Routes>
      <Footer />
    </>
  );
}

export default App;
