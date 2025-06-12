'use client';

import { motion } from 'framer-motion';

const recommendations = [
  {
    text: "I had the pleasure of mentoring Mr. Amrat during his undergraduate studies at Sukkur IBA University. He is a dedicated and promising student with strong analytical skills, problem-solving abilities, and a deep interest in emerging technologies. He excelled in grasping complex computer science concepts, actively participated in research and hackathons, and demonstrated leadership and innovation. I strongly recommend him for any opportunity.",
    author: "Prof. Dr. Javed Ahmed Shahani",
    position: "Professor",
    contact: "javed@iba-suk.edu.pk",
    link: "https://drive.google.com/file/d/1wej-TXXJNOpnqAiY3HsDynO8V9Tj-Pta/view?usp=sharing"
  },
  {
    text: "I highly recommend Mr. Amrat, a talented Computer Science graduate from Sukkur IBA University. As my student in Deep Learning and Information Security, he demonstrated exceptional technical skills, problem-solving abilities, and innovation. He excelled in AI, cybersecurity, and hackathons, and developed an AI-powered shopping assistant for his final-year project. His intelligence, leadership, and passion for learning make him an outstanding candidate for any academic or professional opportunity.",
    author: "Dr. Zakria",
    position: "Assistant Professor / NCEAC Accreditation Coordinator",
    contact: "Zakria@IBA-Suk.edu.pk",
    link: "https://drive.google.com/file/d/1nxThjF9S96oOEOOHF6Kco_wWADP6-vHq/view?usp=sharing"
  }
];

export default function Recommendations() {
  return (
    <section id="recommendations" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Recommendations</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional endorsements from professors and mentors who have witnessed my academic journey,
            technical abilities, and professional growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {recommendations.map((recommendation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="recommendation-card"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 text-4xl text-[#2A9D8F] opacity-20">&ldquo;</div>
                <p className="recommendation-text flex-grow">{recommendation.text}</p>
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <p className="recommendation-author">{recommendation.author}</p>
                  <p className="recommendation-position">{recommendation.position}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{recommendation.contact}</p>
                  {recommendation.link && (
                    <a 
                      href={recommendation.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm text-[#2A9D8F] hover:underline"
                    >
                      View Full Recommendation
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
