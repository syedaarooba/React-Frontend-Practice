import React, { useState } from "react";
import { 
  Sparkles, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  Layers,
  Tag
} from "lucide-react";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";

const galleryItems = [
  {
    id: 1,
    title: "Apex Crypto & Assets Portal",
    category: "Web Engineering",
    client: "Apex Financial",
    description: "High-frequency cryptocurrency trading dashboard with real-time websocket candles, interactive portfolio breakdown, and instant order routing.",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&auto=format&fit=crop",
    fallback: img1,
    tags: ["React 19", "WebSockets", "Tailwind CSS", "Recharts"]
  },
  {
    id: 2,
    title: "Verve Luxury Digital Boutique",
    category: "UI/UX & Design",
    client: "Verve Milano",
    description: "Immersive headless luxury apparel storefront featuring 3D product previews, fluid micro-interactions, and instant multi-currency checkout.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    fallback: img2,
    tags: ["UI/UX Design", "Framer Motion", "Headless", "Stripe"]
  },
  {
    id: 3,
    title: "Synapse AI Analytics Studio",
    category: "Cloud & AI",
    client: "Synapse Intelligence",
    description: "Enterprise multi-model workspace enabling engineering teams to evaluate LLM prompts, inspect token latency, and automate test suites.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    fallback: img3,
    tags: ["Generative AI", "Vite", "Node.js", "Docker"]
  },
  {
    id: 4,
    title: "Pulse Telehealth Platform",
    category: "Mobile & SaaS",
    client: "Pulse Health Inc.",
    description: "HIPAA-compliant progressive web application for virtual physician appointments, interactive triage questionnaires, and encrypted EHR sync.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    fallback: img4,
    tags: ["Healthcare", "PWA", "Tailwind", "WebRTC"]
  },
  {
    id: 5,
    title: "Krypton Cloud DevOps Console",
    category: "Web Engineering",
    client: "Krypton Systems",
    description: "Unified infrastructure monitoring console providing real-time CPU telemetry, cluster health visualizations, and one-click rollbacks.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    fallback: img5,
    tags: ["Cloud Telemetry", "Vite", "REST API", "Kubernetes"]
  },
  {
    id: 6,
    title: "Lumina Architectural Portfolio",
    category: "UI/UX & Design",
    client: "Lumina Studios",
    description: "Minimalist, editorial portfolio site celebrating architectural blueprints, award-winning pavilions, and high-resolution spatial photography.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    fallback: img6,
    tags: ["Editorial", "Design System", "CSS Grid", "Animations"]
  },
  {
    id: 7,
    title: "EcoTrack Carbon Footprint SaaS",
    category: "Mobile & SaaS",
    client: "EcoTrack Global",
    description: "B2B carbon accounting SaaS platform that aggregates supply-chain emissions data and generates audit-ready ESG reporting.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop",
    fallback: img7,
    tags: ["SaaS", "Dashboard", "Tailwind", "PostgreSQL"]
  },
  {
    id: 8,
    title: "Aura Neural Voice Assistant",
    category: "Cloud & AI",
    client: "Aura Technologies",
    description: "Next-generation voice AI assistant interface with sub-100ms streaming responses and contextual memory across cross-device workflows.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1200&auto=format&fit=crop",
    fallback: img8,
    tags: ["Voice AI", "Web Audio API", "React", "Cloudflare"]
  },
  {
    id: 9,
    title: "Zenith Flow Workflow Automation",
    category: "Web Engineering",
    client: "Zenith Operations",
    description: "Node-based canvas tool allowing ops teams to configure custom integrations, trigger automated webhooks, and monitor API payloads.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    fallback: img9,
    tags: ["Flow Canvas", "Drag & Drop", "Tailwind", "React"]
  }
];

const categories = ["All", "Web Engineering", "UI/UX & Design", "Mobile & SaaS", "Cloud & AI"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setSelectedItemIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const nextItem = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  const prevItem = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <div className="w-full bg-[#090d16] text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-semibold tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Curated Digital Showcase
          </h1>

          <p className="text-base sm:text-lg text-slate-400">
            Explore our latest deployments, custom web platforms, and design systems crafted for visionary companies.
          </p>

          {/* Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group glass-card rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/15 flex flex-col justify-between"
            >
              {/* Image with overlay */}
              <div 
                className="relative h-64 sm:h-72 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.image}
                  onError={(e) => {
                    e.target.src = item.fallback;
                  }}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Category Pill on Image */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-indigo-300">
                    {item.category}
                  </span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-indigo-600/90 text-white flex items-center justify-center shadow-xl shadow-indigo-600/40 transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Text Card Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-xs text-slate-400 font-medium mb-1.5">
                    Client: <span className="text-slate-200">{item.client}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-slate-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => openLightbox(index)}
                    className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-indigo-600/30 border border-white/10 hover:border-indigo-500/40 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>View Project Case</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {currentItem && (
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={closeLightbox}
          >
            <div 
              className="relative w-full max-w-4xl bg-[#0d1322] border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 border border-white/20 text-white flex items-center justify-center hover:bg-indigo-600 transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={prevItem}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/80 border border-white/20 text-white flex items-center justify-center hover:bg-indigo-600 transition-colors"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextItem}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/80 border border-white/20 text-white flex items-center justify-center hover:bg-indigo-600 transition-colors"
                aria-label="Next Project"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Lightbox Image */}
              <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-black">
                <img
                  src={currentItem.image}
                  onError={(e) => {
                    e.target.src = currentItem.fallback;
                  }}
                  alt={currentItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1322] via-transparent to-transparent" />
              </div>

              {/* Lightbox Details */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold">
                    {currentItem.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Client: <strong className="text-white">{currentItem.client}</strong>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {currentItem.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {currentItem.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {currentItem.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Gallery;
