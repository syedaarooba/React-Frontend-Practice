import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  ArrowUp, 
  Mail, 
  CheckCircle2, 
  Send,
  Github,
  Linkedin,
  Twitter,
  Globe
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#060911] border-t border-white/10 text-slate-400 pt-16 pb-8 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent pointer-events-none blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info (Span 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                AROOBA<span className="text-indigo-400">TECH</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Engineering high-performance web applications, intuitive digital experiences, 
              and scalable cloud architectures for visionary founders and modern enterprises.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                aria-label="Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Our Studio
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-white transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Meet the Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/service" className="hover:text-white transition-colors">
                  Custom Web Engineering
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-white transition-colors">
                  UI/UX & Design Systems
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-white transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-white transition-colors">
                  API & Backend Dev
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-white transition-colors">
                  Performance & SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Subscription */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-slate-400 mb-3">
              Subscribe for our tech insights, articles, and product releases.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-medium flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>All systems operational</span>
          </div>

          <div>
            © {new Date().getFullYear()} Arooba Raza Tech. Designed & Built with React, Tailwind & Vite.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-1"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
