import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './frontend/Navbar';
import Home from './frontend/Home';
import AboutUs from './frontend/AboutUs';
import Gallery from './frontend/Gallery';
import Services from './frontend/Services';
import Team from './frontend/Team';
import ContactUs from './frontend/ContactUs';
import Footer from './frontend/Footer';
import ScrollToTop from './frontend/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col selection:bg-indigo-600 selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/service" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
