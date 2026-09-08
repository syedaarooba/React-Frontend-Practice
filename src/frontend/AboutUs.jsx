import React from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Target, 
  Eye, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Code2, 
  Shield, 
  Zap, 
  Users2,
  Cpu,
  Layers,
  Globe
} from "lucide-react";
import companyImg from "../assets/company.jpg";

const values = [
  {
    icon: Code2,
    title: "Engineering Rigor",
    desc: "We write clean, modular, and maintainable code adhering to modern web standards and strict type safety."
  },
  {
    icon: Layers,
    title: "Design Craftsmanship",
    desc: "Every border radius, font scale, and micro-interaction is intentionally crafted for maximum visual delight."
  },
  {
    icon: Zap,
    title: "Performance First",
    desc: "Speed is a core feature. We optimize bundles, assets, and render cycles to achieve 95+ Google Lighthouse scores."
  },
  {
    icon: Shield,
    title: "Security & Reliability",
    desc: "Enterprise-grade practices, resilient cloud architectures, and proactive testing to guarantee smooth uptime."
  }
];

const technologies = [
  { name: "React 19", category: "Frontend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Vite", category: "Build Tool" },
  { name: "TypeScript", category: "Language" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Next.js", category: "Full-Stack" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "Cloudflare", category: "Edge & CDN" },
];

const milestones = [
  {
    year: "2022",
    title: "Studio Founded",
    description: "Started with a clear mission: provide boutique web engineering and UI/UX design with uncompromising quality."
  },
  {
    year: "2023",
    title: "50+ Successful Deployments",
    description: "Scaled our client base across North America, Europe, and Asia for early-stage fintech, SaaS, and creative startups."
  },
  {
    year: "2024",
    title: "Design System Frameworks",
    description: "Pioneered proprietary modular UI kits and high-performance component architectures adopted across multiple enterprise teams."
  },
  {
    year: "2025+",
    title: "Next-Gen AI Integrations",
    description: "Infusing modern web applications with intelligent LLM features, real-time analytics, and automated edge pipelines."
  }
];

const AboutUs = () => {
  return (
    <div className="w-full bg-[#090d16] text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* 1. Header & Hero Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-semibold tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT AROOBA TECH</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Where Innovation Meets Exceptional Craft
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Arooba Raza Tech is a premier digital studio dedicated to engineering modern web applications, 
              bespoke design systems, and high-converting user interfaces. We bridge the gap between creative 
              vision and technical execution.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Founded by passionate engineers and designers, we have delivered over 150 successful projects 
              spanning SaaS dashboards, e-commerce ecosystems, and cloud applications. Our focus is simple: 
              build products that inspire, perform, and scale without friction.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/service"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-slate-300 bg-slate-900 border border-white/10 hover:border-white/20 transition-all hover:text-white"
              >
                <span>Explore Capabilities</span>
              </Link>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-card p-3 border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                onError={(e) => {
                  e.target.src = companyImg;
                }}
                alt="Arooba Tech Studio"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-60 rounded-2xl" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-sm">Arooba Raza Tech</h4>
                  <p className="text-slate-400 text-xs">Excellence in Digital Engineering</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Active & Hiring</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              To empower innovators, founders, and enterprises with modern digital tools, 
              robust frontend engineering, and timeless design that converts users and accelerates business velocity.
            </p>
          </div>

          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              To be recognized globally as the gold standard for high-performance web architecture, 
              where design aesthetic and engineering precision work in absolute harmony.
            </p>
          </div>
        </div>

        {/* 3. Core Values */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Values That Guide Every Line of Code
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Our principles shape our workflow, client relationships, and quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="glass-card p-6 rounded-2xl border border-white/10 space-y-3 hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white">{v.title}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Tech Stack */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10">
          <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Modern Tech Stack</h3>
            <p className="text-slate-400 text-sm">
              We employ best-of-breed technologies to guarantee lightning speed, security, and developer joy.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all flex items-center gap-2 group cursor-default"
              >
                <span className="w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-125 transition-transform" />
                <span className="text-sm font-semibold text-white">{tech.name}</span>
                <span className="text-[11px] text-slate-500 font-medium">({tech.category})</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Milestones & Growth Timeline */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Our Journey & Milestones
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A track record of continuous learning, architectural innovation, and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-white/10 relative space-y-3"
              >
                <div className="text-2xl font-black text-indigo-400">{m.year}</div>
                <h4 className="text-base font-bold text-white">{m.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
