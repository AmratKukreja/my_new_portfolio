'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-muted">
            Feel free to reach out for collaboration opportunities, job inquiries, or just to connect.
            I&apos;m always open to discussing new projects and ideas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-8"
          >
            <h3 className="section-subtitle mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="contact-info-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-medium text-primary">Email</p>
                  <a href="mailto:amratkukreja@gmail.com" className="hover:opacity-80 transition-opacity text-muted">
                    amratkukreja@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <p className="font-medium text-primary">Phone</p>
                  <a href="tel:+923123205424" className="hover:opacity-80 transition-opacity text-muted">
                    +92 312 3205424
                  </a>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="font-medium text-primary">Location</p>
                  <p className="text-muted">
                    Jhooly Lal Apartment, Miani Road<br />
                    Sukkur, Sindh, Pakistan
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-4 text-primary">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/AmratKukreja" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://linkedin.com/in/amrat-kukreja" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-8"
          >
            <h3 className="section-subtitle mb-6">Send Me a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4A5568] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-[#E2E8F0] rounded focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4A5568] mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-[#E2E8F0] rounded focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#4A5568] mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-[#E2E8F0] rounded focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent"
                  placeholder="Job Opportunity"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4A5568] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-[#E2E8F0] rounded focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
