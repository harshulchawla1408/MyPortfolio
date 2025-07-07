import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, Linkedin, Github } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "harshulchawla1408@gmail.com",
      href: "mailto:harshulchawla1408@gmail.com",
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7814272742",
      href: "tel:+917814272742",
      color: "bg-green-500/20 text-green-400"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/harshul-chawla-3b69b02b6/",
      href: "https://www.linkedin.com/in/harshul-chawla-3b69b02b6/",
      color: "bg-blue-600/20 text-blue-500"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/harshulchawla1408",
      href: "https://github.com/harshulchawla1408",
      color: "bg-gray-600/20 text-gray-400"
    },
    {
      icon: SiLeetcode,
      title: "LeetCode",
      value: "leetcode.com/harshul_chawla_1408/",
      href: "https://leetcode.com/u/harshul_chawla_1408/",
      color: "bg-yellow-500/20 text-yellow-400",
      isReactIcon: true
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Alternating background overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#2a1746]/60 via-[#181c2b]/40 to-[#23234a]/60" />
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
            <span>Contact</span>
            <span className="text-yellow-200 text-lg">★</span>
            <span className="text-blue-300 text-base">✦</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-rubik">
            Let's connect! Send me a message and I'll get back to you soon.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800 rounded-xl p-8 border border-slate-700"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 font-sora">Send me a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2 font-sora">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2 font-sora">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2 font-sora">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-500 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 font-orbitron">Contact Information</h3>
              <p className="text-slate-400 mb-8 font-rubik">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center space-x-4 p-4 bg-slate-700 rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${contact.color}`}>
                    {contact.isReactIcon ? (
                      <contact.icon className="text-xl" />
                    ) : (
                      <contact.icon className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white font-sora">{contact.title}</h4>
                    <p className="text-slate-400 group-hover:text-white transition-colors font-rubik">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
