import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";
import FloatingButtons from "./components/FloatingButtons";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Drivers from "./pages/Drivers";
import Contact from "./pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <FloatingButtons />

      <Footer />
    </>
  );
}

export default App;