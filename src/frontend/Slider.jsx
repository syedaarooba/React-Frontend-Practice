import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    fallback: "/img1.jpg",
    badge: "✦ NEXT-GEN WEB ARCHITECTURE",
    title: "Engineering High-Impact Digital Realities",
    description: "We architect lightning-fast web applications, intuitive user interfaces, and enterprise cloud solutions tailored for modern innovators.",
    primaryCta: { text: "Explore Services", link: "/service" },
    secondaryCta: { text: "View Portfolio", link: "/gallery" },
    highlight: "150+ Projects Shipped"
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    fallback: "/img2.jpg",
    badge: "✦ DESIGN SYSTEMS & UI/UX CRAFT",
    title: "Transforming Ideas into Intuitive Experiences",
    description: "Merging human-centered design with clean scalable code to build digital products that users genuinely love and remember.",
    primaryCta: { text: "Start Your Project", link: "/contact" },
    secondaryCta: { text: "Meet Our Team", link: "/team" },
    highlight: "99.4% Client Satisfaction"
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    fallback: "/img3.jpg",
    badge: "✦ SCALABLE CLOUD & SECURITY",
    title: "Engineered for Velocity, Precision & Scale",
    description: "Empowering fast-growing startups and enterprises with modern tech stacks, resilient infrastructure, and 24/7 reliability.",
    primaryCta: { text: "Schedule a Consultation", link: "/contact" },
    secondaryCta: { text: "About Our Studio", link: "/about" },
    highlight: "Enterprise Ready SLA"
  }
];

const Slider = () => {
  return (
    <div className="relative w-full h-[85vh] sm:h-[90vh] md:h-[92vh] overflow-hidden bg-[#090d16]">
      <Swiper
        modules={[Pagination, Autoplay, Navigation, EffectFade]}
        effect="fade"
        speed={1000}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            {/* Background Image with Dark Vignette and Gradient Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={slide.image}
                onError={(e) => {
                  e.target.src = slide.fallback;
                }}
                className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-linear"
                alt={slide.title}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#090d16] via-[#090d16]/80 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-[#090d16]/50 z-10" />
            </div>

            {/* Slide Content */}
            <div className="relative z-20 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 sm:px-10 lg:px-12">
              <div className="max-w-2xl text-left space-y-6">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-semibold tracking-wider backdrop-blur-md"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{slide.badge}</span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
                >
                  {slide.title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl"
                >
                  {slide.description}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4 pt-2"
                >
                  <Link
                    to={slide.primaryCta.link}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <span>{slide.primaryCta.text}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to={slide.secondaryCta.link}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-200 hover:text-white"
                  >
                    <span>{slide.secondaryCta.text}</span>
                  </Link>
                </motion.div>

                {/* Mini trust pill */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="pt-2 flex items-center gap-2 text-xs text-slate-400 font-medium"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{slide.highlight}</span>
                  <span className="text-slate-600">•</span>
                  <span>Verified Top-Tier Performance</span>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
