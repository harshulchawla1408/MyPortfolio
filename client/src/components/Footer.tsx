import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/harshulchawla1408",
      color: "hover:text-white"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/harshul-chawla-3b69b02b6/",
      color: "hover:text-blue-400"
    },
    {
      icon: SiLeetcode,
      href: "https://leetcode.com/u/harshul_chawla_1408/",
      color: "hover:text-yellow-400"
    },
    {
      icon: FaEnvelope,
      href: "mailto:harshulchawla1408@gmail.com",
      color: "hover:text-red-400"
    }
  ];

  return (
    <footer className="bg-slate-900/60 backdrop-blur-lg border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <div className="text-3xl font-hanuman font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-move transition-all duration-500 mb-4 md:mb-0" style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
              Harshul Chawla
            </div>
            <p className="text-slate-400">Full Stack Developer & Engineering Student</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, y: -3 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-400 ${social.color} transition-all duration-300`}
              >
                <social.icon className="w-8 h-8" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-slate-700 mt-8 pt-8 text-center"
        >
          <p className="text-slate-500 text-sm">
            © 2025 Harshul Chawla. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
