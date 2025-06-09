'use client';

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    title: "Software Engineer",
    company: "PrintKrr (Clot and Knot)",
    period: "April 2024 - June 2024",
    location: "Sukkur, Pakistan",
    description: "Managed the database and backend framework, including endpoints. Handled application-related data and provided backend support. Handled product management for Pakistan's customizable print-on-demand apparel platform.",
    address: "Incubator # 01, 2nd floor, Knowledge Centre, Sukkur IBA."
  },
  {
    title: "Web Developer Intern",
    company: "Prodigy InfoTech",
    period: "February 2024 - March 2024",
    location: "Mumbai, India",
    description: "Worked well with different teams to create websites. Used React.js and Node.js to build and improve web projects. Solved problems and learned new things during the remote internship.",
    address: "Gandhi Nagar, Upper Worli, Worli, Mumbai, Maharashtra 400018, India"
  },
  {
    title: "TechFest Lead",
    company: "Sukkur IBA University",
    period: "April 2023 - May 2023",
    location: "Sukkur, Pakistan",
    description: "Contributed to the flagship event promoting academic growth in the Computer Science Department. Facilitated collaboration with multiple universities, making TechFest a yearly highlight for students across Pakistan. Organized engaging tech competitions like speed programming and tech talks, fostering hands-on learning.",
    address: "Sukkur IBA University, 65200, Sukkur, Pakistan"
  },
  {
    title: "Event Team Contributor",
    company: "Pakistan Literature Festival 2023 Edition",
    period: "May 2023 - June 2023",
    location: "Sukkur, Pakistan",
    description: "Planned fun events like theater shows and talent displays to bring joy and creativity. Made sure everyone stayed safe during the events so they could have a good time without any concerns. Ensured smooth events for great experiences.",
    address: "Sukkur, Pakistan"
  },
  {
    title: "Freelancer",
    company: "Fiverr and Upwork",
    period: "April 2021 - Present",
    location: "Remote",
    description: "Expert in AI, Neural Networks, and Machine Learning, delivering custom models and deep learning solutions. Skilled in full-stack web development, building dynamic and scalable websites using modern technologies. Providing high-quality freelancing services in AI, automation, and web-based applications with optimized performance.",
    address: "Remote"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto">
            My professional journey includes roles in software engineering, web development, 
            event organization, and freelancing, showcasing my versatility and growth in the tech industry.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#E2E8F0] transform md:translate-x-[-0.5px]"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-[#2A9D8F] transform md:translate-x-[-8px] z-10"></div>
                
                {/* Date for mobile */}
                <div className="md:hidden flex items-center text-[#4A5568] mb-2 pl-6">
                  <FaCalendarAlt className="mr-2 text-[#2A9D8F]" />
                  <span>{exp.period}</span>
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-[calc(50%-20px)] ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="card p-6 h-full">
                    <h3 className="text-xl font-semibold text-[#1A365D]">{exp.title}</h3>
                    <h4 className="text-lg font-medium text-[#2A9D8F] mb-2">{exp.company}</h4>
                    
                    {/* Date for desktop */}
                    <div className="hidden md:flex items-center text-[#4A5568] mb-2">
                      <FaCalendarAlt className="mr-2 text-[#2A9D8F]" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <div className="flex items-center text-[#4A5568] mb-4">
                      <FaMapMarkerAlt className="mr-2 text-[#2A9D8F]" />
                      <span>{exp.location}</span>
                    </div>
                    
                    <p className="text-[#4A5568] mb-2">{exp.description}</p>
                    <p className="text-sm text-[#4A5568] italic">{exp.address}</p>
                  </div>
                </div>
                
                {/* Empty space for timeline alignment */}
                <div className="hidden md:block w-full md:w-[calc(50%-20px)]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
