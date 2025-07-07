import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useState, useEffect } from "react";

const typewriterTexts = [
  "Full Stack Web Developer",
  "Engineering Student",
  "DSA Enthusiast",
  "Problem Solver",
];

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % typewriterTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/50 to-black/70" />

      {/* Animated background particles */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-12">
        {/* Profile Image with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-0 md:mr-8 flex-shrink-0"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              y: [0, -10, 0],
              boxShadow: [
                "0 0 60px 20px #3b82f6, 0 0 0 0 #0000",
                "0 0 80px 40px #6366f1, 0 0 0 0 #0000",
                "0 0 60px 20px #3b82f6, 0 0 0 0 #0000"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-80 h-80 md:w-[26rem] md:h-[26rem] mx-auto rounded-full flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl animate-pulse z-0" />
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden z-10 border-4 border-blue-500/40 shadow-2xl">
              <img
                src="/myimage.jpg"
                alt="Harshul Chawla"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const fallback = target.parentElement?.querySelector(
                    ".fallback"
                  ) as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div
                className="fallback w-full h-full rounded-full bg-slate-700 flex items-center justify-center"
                style={{ display: "none" }}
              >
                <span className="text-5xl font-bold text-slate-300">HC</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-white font-brunoace tracking-tight drop-shadow-lg animate-fade-in"
          >
            Hi, I'm{" "}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-brunoace">
              Harshul Chawla
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-400 mb-6 font-sora h-10 flex items-center justify-center min-h-[2.5rem]"
          >
            <TypewriterText texts={typewriterTexts} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto font-rubik"
          >
            Passionate about creating exceptional digital experiences with modern
            web technologies. Currently pursuing B.Tech CSE while building
            innovative solutions and solving complex problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Resume.pdf"
              download="Harshul_Chawla_Resume.pdf"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              href="https://github.com/harshulchawla1408"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-all duration-300"
            >
              <FaGithub className="w-8 h-8" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              href="https://www.linkedin.com/in/harshul-chawla-3b69b02b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-all duration-300"
            >
              <FaLinkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              href="https://leetcode.com/u/harshul_chawla_1408/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-yellow-400 transition-all duration-300"
            >
              <SiLeetcode className="w-8 h-8" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              href="mailto:harshulchawla1408@gmail.com"
              className="text-slate-400 hover:text-red-400 transition-all duration-300"
            >
              <FaEnvelope className="w-8 h-8" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-slate-400 w-6 h-6" />
      </motion.div>
    </section>
  );
}

function TypewriterText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!deleting && charIndex < texts[index].length) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 60);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 30);
    } else if (!deleting && charIndex === texts[index].length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, texts]);

  useEffect(() => {
    setDisplayed("");
    setCharIndex(0);
    setDeleting(false);
  }, [index, texts]);

  return (
    <span className="font-sora text-blue-400">
      {displayed}
      <span className="border-r-2 border-blue-400 animate-pulse ml-1" />
    </span>
  );
}
