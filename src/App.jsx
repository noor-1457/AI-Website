import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Pricing from "./pages/PricingPage";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import HowItWork from "./pages/HowItWork";
import Industries from "./pages/Industries";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 380);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isLoading && <Loader fullScreen text="Loading..." />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWork />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
