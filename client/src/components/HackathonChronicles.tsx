import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const hackathons = [
  {
    name: "HackWithInfy 2025 👨‍💻",
    role: "Solo Participant",
    date: "13 July 2025",
    summary: "Qualified HackWithInfy 2025 by Infosys for Specialist Programmer role, demonstrating strong problem-solving and coding skills",
    certificate: "/certificates/hackwithinfy.png"
  },
  {
    name: "Hack Summit 🥇",
    role: "Team Lead",
    date: "30 March 2025",
    summary: "Led Team KarmaKoders to Top 10 among 250+ teams by building 'JalSetu' – a Flutter-based solution promoting aquatic life sustainability",
    certificate: "/certificates/Hacksummit.png"
  },
  {
    name: "IEEE Summer of Code 2025 🌐",
    role: "Open Source Contributor",
    date: "9th May - 5th July 2025",
    summary: "Contributed to open-source under IEEE Summer of Code, enhancing collaborative development skills.",
    certificate: "/certificates/iee soc.png"
  },
  {
    name: "Mind Installers Hackathon 🧠",
    role: "Backend Dev",
    date: "1 May 2025",
    summary: "Contributed as Backend Developer in Team KarmaKoders to build an innovative tech solution during a 24-hour challenge",
    certificate: "/certificates/mih.png"
  },
  {
    name: "Build With India 👨‍💻",
    role: "Full Stack Developer",
    date: "14 March 2024",
    summary: "Built 'Mentra', an educational learning app, with a teammate — handling full-stack development under tight deadlines",
    certificate: "/certificates/BWI.png"
  },
  {
    name: "Cryptic Hunt 🔍",
    role: "Solo Participant",
    date: "25 April 2024",
    summary: "Cracked cryptographic puzzles in a high-speed competition testing logic, encryption, and decoding skills",
    certificate: "/certificates/cryptichunt.pdf"
  }
];

export default function HackathonChronicles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="hackathon-chronicles" className="py-20 relative overflow-x-hidden">
      {/* Alternating background overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#23234a]/60 via-[#2a1746]/40 to-[#181c2b]/60" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Blurred nebula/aurora behind header */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-96 h-32 opacity-60 blur-2xl pointer-events-none z-0" style={{background: "radial-gradient(ellipse at center, #a084ee88 0%, #23234a00 80%)"}} />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 relative"
        >
          {/* Section heading with galaxy gradient, shadow, and icons */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg inline-flex items-center gap-2 font-orbitron animate-shimmer">
            <span>Hackathon Chronicles</span>
            <span className="text-yellow-200 text-lg">★</span>
            <span className="text-blue-300 text-base">✦</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-rubik">
            A creative timeline of my journey through hackathons and competitions
          </p>
        </motion.div>
        {/* Timeline for desktop, stacked for mobile */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500/40 via-purple-500/30 to-transparent rounded-full -translate-x-1/2 z-0" />
          <div className="flex flex-col md:grid md:grid-cols-9 gap-y-10 md:gap-y-0">
            {hackathons.map((hack, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={hack.name}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className={`md:col-span-4 ${isLeft ? "md:col-start-1" : "md:col-start-6"} flex md:justify-${isLeft ? "end" : "start"} z-10 mb-10`}
                >
                  {/* Dot on the timeline (no emoji) */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-6 h-6 bg-blue-600 border-4 border-slate-900 rounded-full z-10 flex items-center justify-center shadow-lg" />
                  <div className="group bg-slate-800 border border-slate-700 hover:border-blue-500/70 shadow-lg rounded-xl p-6 w-full max-w-md transition-all duration-300 relative overflow-hidden mt-6">
                    <div className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-blue-600/30 to-purple-600/20 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{hack.name.split(' ').pop()}</span>
                      <span className="text-xs bg-blue-700/30 text-blue-300 px-2 py-1 rounded font-mono ml-auto">{hack.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white font-sora mb-1">{hack.name.replace(/\s([\uD800-\uDBFF][\uDC00-\uDFFF]|[\u2600-\u27BF])+$/, '')}</h3>
                    <div className="text-blue-400 font-medium text-sm mb-2 font-orbitron flex items-center gap-2">
                      <span>Role:</span> <span className="font-rubik">{hack.role}</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-4 font-rubik">{hack.summary}</p>
                    <motion.a
                      whileHover={{ scale: 1.07, boxShadow: "0 0 16px #60a5fa" }}
                      href={hack.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/60 group-hover:from-blue-500 group-hover:to-purple-500"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Certificate</span>
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 