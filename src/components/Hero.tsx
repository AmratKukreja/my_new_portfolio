'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background particles or pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#2A9D8F]/10 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#F4A261]/10 rounded-tr-full"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 text-secondary">Hello, I&apos;m</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
              Amrat Kukreja
            </h1>
            <h3 className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-muted">
              Versatile Software Developer
            </h3>
            <p className="mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0 text-muted text-sm sm:text-base leading-relaxed">
              Motivated Computer Science student with an entrepreneurial mindset,
              experienced in Backend and Frontend Development. Skilled in AI, Deep
              Learning, and Neural Networks, with hands-on experience integrating AI with
              web applications and working with standalone models.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary text-center">Contact Me</a>
            </div>
            
            <div className="flex mt-6 sm:mt-8 gap-4 sm:gap-6 justify-center md:justify-start">
              <a href="https://github.com/AmratKukreja" target="_blank" rel="noopener noreferrer" className="social-icon text-xl sm:text-2xl">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/amrat-kukreja" target="_blank" rel="noopener noreferrer" className="social-icon text-xl sm:text-2xl">
                <FaLinkedin />
              </a>
              <a href="mailto:amratkukreja@gmail.com" className="social-icon text-xl sm:text-2xl">
                <FaEnvelope />
              </a>
              <a href="tel:+923123205424" className="social-icon text-xl sm:text-2xl">
                <FaPhone />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#1A365D] to-[#2A9D8F] rounded-full mx-auto flex items-center justify-center">
              <div className="w-44 h-44 sm:w-60 sm:h-60 md:w-76 md:h-76 rounded-full flex items-center justify-center text-center p-3 sm:p-4 bg-card">
                <div>
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-1 sm:mb-2 text-primary font-bold">AK</div>
                  <div className="text-xs sm:text-sm text-muted">Full Stack Developer</div>
                  <div className="text-xs sm:text-sm text-muted">AI Enthusiast</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
