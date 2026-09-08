import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import { 
  Code2, 
  Layers, 
  Cpu, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Sparkles, 
  Zap, 
  Shield, 
  Users, 
  Award,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Projects Delivered", desc: "Production-ready apps" },
  { value: "99.4%", label: "Satisfaction Rate", desc: "From global clients" },
  { value: "12+", label: "Industry Awards", desc: "For design & engineering" },
  { value: "24/7", label: "DevOps & Support", desc: "Zero-downtime commitment" },
];

const capabilities = [
  {
    icon: Code2,
    title: "Full-Stack Web Engineering",
    description: "Modern, reactive web applications built with React 19, Vite, and cutting-edge frontend architectures for maximum performance.",
    gradient: "from-blue-500 to-indigo-600",
    badge: "High Performance"
  },
  {
    icon: Layers,
    title: "UI/UX & Design Systems",
    description: "Pixel-perfect interfaces crafted with meticulous attention to detail, motion design, and responsive design systems.",
    gradient: "from-purple-500 to-pink-600",
    badge: "Aesthetic & Accessible"
  },
  {
    icon: Cpu,
    title: "Cloud & Microservices",
    description: "Scalable backend infrastructures, serverless APIs, and secure database solutions designed to handle millions of requests.",
    gradient: "from-emerald-500 to-teal-600",
    badge: "99.99% Uptime"
  },
  {
    icon: Smartphone,
    title: "Mobile & Cross-Platform",
    description: "Native-feel progressive web applications and hybrid mobile solutions ensuring seamless experiences on any screen.",
    gradient: "from-amber-500 to-orange-600",
    badge: "Cross-Device"
  },
];

const featuredProjects = [
  {
    title: "Nova Financial Cloud",
    category: "Fintech Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    fallback: "/img1.jpg",
    tags: ["React", "Tailwind", "Analytics"],
    link: "/gallery"
  },
  {
    title: "Aura AI Workspace",
    category: "SaaS Platform",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    fallback: "/img2.jpg",
    tags: ["AI Tools", "Next.js", "Cloud"],
    link: "/gallery"
  },
  {
    title: "Verve Luxury E-Commerce",
    category: "Digital Commerce",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    fallback: "/img3.jpg",
    tags: ["Headless", "UI/UX", "Stripe"],
    link: "/gallery"
  }
];

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CTO at HyperScale Inc.",
    content: "Arooba Raza Tech transformed our outdated portal into an ultra-fast, responsive web app. Our user retention jumped by 42% within the first month.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    stars: 5
  },
  {
    name: "Elena Rostova",
    role: "Founder at DesignCraft",
    content: "The level of engineering rigor and design aesthetic delivered by this team is simply exceptional. They truly treat your project as their own.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    stars: 5
  },
  {
    name: "Marcus Vance",
    role: "VP of Product at Zenith Labs",
    content: "From kickoff to deployment, their communication and technical execution was flawless. Highly recommended for any serious web venture.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    stars: 5
  }
];

const Home = () => {
  return (
    <div className="w-full bg-[#090d16] text-white overflow-hidden">
      {/* 1. Hero Slider Section */}
      <Slider />

      {/* 2. Key Metrics Bar */}
      <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/60 border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className={`text-center ${i > 1 ? "pt-4 sm:pt-0" : ""}`}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Capabilities / Services Highlights */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Core Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Engineered For Scale, Built With Precision
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            We partner with forward-thinking teams to architect solutions that blend aesthetic refinement with robust, production-grade code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => {
            const IconComponent = cap.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 sm:p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${cap.gradient} flex items-center justify-center shadow-lg shadow-indigo-500/15 mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-400 block mb-2">
                    {cap.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5">
                  <Link
                    to="/service"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-indigo-400 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Featured Portfolio Showcase */}
      <section className="py-20 bg-slate-950/60 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Featured Creations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Handcrafted Digital Products
              </h2>
              <p className="text-slate-400 text-base mt-2 max-w-xl">
                A glimpse into our recent web applications, design systems, and client solutions.
              </p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-white/10 hover:border-indigo-500/50 hover:bg-slate-800 text-sm font-semibold text-white transition-all self-start md:self-auto shadow-md"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    onError={(e) => {
                      e.target.src = project.fallback;
                    }}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-indigo-400 font-medium mb-2">
                    <span>{project.category}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-slate-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Client Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Trusted by Innovators & Builders
          </h2>
          <p className="text-slate-400 text-base">
            Don't just take our word for it. Here is what leading founders and tech leads say about our studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between relative"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.stars)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-indigo-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. High-Converting Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-slate-900/80 border border-indigo-500/30 p-8 sm:p-14 lg:p-16 text-center space-y-6 shadow-2xl">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-yellow-300" />
            <span>LET'S COLLABORATE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
            Ready to Accelerate Your Digital Product?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            Whether you need a brand-new web application, a performance overhaul, or a dedicated frontend engineering partner, we are ready.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-400 hover:to-purple-500 shadow-xl shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Schedule a Free Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/service"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/10 transition-all"
            >
              <span>View Packages</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
