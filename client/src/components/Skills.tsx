import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiFirebase, 
  SiGit,
  SiNextdotjs,
  SiMysql,
  SiGithub,
  SiPostman,
  SiFlutter,
  SiDart,
  SiCplusplus,
  SiVercel,
} from "react-icons/si";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = {
    frontend: [
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: SiCss3, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "React JS", icon: SiReact, color: "text-cyan-500" },
      { name: "Next JS", icon: SiNextdotjs, color: "text-gray-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    ],
    backend: [
      { name: "Node JS", icon: SiNodedotjs, color: "text-green-600" },
      { name: "Express JS", icon: SiExpress, color: "text-gray-400" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
    ],
    languages: [
      { name: "C", icon: SiCplusplus, color: "text-blue-600" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-700" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
      { name: "Dart", icon: SiDart, color: "text-blue-500" },
    ],
    tools: [
      { name: "Git", icon: SiGit, color: "text-red-500" },
      { name: "GitHub", icon: SiGithub, color: "text-gray-400" },
      { name: "Postman", icon: SiPostman, color: "text-orange-600" },
      { name: "Vercel", icon: SiVercel, color: "text-gray-400" },
    ]
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg inline-flex items-center gap-2 font-orbitron animate-shimmer">
            <span>Skills and Technologies</span>
            <span className="text-yellow-200 text-lg">★</span>
            <span className="text-blue-300 text-base">✦</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-rubik">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {Object.entries(skillCategories).map(([category, skillsArray], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-slate-900/80 rounded-2xl p-8 border-2 border-violet-500/40 shadow-xl backdrop-blur-md flex flex-col items-center"
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-8 text-center capitalize tracking-wide drop-shadow-lg font-sora">
                {category}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {skillsArray.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.15 + index * 0.06, type: 'spring', stiffness: 120 }}
                    whileHover={{ scale: 1.08, boxShadow: "0 0 16px #a5b4fc" }}
                    className="flex items-center gap-2 px-5 py-2 rounded-full border border-violet-400/40 bg-slate-800/80 text-slate-100 font-medium shadow-md hover:border-violet-300/80 hover:bg-slate-700/80 transition-all duration-300 cursor-pointer"
                  >
                    <skill.icon className={`text-2xl ${skill.color} drop-shadow-md`} />
                    <span className="text-base font-semibold tracking-wide font-sora">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}