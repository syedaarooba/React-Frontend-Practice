import React, { useState } from "react";
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  MessageSquare,
  ShieldCheck
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Application Engineering",
    budget: "$5k - $15k",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        service: "Web Application Engineering",
        budget: "$5k - $15k",
        message: ""
      });
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@aroobatech.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="w-full bg-[#090d16] text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-semibold tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Let's Engineer Your Next Big Milestone
          </h1>

          <p className="text-base sm:text-lg text-slate-400">
            Have a project in mind, need an architectural consultation, or want to discuss a new product? 
            Drop us a line and we'll reply within 24 hours.
          </p>
        </div>

        {/* Main Grid: Form + Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Map Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-2xl font-bold text-white">Direct Channels</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Prefer to email or speak with an engineering lead directly? Reach out through our primary contact points below.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Box */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Email Inquiries</p>
                      <p className="text-sm font-semibold text-white">contact@aroobatech.com</p>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-indigo-600/30 text-slate-300 hover:text-white transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Direct Line</p>
                    <p className="text-sm font-semibold text-white">+1 (555) 382-9011</p>
                  </div>
                </div>

                {/* Location Box */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Headquarters</p>
                    <p className="text-sm font-semibold text-white">San Francisco, CA & Global Remote</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-pink-600/20 border border-pink-500/30 flex items-center justify-center text-pink-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Working Hours</p>
                    <p className="text-sm font-semibold text-white">Mon – Fri: 9:00 AM – 6:00 PM (EST)</p>
                  </div>
                </div>
              </div>

              {/* SLA Guarantee */}
              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center gap-3 text-xs text-indigo-300">
                <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>Non-Disclosure Agreements (NDA) signed upon request prior to discussion.</span>
              </div>
            </div>

            {/* Stylized Map Card */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 overflow-hidden relative">
              <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>Our Digital Presence</span>
              </h4>
              <div className="h-44 rounded-2xl bg-slate-950 border border-white/5 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="relative text-center p-4">
                  <span className="inline-block w-3 h-3 rounded-full bg-indigo-500 animate-ping mb-2" />
                  <p className="text-sm font-bold text-white">San Francisco Hub</p>
                  <p className="text-xs text-slate-400">Serving clients across 14 time zones</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative">
              
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Message Received!</h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                    Thank you for contacting Arooba Raza Tech. One of our technical directors will review your project details and reach out within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-sm font-semibold text-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Project Inquiry Form</h3>
                    <p className="text-sm text-slate-400">
                      Fill out the fields below so we can prepare tailored insights for our first call.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 bg-slate-900/90 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@company.com"
                        className="w-full px-4 py-3 bg-slate-900/90 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Service Needed */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Required Capability
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900/90 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      >
                        <option value="Web Application Engineering">Web Application Engineering</option>
                        <option value="UI/UX & Design Systems">UI/UX & Design Systems</option>
                        <option value="Cloud Architecture & APIs">Cloud Architecture & APIs</option>
                        <option value="Mobile & Progressive Web App">Mobile & Progressive Web App</option>
                        <option value="Intelligent AI Workflows">Intelligent AI Workflows</option>
                        <option value="Custom Project / Retainer">Custom Project / Retainer</option>
                      </select>
                    </div>

                    {/* Project Budget */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900/90 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      >
                        <option value="Under $5k">Under $5,000</option>
                        <option value="$5k - $15k">$5,000 – $15,000</option>
                        <option value="$15k - $30k">$15,000 – $30,000</option>
                        <option value="$30k+">$30,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Brief */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Project Brief & Goals *
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about what you want to build, current timeline, and any key requirements..."
                      className="w-full px-4 py-3 bg-slate-900/90 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Transmission...</span>
                      </div>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactUs;
