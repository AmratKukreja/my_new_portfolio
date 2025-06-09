'use client';

import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 py-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Amrat Kukreja</h3>
            <p className="text-white opacity-80">
              Versatile Software Developer with expertise in Backend, Frontend, AI, 
              Deep Learning, and Neural Networks.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#experience" className="footer-link">Experience</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <p className="text-white opacity-80 mb-2">Sukkur, Pakistan</p>
            <p className="text-white opacity-80 mb-2">amratkukreja@gmail.com</p>
            <p className="text-white opacity-80">+92 312 3205424</p>
          </div>
        </div>
        
        <div className="border-t border-white/20 py-6 text-center">
          <p className="text-white opacity-80 flex items-center justify-center">
            © {currentYear} Amrat Kukreja. All rights reserved. Made with 
            <FaHeart className="text-[#F4A261] mx-1" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
