import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  Zap, 
  ShieldCheck, 
  Code, 
  Layers, 
  Database,
  Bot
} from "lucide-react";

const plans = [
  {
    name: "Starter Launchpad",
    badge: "MVP & Startups",
    monthlyPrice: 999,
    annualPrice: 799,
    description: "Ideal for early-stage ventures and startups looking to ship an impressive web presence or MVP rapidly.",
    popular: false,
    features: [
      "Custom Responsive React 19 Frontend",
      "Tailwind CSS Modern Design System",
      "Performance & SEO Optimization (95+)",
      "Interactive Contact Form & Lead Capture",
      "Vite & CI/CD Deployment Setup",
      "2 Weeks Dedicated Post-Launch Support",
      "Full Source Code Handover"
    ]
  },
  {
    name: "Growth Accelerator",
    badge: "Most Popular",
    monthlyPrice: 2499,
    annualPrice: 1999,
    description: "Comprehensive full-stack engineering for scaling SaaS products, digital commerce, and web platforms.",
    popular: true,
    features: [
      "Everything in Starter Launchpad",
      "Complete Full-Stack Web Architecture",
      "User Authentication & Role Management",
      "Database & REST/GraphQL API Integration",
      "Payment Processing (Stripe / PayPal)",
      "Framer Motion Micro-Interactions",
      "Dedicated Slack Channel & Weekly Demos",
      "99.9% Uptime Architecture Guarantee"
    ]
  },
  {
    name: "Enterprise Studio",
    badge: "Large Scale & Custom",
    monthlyPrice: 4999,
    annualPrice: 3999,
    description: "Tailored for high-growth enterprises requiring dedicated engineering teams and resilient cloud scale.",
    popular: false,
    features: [
      "Everything in Growth Accelerator",
      "Custom Microservices & Edge Infrastructure",
      "Enterprise Security & Penetration Testing",
      "Intelligent AI / LLM Feature Integration",
      "Automated Testing Suites (Unit & E2E)",
      "1-Hour SLA Emergency Response",
      "Dedicated Senior Software Architect",
      "Custom Contract & NDA Guarantee"
    ]
  }
];

const faqs = [
  {
    q: "How fast can we kick off a new project?",
    a: "Once we finalize your requirements and agreement, our sprint kickoff starts within 48 to 72 hours. You'll receive a private Slack channel and dedicated project board."
  },
  {
    q: "Do I own 100% of the code and intellectual property?",
    a: "Absolutely. Once the project is delivered, you hold complete ownership of all repository code, designs, assets, and documentation."
  },
  {
    q: "Can we customize or combine services from different tiers?",
    a: "Yes! Every client has unique requirements. Reach out via our Contact form, and we will craft a bespoke scope and milestone breakdown specifically for you."
  },
  {
    q: "Do you offer post-launch maintenance and updates?",
    a: "Yes, we offer ongoing retainer arrangements covering security patches, feature expansions, and 24/7 uptime monitoring."
  }
];

const Services = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full bg-[#090d16] text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Header & Description */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-semibold tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRICING & PACKAGES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Transparent Plans, Uncompromised Quality
          </h1>

          <p className="text-base sm:text-lg text-slate-400">
            Choose the service plan that matches your product ambition. Every tier includes clean, documented, and production-tested code.
          </p>

          {/* Billing Switch */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? "text-white" : "text-slate-400"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-slate-800 rounded-full p-1 border border-white/10 relative transition-colors focus:outline-none"
              aria-label="Toggle Annual Billing"
            >
              <div
                className={`w-6 h-6 rounded-full bg-indigo-500 shadow-md transition-transform duration-200 ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${isAnnual ? "text-white" : "text-slate-400"}`}>
                Annually
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={index}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-slate-900/90 border-2 border-indigo-500/80 shadow-2xl shadow-indigo-500/20 lg:-translate-y-3"
                    : "glass-card border border-white/10 hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-medium">
                      {plan.badge}
                    </span>
                  </div>

                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      ${price}
                    </span>
                    <span className="text-slate-400 text-sm font-medium">/ month</span>
                  </div>

                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                      What's Included:
                    </p>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-sm text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    to="/contact"
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-center text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 hover:scale-[1.02]"
                        : "bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-white border border-white/10"
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Capabilities Breakdown */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Full-Spectrum Engineering</h3>
            <p className="text-slate-400 text-sm">
              We cover every phase of modern software production.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3">
              <Code className="w-8 h-8 text-indigo-400" />
              <h4 className="font-bold text-white text-base">Frontend Craft</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                React 19, Vite, Next.js, and Tailwind CSS for snappy, reactive interfaces.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3">
              <Layers className="w-8 h-8 text-purple-400" />
              <h4 className="font-bold text-white text-base">Design Systems</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Modular component libraries with high accessibility and coherent aesthetics.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3">
              <Database className="w-8 h-8 text-emerald-400" />
              <h4 className="font-bold text-white text-base">Backend & Cloud</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Serverless endpoints, secure databases, authentication, and Docker workflows.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3">
              <Bot className="w-8 h-8 text-pink-400" />
              <h4 className="font-bold text-white text-base">AI Workflows</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Seamless integration of OpenAI, Gemini, and intelligent document pipelines.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h3>
            <p className="text-slate-400 text-sm">
              Answers to questions clients often ask about our services and process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-white text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-indigo-400 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
