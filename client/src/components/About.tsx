import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, BookOpen, School, Award } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const timelineData = [
    {
      type: "experience",
      title: "Full Stack Web Development Intern",
      organization: "NxtQuick Startup",
      period: "2025 - Present",
      description: "Developing innovative web solutions with modern technologies. Working on scalable applications and contributing to startup growth.",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      icon: "💼",
      color: "blue"
    },
    {
      type: "education",
      title: "B.Tech Computer Science & Engineering",
      organization: "Punjabi University, Patiala",
      period: "2022 - 2026",
      description: "Currently pursuing engineering with focus on software development and computer science fundamentals.",
      grade: "CGPA: 8.5",
      icon: "🎓",
      color: "emerald"
    },
    {
      type: "training",
      title: "Full Stack Web Development Training",
      organization: "GTB Computer Institute",
      period: "Industrial Training",
      description: "Completed intensive full-stack development training with hands-on projects and industry best practices.",
      grade: "95% (A+)",
      icon: "📚",
      color: "purple"
    },
    {
      type: "education",
      title: "12th Grade (Non-Medical)",
      organization: "Jalandhar Public School",
      period: "CBSE - 2022",
      description: "Completed higher secondary education with focus on mathematics and science.",
      grade: "93.4%",
      icon: "🏫",
      color: "orange"
    },
    {
      type: "education",
      title: "10th Grade",
      organization: "DIPS Karol Bagh",
      period: "CBSE - 2020",
      description: "Completed secondary education with strong foundation in core subjects.",
      grade: "92.4%",
      icon: "📖",
      color: "green"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Alternating background overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#181c2b]/60 via-[#23234a]/40 to-[#2a1746]/60" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Blurred nebula/aurora behind header */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-96 h-32 opacity-60 blur-2xl pointer-events-none z-0" style={{background: "radial-gradient(ellipse at center, #a084ee88 0%, #23234a00 80%)"}} />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          {/* Section heading with galaxy gradient, shadow, and icons */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg inline-flex items-center gap-2 font-orbitron animate-shimmer">
            <span>Education & Experience</span>
            <span className="text-yellow-200 text-lg">★</span>
            <span className="text-blue-300 text-base">✦</span>
          </h2>
        </motion.div>
        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500"></div>
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-12`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-slate-800 border-4 border-blue-500 rounded-full flex items-center justify-center z-10">
                  <span className="text-xs">{item.icon}</span>
                </div>
                {/* Content */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-1/2`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                        item.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
                        item.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                        item.color === 'orange' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {item.type.toUpperCase()}
                      </span>
                      <span className="text-slate-400 text-sm">{item.period}</span>
                    </div>
                    <h4 className="font-semibold text-white mb-1 font-sora">{item.title}</h4>
                    <p className="text-blue-400 mb-2 font-sora">{item.organization}</p>
                    <p className="text-slate-300 text-sm mb-3 font-rubik">{item.description}</p>
                    {item.grade && (
                      <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">
                        {item.grade}
                      </span>
                    )}
                    {item.skills && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
