import React from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Linkedin, 
  Github, 
  Twitter, 
  Mail, 
  ArrowRight,
  Code2,
  Briefcase
} from "lucide-react";

import elonImg from "../assets/Elon.jpg";
import vceoImg from "../assets/VCEO.jpg";
import directorImg from "../assets/Director.jpg";

const teamMembers = [
  {
    name: "Arooba Raza",
    role: "Founder & Principal Architect",
    specialty: "Frontend Engineering & Systems",
    bio: "Visionary engineer with a passion for high-performance web applications, modern React ecosystems, and enterprise design systems.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    fallback: vceoImg,
    skills: ["React 19", "System Architecture", "Tailwind CSS", "Vite"],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Sarah Johnson",
    role: "VP of Engineering & Product",
    specialty: "Product Management & Full-Stack",
    bio: "Leads engineering delivery, agile sprints, and architectural scalability across client web applications.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    fallback: vceoImg,
    skills: ["Next.js", "Sprint Leadership", "GraphQL", "Cloud"],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "David Williams",
    role: "Head of UI/UX & Design Systems",
    specialty: "Human-Centered Design & Motion",
    bio: "Passionate about creating intuitive user flows, fluid micro-interactions, and accessible typography systems.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    fallback: directorImg,
    skills: ["Figma", "Design Systems", "Framer Motion", "Accessibility"],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Alexander Vance",
    role: "Senior Cloud & DevOps Architect",
    specialty: "Infrastructure & Security",
    bio: "Specializes in Kubernetes, automated CI/CD pipelines, Docker containerization, and edge CDN deployments.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    fallback: elonImg,
    skills: ["Docker", "Kubernetes", "AWS", "Security"],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Elena Rostova",
    role: "Lead Full-Stack Developer",
    specialty: "API Engineering & Databases",
    bio: "Expert in building low-latency microservices, relational databases, and enterprise payment integrations.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    fallback: vceoImg,
    skills: ["Node.js", "PostgreSQL", "REST APIs", "TypeScript"],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Tariq Malik",
    role: "AI Integration Engineer",
    specialty: "LLM Workflows & Machine Learning",
    bio: "Focuses on incorporating generative AI agents, vector embeddings, and automated intelligence into client apps.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    fallback: directorImg,
    skills: ["LangChain", "Gemini API", "Python", "Vector DBs"],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    }
  }
];

const Team = () => {
  return (
    <div className="w-full bg-[#090d16] text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-semibold tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR SQUAD & MINDS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Meet the Builders Behind Arooba Tech
          </h1>

          <p className="text-base sm:text-lg text-slate-400">
            A multidisciplinary collective of engineers, system architects, and UX specialists passionate about shipping excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/15 flex flex-col justify-between group"
            >
              {/* Member Image with sleek hover treatment */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={member.image}
                  onError={(e) => {
                    e.target.src = member.fallback;
                  }}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/30 to-transparent opacity-90" />
                
                {/* Floating Role Pill */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-600/90 backdrop-blur-md text-white text-xs font-semibold shadow-md">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                    {member.specialty}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-slate-300 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social links */}
                  <div className="flex items-center gap-2 pt-1">
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-colors"
                      aria-label="Twitter Profile"
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team Callout */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              <span>Careers at Arooba Tech</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Want to Build the Future of the Web With Us?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              We are constantly scouting for talented frontend artisans, full-stack builders, and creative UI/UX minds.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 flex items-center gap-2"
          >
            <span>Apply to Join</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Team;
