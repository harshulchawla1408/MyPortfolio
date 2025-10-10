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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-900/60 via-purple-900/50 to-black/70"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8">
        {/* Profile Image */}
        <div className="mb-8 md:mb-0 md:mr-8 flex-shrink-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full flex items-center justify-center border-4 border-blue-500/40 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 animate-pulse-slow group">
            {/* Glowing ring effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-blue-400/20 blur-xl scale-110 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-border animate-spin-slow opacity-60"></div>
            
            {/* Inner shadow for depth */}
            <div className="absolute inset-2 rounded-full shadow-inner bg-gradient-to-br from-white/10 to-transparent"></div>
            
            <img
              src="/myimage.jpg"
              alt="Harshul Chawla"
              className="relative w-full h-full object-cover rounded-full z-10 hover:brightness-110 transition-all duration-500"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const fallback = target.parentElement?.querySelector(
                  ".fallback"
                ) as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div
              className="fallback w-full h-full rounded-full bg-slate-700 flex items-center justify-center z-10"
              style={{ display: "none" }}
            >
              <span className="text-5xl font-bold text-slate-300">HC</span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">
            Hi, I'm<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Harshul Chawla
            </span>
          </h1>

          <div className="text-lg md:text-xl text-slate-400 mb-4 h-10 flex items-center justify-center min-h-[2.5rem]">
            <TypewriterText texts={typewriterTexts} />
          </div>

          <p className="text-base text-slate-400 mb-6 max-w-xl mx-auto">
            Passionate about creating exceptional digital experiences with modern web technologies. Currently pursuing B.Tech CSE while building innovative solutions and solving complex problems.
          </p>

          {/* View Resume Button */}
          <div className="mb-6">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-md"
            >
              View Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/harshulchawla1408"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              <FaGithub className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/harshul-chawla-3b69b02b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
            <a
              href="https://leetcode.com/u/harshul_chawla_1408/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-yellow-400 transition-colors duration-200"
            >
              <SiLeetcode className="w-7 h-7" />
            </a>
            <a
              href="mailto:harshulchawla1408@gmail.com"
              className="text-slate-400 hover:text-red-400 transition-colors duration-200"
            >
              <FaEnvelope className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
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
