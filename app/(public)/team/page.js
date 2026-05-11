"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowRight, 
  Globe, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Layout, 
  Code
} from "lucide-react";
import Link from "next/link";
import TeamMemberCard from "@/components/TeamMemberCard";
import TeamMemberModal from "@/components/TeamMemberModal";
import { RevealOnScroll, staggerContainer, fadeUp, fadeIn, scaleUp, fadeInLeft, fadeInRight } from "@/components/MotionUtilities";
import PageHero from '@/components/PageHero';

const teamMembers = [
  // Leadership
  {
    id: 1,
    name: "Chaitanya Veer",
    role: "CEO TechnoShastraX Group",
    department: "Leadership",
    image: "/team/chaitanya veer.jpeg",
    bio: "Dr. Aryan is a tech visionary with over 15 years of experience in enterprise architecture and digital transformation.",
    fullBio: "Dr. Aryan Sharma founded TechnoshastraX with a mission to bridge the technical gap for students and enterprises alike. With a PhD in Artificial Intelligence and a background in scaling Fortune 500 tech infra, he brings a unique blend of academic depth and industrial pragmatism. He has led over 50+ successful digital transformation projects globally.",
    linkedin: "https://www.linkedin.com/in/chaitanya-veer-a319a6226/",
    expertise: ["AI Strategy", "Enterprise Architecture", "Venture Building"],
    isLeadership: true,
  },
  {
    id: 2,
    name: "Sakshi Shinde",
    role: "CTO TechnoShastraX Consultancy",
    department: "Leadership",
    image: "/team/sakshi maaam.jpg",
    bio: "As a passionate MERN stack developer, I specialize in building dynamic web applications using React, Next.js, Node.js, HTML, JavaScript, and Bootstrap.",
    fullBio: "As a passionate MERN stack developer, I specialize in building dynamic web applications using React, Next.js, Node.js, HTML, JavaScript, and Bootstrap. With a strong foundation in full-stack development, I aim to create innovative solutions that enhance user experiences and drive business success.I’m always eager to learn and explore the latest web technologies to stay ahead in this fast-evolving industry.", 
    linkedin: "https://www.linkedin.com/in/sakshi-shinde-24470a26b/",
    expertise: ["React.js", "Next.js", "JavaScript"],
    isLeadership: true,
  },
  {
    id: 3,
    name: "Sanket Kumbhar",
    role: "TechnoShastraX Ai Technology",
    department: "Leadership",
    image: "/team/sanket.png",
    bio: "Marcus leads our engineering efforts, focusing on high-performance cloud solutions and cybersecurity.",
    fullBio: "Marcus Chen is the engineering heartbeat of TechnoshastraX. A former Lead Architect at a top cloud provider, he now guides our technical roadmap. He is a frequent speaker at global tech conferences and holds several patents in distributed systems.",
    linkedin: "https://www.linkedin.com/in/sanket-kumbhar-478bb6255/",
    expertise: ["Cloud Native", "Cybersecurity", "Blockchain"],
    isLeadership: true,
  },
  // Management
  {
    id: 4,
    name: "Neha Khetmar",
    role: "Head of Project Management",
    department: "Management",
    image: "/team/neha khetmar 2.jpg",
    bio: "Elena ensures all our client projects are delivered with precision and on schedule.",
    linkedin: "https://linkedin.com",
    expertise: ["Agile", "Resource Allocation", "Risk Management"],
  },
  {
    id: 5,
    name: "Ajinkya Ghorpade",
    role: "Customer Success Lead",
    department: "Management",
    image: "/team/Ajinkya Ghorpade.jpeg",
    bio: "David is dedicated to ensuring our partners achieve their long-term growth objectives.",
    linkedin: "https://linkedin.com",
    expertise: ["Relationship Management", "Strategy", "Retention"],
  },
  // Engineering
  {
    id: 6,
    name: "Shravani veer",
    role: " Full Stack Engineer",
    department: "Engineering",
    image: "/team/shravani veer.jpeg",
    bio: "Thomas specializes in building scalable Next.js applications and robust API integrations.",
    linkedin: "https://linkedin.com",
    expertise: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 7,
    name: "Vedant Mane",
    role: "Cloud Architect",
    department: "Engineering",
    image: "/team/vedant mane.jpeg",
    bio: "Priya designs secure and highly-available cloud infrastructures for our enterprise partners.",
    linkedin: "https://linkedin.com",
    expertise: ["AWS", "Kubernetes", "Terraform"],
  },
  {
    id: 8,
    name: "Sanjana Nikam ",
    role: "UI/UX Designer",
    department: "Engineering",
    image: "/team/sanjana nikam.jpeg",
    bio: "Kevin creates the premium visual languages and intuitive interfaces that define our tech.",
    linkedin: "https://linkedin.com",
    expertise: ["Figma", "Design Systems", "Motion Design"],
  },
  // Growth
  {
    id: 9,
    name: "Vedanti Kadam",
    role: "Marketing Director",
    department: "Growth",
    image: "/team/vedanti kadam .jpeg",
    bio: "Sonia drives our brand presence and community engagement through strategic growth initiatives.",
    linkedin: "https://linkedin.com",
    expertise: ["Content Strategy", "SEO", "Brand Identity"],
  },
  {
    id: 10,
    name: "Sayali Malusare",
    role: "Partnership Manager",
    department: "Growth",
    image: "/team/sayali malusare.jpeg",
    bio: "James bridges the gap between our tech offerings and new industry collaborators.",
    linkedin: "https://linkedin.com",
    expertise: ["Sales", "Negotiation", "Networking"],
  },
];

