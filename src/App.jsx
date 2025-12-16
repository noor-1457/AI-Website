import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
