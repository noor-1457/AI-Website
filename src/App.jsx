import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Pricing from "./pages/PricingPage";
import Contact from "./pages/Contact";
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
      <main aria-busy={isLoading}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
