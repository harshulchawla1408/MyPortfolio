import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Plus } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Trend-Haven 🛍️",
      description: "A full-featured e-commerce platform with user and admin dashboards, product management, cart, and order tracking functionality.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
      github: "https://github.com/harshulchawla1408/TrendHaven",
      demo: "http://trendhaven-six.vercel.app"
    },
    {
      title: "Gasify ⛽",
      description: "A SaaS platform for gas booking with live tracking, comprehensive admin panel, and detailed analytics dashboard.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["React", "Node.js", "MongoDB", "TailwindCSS", "Firebase"],
      github: "https://github.com/harshulchawla1408/Gasify",
      demo: "https://gasify-gamma.vercel.app/"
    },
    {
      title: "Placement Cell Website 🎓",
      description: "A comprehensive platform for university placement cell to efficiently manage students, job opportunities, and recruiters.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
      github: "https://github.com/harshulchawla1408/UniSite",
      // demo: "#"
    },
    {
      title: "Raahein 🌍",
      description: "AI-powered travel recommendation website that suggests destinations based on budget, interests, and location preferences.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Next.js", "Express", "Gemini API", "MongoDB"],
      github: "https://github.com/harshulchawla1408/raahein",
      // demo: "#"
    },
    {
      title: "Jal Setu 🌊",
      description: "An Android app focused on life under water conservation and marine ecosystem awareness. Features educational content and interactive tools.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Flutter", "Dart", "Firebase", "Android"],
      github: "https://github.com/harshulchawla1408/JalSetu",
      // demo: "#"
    }
  ];

  const techColors: { [key: string]: string } = {
    "React": "bg-cyan-500/20 text-cyan-400",
    "Node.js": "bg-green-500/20 text-green-400",
    "Express": "bg-gray-500/20 text-gray-400",
    "MongoDB": "bg-emerald-500/20 text-emerald-400",
    "TailwindCSS": "bg-cyan-400/20 text-cyan-300",
    "MERN Stack": "bg-yellow-500/20 text-yellow-400",
    "Next.js": "bg-slate-600/20 text-slate-300",
    "Gemini API": "bg-purple-500/20 text-purple-400",
    "Flutter": "bg-blue-400/20 text-blue-300",
    "Dart": "bg-blue-500/20 text-blue-400",
    "Android": "bg-green-600/20 text-green-400"
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Alternating background overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#2a1746]/60 via-[#181c2b]/40 to-[#23234a]/60" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Blurred galaxy swirl/nebula behind header */}
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
            <span>Featured Projects</span>
            <span className="text-yellow-200 text-lg">★</span>
            <span className="text-blue-300 text-base">✦</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-rubik">
            A showcase of my recent work and the technologies I've used to build them
          </p>
        </motion.div>
        {/* Glassmorphism container for section content */}
        <div className="rounded-2xl border border-blue-400/20 bg-white/10 backdrop-blur-md shadow-xl p-6 md:p-10 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white font-sora">{project.title}</h3>
                    <div className="flex space-x-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm mb-4 font-rubik">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded text-xs ${techColors[tech] || "bg-slate-500/20 text-slate-400"}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg text-sm font-medium text-center transition-colors flex items-center justify-center gap-1"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium text-center transition-colors flex items-center justify-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Future Project Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: projects.length * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl overflow-hidden border border-slate-600 hover:border-blue-500/50 transition-all duration-300 group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />

              <div className="relative p-6 h-full flex flex-col justify-center items-center text-center">
                <motion.div
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4"
                >
                  <Plus className="w-8 h-8 text-blue-400" />
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-3 font-orbitron">More Projects Coming Soon</h3>
                <p className="text-slate-300 text-sm mb-6 font-rubik">
                  I'm always working on new and exciting projects. Stay tuned for more innovative solutions!
                </p>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/harshulchawla1408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View All Projects
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