const departments = ["All", "Leadership", "Management", "Engineering", "Growth"];

export default function TeamPage() {
  const [activeDept, setActiveDept] = useState("All");
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredMembers, setFilteredMembers] = useState(teamMembers);

  useEffect(() => {
    if (activeDept === "All") {
      setFilteredMembers(teamMembers);
    } else {
      setFilteredMembers(teamMembers.filter(m => m.department === activeDept));
    }
  }, [activeDept]);

  const handleOpenModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col w-full relative">
      {/* Hero Section */}
      <PageHero 
        label="The Architects of Innovation"
        title="Meet the"
        highlight="Visionaries"
        description="Our community is a powerful collective of mentors, innovators, and ambitious professionals dedicated to empowering growth through knowledge sharing, career opportunities, job referrals, and transformative learning."
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
      />
      
      <div className="flex-1 w-full relative">

      {/* Leadership Section - Premium Arched Layout */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative -mt-32 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <RevealOnScroll variant={fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight">Meet Our Leadership</h2>
              <div className="w-20 h-1.5 bg-linear-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
            </RevealOnScroll>
          </div>

          <RevealOnScroll variant={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Director 1 */}
            <RevealOnScroll variant={fadeInLeft} className="order-2 lg:order-1">
              <LeadershipCard member={teamMembers[1]} onClick={handleOpenModal} />
            </RevealOnScroll>

            {/* CEO - Center Piece */}
            <RevealOnScroll variant={scaleUp} className="order-1 lg:order-2 flex justify-center">
              <div className="relative group">
                {/* Glow behind CEO */}
                <div className="absolute -inset-4 bg-linear-to-r from-blue-600 to-indigo-600 rounded-[3.5rem] blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-700" />
                <LeadershipCard 
                  member={teamMembers[0]} 
                  onClick={handleOpenModal}
                  isFeatured={true}
                />
              </div>
            </RevealOnScroll>

            {/* Director 2 */}
            <RevealOnScroll variant={fadeInRight} className="order-3 lg:order-3">
              <LeadershipCard member={teamMembers[2]} onClick={handleOpenModal} />
            </RevealOnScroll>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stats / Culture Strip */}
      <section className="py-20 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Active Members", value: "500+", icon: <Users /> },
              { label: "Job Referrals Shared", value: "1000+", icon: <Zap /> },
              { label: "Years Building Community", value: "2+", icon: <ShieldCheck /> },
              { label: "Career Courses", value: "25+", icon: <Code /> }
            ].map((stat, i) => (
              <RevealOnScroll key={i} variant={fadeUp} className="flex flex-col items-center group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-2">
                  {stat.icon}
                </div>
                <h4 className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">{stat.value}</h4>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">{stat.label}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Full Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <RevealOnScroll variant={fadeInLeft}>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">TechnoshastraX Team</h2>
              <p className="text-slate-500 font-medium">The brilliant minds behind our community initiatives.</p>
            </RevealOnScroll>

            {/* Department Tabs */}
            <RevealOnScroll variant={fadeInRight}>
              <div className="flex flex-wrap justify-center gap-3 p-1.5 bg-white rounded-3xl border border-slate-200 shadow-sm">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setActiveDept(dept)}
                    className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                      activeDept === dept 
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredMembers.map((member) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <TeamMemberCard member={member} onClick={handleOpenModal} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      </div>

      {/* Member Modal */}
      <TeamMemberModal 
        member={selectedMember} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

function LeadershipCard({ member, onClick, isFeatured = false }) {
  return (
    <motion.div
      whileHover={{ y: -15 }}
      onClick={() => onClick(member)}
      className={`relative cursor-pointer group ${isFeatured ? 'scale-100 sm:scale-110 z-10' : 'scale-100'}`}
    >
      <div className={`overflow-hidden bg-white shadow-2xl rounded-t-[5rem] rounded-b-[2rem] border border-slate-100 transition-all duration-500 ${isFeatured ? 'shadow-blue-600/10 p-2' : ''}`}>
        {/* Photo Container with Top Arch */}
        <div className={`relative overflow-hidden pointer-events-none rounded-t-[4.5rem] rounded-b-[1.5rem] ${isFeatured ? 'h-110' : 'h-96'}`}>
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Content Over Photo */}
          <div className="absolute bottom-10 left-0 right-0 px-8 text-center">
            <h3 className={`font-black text-white mb-1 tracking-tight ${isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
              {member.name}
            </h3>
            <p className="text-blue-400 font-bold uppercase text-xs tracking-widest">
              {member.role}
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Icons */}
      <div className="absolute -bottom-4 right-10 w-20 h-20 bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <Linkedin className="h-8 w-8" />
      </div>
    </motion.div>
  );
}
