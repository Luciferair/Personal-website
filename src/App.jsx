import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/About";
import Project from "./components/Project";
import Work from "./components/Work";
import Service from "./components/Service";
import LoadingSpinner from "./components/Loading";
import MobileHero from "./components/MobileHero";
import { useMediaQuery } from "@react-hook/media-query";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1200px)");
  const location = useLocation();

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 500); 
    };

    handleRouteChange();
  }, [location.pathname]);

  return (
    <div className="bg-gradient-to-r from-black to-blue-900 text-white">
      <Navbar />
      {loading && <LoadingSpinner />}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={isMobile ? <MobileHero /> : <Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/work" element={<Work />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
