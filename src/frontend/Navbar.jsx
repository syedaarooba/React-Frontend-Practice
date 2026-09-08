import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/service" },
  { name: "Gallery", path: "/gallery" },
  { name: "Our Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090d16]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-[#090d16]/70 backdrop-blur-md border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                AROOBA<span className="text-indigo-400 font-extrabold">TECH</span>
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-medium -mt-1">
                Digital Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-indigo-600 shadow-md shadow-indigo-500/30"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      {isOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 border-b border-white/10 bg-[#0c1222]/98 backdrop-blur-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  )}
                </Link>
              );
            })}
            <div className="pt-3">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-center font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/20"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
