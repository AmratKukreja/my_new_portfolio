'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaGlobe, FaBrain, FaCube, FaMobile, FaCode, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect, useCallback } from 'react';

// Project type definition
interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string | null;
  live: string | null;
  displayText?: string;
}

// Project categories
const projectCategories: {
  [key: string]: {
    name: string;
    icon: React.ReactElement;
    projects: Project[];
  };
} = {
  web: {
    name: "Web Projects",
    icon: <FaGlobe />,
    projects: [
      {
        title: "AI Based Shopping Assistant Web Application",
        description: "Intelligent SaaS platform with AI-powered tools for enhanced productivity. Features an integrated AI chatbot for real-time assistance with queries, code explanation, translation, debugging, and content generation. Built using OpenAI's API to provide fast and accurate responses, making it ideal for students, developers, and professionals. Designed with security and accessibility in mind, fully functional through any modern web browser.",
        technologies: ["Nextjs", "Node.js", "OpenAI API", "AI/ML", "SaaS", "Real-time Chat", "Natural Language Processing"],
        image: "/images/shopping-assistant.jpg",
        github: "https://github.com/AmratKukreja",
        live: null,
        displayText: "Shopping Assistant"
      },
      {
        title: "AI Based Shopping Assistant Browser Extension",
        description: "Smart browser extension that enhances online shopping with real-time AI features. Automatically scans product pages, compares prices and features across multiple websites, fetches user reviews, and provides instant deal notifications. Includes built-in AI chatbot for recommendations and support, designed to simplify decision-making and save time during online shopping.",
        technologies: ["JavaScript", "Browser Extension API", "AI/ML", "Web Scraping", "Price Comparison", "Chrome Extension"],
        image: "/images/shopping-extension.jpg",
        github: "https://github.com/AmratKukreja",
        live: null,
        displayText: "Shopping Extension"
      },
      {
        title: "University Journey – A Magazine Platform for Students",
        description: "Web platform designed for university students to capture and preserve their personal journey. Allows multiple users to create and share memories, moments, friendships, and achievements. Features collaborative storytelling where users can invite friends to contribute to shared memories, emphasizing social interaction and digital memory preservation for the university experience.",
        technologies: ["Next.js", "Supabase", "React", "TypeScript", "Real-time Database", "Authentication", "Social Features"],
        image: "/images/university-journey.jpg",
        github: "https://github.com/AmratKukreja",
        live: null
      },
      {
        title: "E-Commerce Website - Wemart",
        description: "Versatile e-commerce platform catering to Men, Women, and Children with a seamless shopping experience. Features secure user authentication, efficient email system, and personalized cart functionality. Includes a dynamic admin panel for product management and inventory control. Built with cutting-edge MERN technology to make fashion shopping easy, secure, and enjoyable for everyone.",
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT Authentication", "Admin Panel", "E-commerce", "Email System"],
        image: "/images/wemart-ecommerce.jpg",
        github: "https://github.com/AmratKukreja",
        live: null
      },
      {
        title: "Cosmic Quest: Explore the Universe",
        description: "Space exploration platform offering users a journey into the depths of space and our universe. Features daily NASA updates including near-earth objects, Mars rover pictures, and NASA's picture of the day. Users can access archived images, learn about their significance, and mark favorites. Built with robust security measures including JWT authentication and comprehensive API protection.",
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "NASA API", "JWT Security", "Database Archiving", "Dynamic Design"],
        image: "/images/cosmic-quest.jpg",
        github: "https://github.com/AmratKukreja",
        live: null
      },
      {
        title: "Portfolio",
        description: "Modern and responsive personal portfolio website showcasing technical projects, skills, and experience. Features smooth animations, interactive project filtering, contact forms, and optimized performance. Built with modern web technologies and best practices for professional presentation.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design", "SEO Optimization"],
        image: "/images/portfolio.jpg",
        github: "https://github.com/AmratKukreja",
        live: null,
        displayText: "Portfolio"
      }
    ]
  },
  ai: {
    name: "AI/ML Projects", 
    icon: <FaBrain />,
    projects: [
      {
        title: "Fake Voice Detection System",
        description: "Advanced neural network-based system for detecting deepfake and AI-generated voices. Utilizes state-of-the-art deep learning techniques with convolutional and recurrent neural networks to analyze audio spectrograms and temporal patterns. Achieved high accuracy in distinguishing between real and synthetic speech samples.",
        technologies: ["Python", "TensorFlow", "Neural Networks", "CNN", "RNN","Audio Processing"],
        image: "/images/fake-voice-detection.jpg",
        github: "https://github.com/AmratKukreja",
        live: null
      },
      {
        title: "Advanced Brain Tumor Detection",
        description: "Sophisticated medical AI system leveraging deep convolutional neural networks for precise brain tumor detection and classification from MRI scans. Implements advanced image preprocessing, data augmentation, and transfer learning techniques to achieve clinical-grade accuracy in identifying malignant and benign tumors.",
        technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "Transfer Learning", "Medical Imaging" ],
        image: "/images/brain-tumor-detection.jpg",
        github: "https://github.com/AmratKukreja",
        live: null
      },
      {
        title: "Email Spam Detection System",
        description: "Intelligent email classification system using machine learning algorithms to identify and filter spam emails. Implements multiple ML models including Naive Bayes, SVM, and Random Forest with comprehensive feature engineering including TF-IDF vectorization, N-gram analysis, and natural language processing techniques.",
        technologies: ["Python", "Scikit-learn", "NLTK", "Pandas", "Machine Learning", "NLP"],
        image: "/images/email-spam-detection.jpg",
        github: "https://github.com/AmratKukreja",
        live: null
      }
    ]
  },
  web3: {
    name: "Web3 & Blockchain",
    icon: <FaCube />,
    projects: [
      {
        title: "Custom Cryptocurrency (Aditi Token)",
        description: "Created a custom ERC-20 cryptocurrency token using Solidity smart contracts on Ethereum Sepolia Testnet. Features include token minting, transfer functionality, and complete blockchain deployment with Etherscan verification.",
        technologies: ["Solidity", "Remix IDE", "Ethereum", "Sepolia Testnet", "ERC-20", "Smart Contracts"],
        image: "/images/aditi-token-contract.jpg",
        github: "https://lnkd.in/du7jvuaK",
        live: "https://lnkd.in/d7jP97gV"
      },
      {
        title: "Aditi Token DApp",
        description: "Full-stack decentralized application for Aditi Token with MetaMask wallet integration. Features token balance viewing, sending transactions, transaction history, and immersive 3D animations using Three.js.",
        technologies: ["React", "Ethers.js", "Three.js", "MetaMask", "Web3", "Ethereum", "JavaScript"],
        image: "/images/aditi-token-dapp.jpg",
        github: "https://lnkd.in/daZWyTse",
        live: "https://lnkd.in/d66rV6qe"
      }
    ]
  },
  mobile: {
    name: "Mobile Apps",
    icon: <FaMobile />,
    projects: [
      {
        title: "NASA APOD",
        description: "Android app using NASA API to fetch daily astronomy pictures and news. Features include favorites, timeline view, date filtering, and random news browsing with offline storage.",
        technologies: ["Kotlin", "Jetpack Compose", "Room Database", "NASA API", "Android"],
        image: "/images/nasa-apod.jpg",
        github: "https://github.com/AmratKukreja",
        live: null
      },
      {
        title: "QuizLearning",
        description: "Interactive quiz app with multiple categories (entertainment, politics, AI, etc.). Features question fetching via open-source API, bookmarking system, and offline storage for saved questions.",
        technologies: ["Kotlin", "Jetpack Compose", "Room Database", "REST API", "Android"],
        image: "/images/quiz-learning.jpg",
        github: "https://github.com/AmratKukreja",
        live: null
      },
      {
        title: "DailyQuoteApp",
        description: "Motivational quotes app that fetches random inspiring quotes from open-source API. Users can favorite quotes and access them offline with local database storage.",
        technologies: ["Kotlin", "Jetpack Compose", "Room Database", "Quotes API", "Android"],
        image: "/images/daily-quote.jpg",
        github: "https://github.com/AmratKukreja",
        live: null
      },
      {
        title: "Personal Expense Tracker",
        description: "Comprehensive expense tracking app with category-based expense management. Features daily, monthly, and yearly expense analysis with local SQLite database storage.",
        technologies: ["Kotlin", "Jetpack Compose", "Room SQLite", "Data Analytics", "Android"],
        image: "/images/expense-tracker.jpg",
        github: "https://github.com/AmratKukreja",
        live: null
      },
      {
        title: "Debt Management System",
        description: "Cross-platform debt tracking app built with React Native and Expo. Features comprehensive debt management, payment tracking, visual analytics, and secure user authentication with HCI principles.",
        technologies: ["React Native", "Expo", "AsyncStorage", "Redux", "Chart Kit", "Cross-platform"],
        image: "/images/debt-management.jpg",
        github: "https://github.com/AmratKukreja",
        live: null
      },
      {
        title: "TicTocTac Mobile Game",
        description: "Cross-platform Tic Tac Toe game with Flutter featuring two game modes: two-player mode for local multiplayer and single-player mode with AI algorithms for bot vs human competition. Includes smart AI logic and responsive design.",
        technologies: ["Flutter", "Dart", "AI Algorithms", "Game Logic", "Cross-platform", "Mobile Development", "Game Development", "State Management"],
        image: "/images/mobile-game-flutter.jpg",
        github: "https://github.com/AmratKukreja",
        live: null
      }
    ]
  },
  general: {
    name: "General Projects",
    icon: <FaCode />,
    projects: [
      {
        title: "FastFood Application",
        description: "Restaurant management system with Java GUI and MySQL. Features menu management, order processing, billing system, and inventory tracking for efficient restaurant operations.",
        technologies: ["Java", "Swing/AWT", "MySQL", "JDBC", "GUI Development", "Database Management", "Restaurant Management"],
        image: "/images/fastfood-application.jpg",
        github: "https://github.com/AmratKukreja",
        live: null
      },
      {
        title: "Chatting Application",
        description: "Real-time messaging application using Java with socket programming and multithreading. Supports multiple concurrent users, instant messaging, and client-server architecture.",
        technologies: ["Java", "Socket Programming", "Multithreading", "GUI", "Network Programming", "Client-Server Architecture", "Real-time Communication"],
        image: "/images/chatting-application.jpg",
        github: "https://github.com/AmratKukreja",
        live: null
      },
      {
        title: "Urdu Programming Language",
        description: "Custom programming language with Urdu syntax using Python and compiler construction concepts. Includes lexical analysis, syntax parsing, and code generation for native Urdu speakers.",
        technologies: ["Python", "Compiler Construction", "Lexical Analysis", "Syntax Parsing", "Language Design", "Programming Language Theory", "Custom Syntax"],
        image: "/images/urdu-programming-language.jpg",
        github: "https://github.com/AmratKukreja",
        live: null
      },
      {
        title: "Phone Directory System",
        description: "Digital contact management system with Java GUI and MySQL. Features add, edit, delete, search functionality with contact categorization and advanced search filters.",
        technologies: ["Java", "Swing/AWT", "MySQL", "JDBC", "Contact Management", "Database Operations", "Search Algorithms"],
        image: "/images/phone-directory.jpg",
        github: "https://github.com/AmratKukreja",
        live: null
      },
      {
        title: "Library Management System",
        description: "Library automation system with Java GUI and MySQL. Features book catalog management, member registration, issue/return tracking, fine calculation, and administrative controls.",
        technologies: ["Java", "Swing/AWT", "MySQL", "JDBC", "Library Automation", "Database Design", "Report Generation", "Administrative System"],
        image: "/images/library-management.jpg",
        github: "https://github.com/AmratKukreja",
        live: null
      },
      {
        title: "Hospital Management System",
        description: "Comprehensive healthcare management system built with Java command-line interface and file I/O operations. Features patient registration, doctor management, appointment scheduling, medical records handling, and billing system using file-based data storage.",
        technologies: ["Java", "Command Line Interface", "File I/O", "Data Management", "Healthcare System", "File Handling", "Console Application"],
        image: "/images/hospital-management.jpg",
        github: "https://github.com/AmratKukreja",
        live: null
      }
    ]
  }
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Get all projects from all categories
  const getAllProjects = () => {
    return Object.values(projectCategories).flatMap(category => category.projects);
  };

  const getFilteredProjects = () => {
    if (activeCategory === 'all') {
      return getAllProjects();
    }
    return projectCategories[activeCategory as keyof typeof projectCategories]?.projects || [];
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentSlide(0); // Reset to first slide when changing category
  };

  const filteredProjects = getFilteredProjects();

  // Reset slide when filtered projects change
  useEffect(() => {
    setCurrentSlide(0);
  }, [filteredProjects.length]);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dynamic projects per slide based on screen size
  const getProjectsPerSlide = () => {
    const isMobile = windowWidth < 768;
    return isMobile ? 1 : 3; // 1 on mobile, 3 on desktop for all categories
  };
  
  const projectsPerSlide = getProjectsPerSlide();
  const totalSlides = Math.ceil(filteredProjects.length / projectsPerSlide);
  
  const getCurrentSlideProjects = () => {
    const startIndex = currentSlide * projectsPerSlide;
    return filteredProjects.slice(startIndex, startIndex + projectsPerSlide);
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-play carousel every 3 seconds with continuous loop
  useEffect(() => {
    if (totalSlides <= 1 || isHovered) return; // Don't auto-play if only one slide or user is hovering

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides); // Automatic loop using modulo
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [totalSlides, isHovered]); // Removed currentSlide dependency to prevent restart on each slide change

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-muted max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            <span className="hidden sm:inline">A showcase of my technical projects spanning AI/ML, web development, mobile apps, Web3/blockchain, and innovative applications, demonstrating my versatility and problem-solving abilities.</span>
            <span className="sm:hidden">Showcasing my technical projects across AI/ML, web development, mobile apps, and blockchain technologies.</span>
          </p>
        </motion.div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base ${
              activeCategory === 'all'
                ? 'bg-[#2A9D8F] text-white'
                : 'bg-card text-muted hover:bg-[#2A9D8F] hover:text-white'
            }`}
          >
            All Projects
          </button>
          {Object.entries(projectCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-all flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
                activeCategory === key
                  ? 'bg-[#2A9D8F] text-white'
                  : 'bg-card text-muted hover:bg-[#2A9D8F] hover:text-white'
              }`}
            >
              <span className="text-sm sm:text-base">{category.icon}</span>
              <span className="hidden sm:inline">{category.name}</span>
              <span className="sm:hidden">{category.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Projects Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 text-muted opacity-50">📁</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Coming Soon</h3>
              <p className="text-muted">Projects for this category will be added soon.</p>
            </div>
          ) : (
            <>
              {/* Project Cards */}
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl">
                  {getCurrentSlideProjects().map((project, index) => (
              <motion.div
                      key={`${activeCategory}-${currentSlide}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="project-card w-full max-w-sm sm:max-w-md md:max-w-none mx-auto"
                    >
                      <div className="relative h-32 sm:h-40 md:h-48 bg-gradient-to-br from-[#1A365D] to-[#2A9D8F] flex items-center justify-center">
                        <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4">
                          {project.displayText || project.title.split(' ')[0]}
                        </div>
                </div>
                      <div className="project-content p-4 sm:p-6">
                        <h3 className="project-title text-lg sm:text-xl mb-2">{project.title}</h3>
                        <p className="project-description text-sm sm:text-base mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                          {project.description}
                        </p>
                        <div className="project-tech mb-3 sm:mb-4">
                          {project.technologies.slice(0, 4).map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag text-xs">{tech}</span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="tech-tag text-xs">+{project.technologies.length - 4} more</span>
                          )}
                  </div>
                        <div className="flex gap-3 sm:gap-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                              className="flex items-center text-xs sm:text-sm text-primary hover:text-secondary transition-colors"
                      >
                        <FaGithub className="mr-1" /> GitHub
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                              className="flex items-center text-xs sm:text-sm text-primary hover:text-secondary transition-colors"
                      >
                        <FaExternalLinkAlt className="mr-1" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              {totalSlides > 1 && (
                <div className="flex justify-center items-center gap-3 sm:gap-4">
                  <button
                    onClick={prevSlide}
                    className="p-2 sm:p-3 rounded-full bg-[#2A9D8F] text-white hover:bg-[#1A7A6D] transition-colors text-sm sm:text-base"
                    aria-label="Previous projects"
                  >
                    <FaChevronLeft />
                  </button>
                  
                  <div className="flex gap-1 sm:gap-2 max-w-[200px] overflow-x-auto">
                    {Array.from({ length: totalSlides }, (_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors flex-shrink-0 ${
                          index === currentSlide
                            ? 'bg-[#2A9D8F]'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextSlide}
                    className="p-2 sm:p-3 rounded-full bg-[#2A9D8F] text-white hover:bg-[#1A7A6D] transition-colors text-sm sm:text-base"
                    aria-label="Next projects"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
