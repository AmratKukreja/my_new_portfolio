'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaReact, FaBrain, FaDatabase, FaDocker } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiJavascript, SiTypescript, SiNextdotjs, SiGraphql } from 'react-icons/si';

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript/TypeScript", icon: <SiJavascript />, level: 90 },
      { name: "Java/DSA", icon: <FaCode />, level: 85 },
      { name: "C/C++", icon: <FaCode />, level: 80 },
      { name: "Python", icon: <FaCode />, level: 85 }
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "React.js", icon: <FaReact />, level: 90 },
      { name: "Node.js", icon: <FaServer />, level: 85 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 80 },
      { name: "MERN Stack", icon: <FaCode />, level: 85 }
    ]
  },
  {
    category: "Artificial Intelligence",
    items: [
      { name: "Deep Learning (TensorFlow)", icon: <SiTensorflow />, level: 85 },
      { name: "Deep Learning (PyTorch)", icon: <SiPytorch />, level: 80 },
      { name: "Machine Learning", icon: <FaBrain />, level: 85 },
      { name: "Neural Networks", icon: <FaBrain />, level: 80 }
    ]
  },
  {
    category: "Other Technologies",
    items: [
      { name: "Databases (SQL/NoSQL)", icon: <FaDatabase />, level: 85 },
      { name: "GraphQL", icon: <SiGraphql />, level: 75 },
      { name: "Git/GitHub", icon: <FaCode />, level: 90 },
      { name: "Docker", icon: <FaDocker />, level: 75 }
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various domains,
            including programming languages, web development, artificial intelligence, and other technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={itemVariants}
              className="card p-6"
            >
              <h3 className="section-subtitle">{skillGroup.category}</h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[#2A9D8F]">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-[#4A5568]">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
