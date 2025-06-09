'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';

// Dynamically import all components that use framer-motion to avoid hydration issues
const ProgressBar = dynamic(() => import('../components/ProgressBar'), {
  ssr: false
});

const Navbar = dynamic(() => import('../components/Navbar'), {
  ssr: false
});

const Hero = dynamic(() => import('../components/Hero'), {
  ssr: false
});

const Skills = dynamic(() => import('../components/Skills'), {
  ssr: false
});

const Experience = dynamic(() => import('../components/Experience'), {
  ssr: false
});

const Projects = dynamic(() => import('../components/Projects'), {
  ssr: false
});

const Education = dynamic(() => import('../components/Education'), {
  ssr: false
});

const Recommendations = dynamic(() => import('../components/Recommendations'), {
  ssr: false
});

const Contact = dynamic(() => import('../components/Contact'), {
  ssr: false
});

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Add smooth scrolling behavior only after client-side hydration
    const handleSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = anchor.getAttribute('href');
          if (targetId) {
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
              const top = targetElement.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({
                top: top, // Adjust for navbar height
                behavior: 'smooth'
              });
            }
          }
        });
      });
    };

    // Small delay to ensure DOM is ready
    setTimeout(handleSmoothScroll, 100);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Progress bar - only render on client */}
      {isClient && <ProgressBar />}
      
      {isClient && (
        <>
          <Navbar />
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Recommendations />
          <Contact />
        </>
      )}
      <Footer />
    </main>
  );
}
