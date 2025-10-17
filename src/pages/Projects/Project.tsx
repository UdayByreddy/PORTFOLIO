import  { useState, useEffect } from 'react';
import { FaBriefcase, FaCode } from 'react-icons/fa';
import ProjectContent from '../../components/ProjectContent/ProjectContent';
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail';

export default function Project() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('projects');

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e:any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: "BookStore Microservices",
      year: "2025",
      category: "Backend Architecture",
      description: "A comprehensive microservices-based bookstore application demonstrating enterprise-level architecture patterns and cloud-native development practices.",
      fullDescription: "Developed a scalable bookstore system using Java and Spring Boot with a complete microservices architecture. The application showcases modern cloud-native patterns including service discovery, API gateway, centralized configuration, and fault tolerance.",
      technologies: ["Java", "Spring Boot", "Microservices", "Docker", "Spring Cloud Gateway", "Eureka", "Config Server", "PostgreSQL"],
      features: [
        "Service layers: User Management, Catalog, Orders, and Payments",
        "Spring Cloud Gateway for API routing and load balancing",
        "Eureka Server for service discovery and registration",
        "Config Server for centralized configuration management",
        "Circuit breaker pattern for fault tolerance",
        "Docker containerization for easy deployment",
        "RESTful APIs with comprehensive documentation"
      ],
      gradient: "from-orange-500 to-red-600",
      icon: "🏪",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "REST Countries Explorer",
      year: "2024",
      category: "Frontend Application",
      description: "An elegant single-page application that provides detailed information about countries worldwide with advanced filtering and theme customization.",
      fullDescription: "Built a responsive SPA using React to display comprehensive country data via the REST Countries API. The application features a modern UI with smooth transitions and intelligent state management.",
      technologies: ["React", "CSS", "REST API", "React Router", "JavaScript", "Hooks"],
      features: [
        "Search countries by name with real-time filtering",
        "Filter countries by region (Africa, Americas, Asia, Europe, Oceania)",
        "Light/Dark theme toggle with persistent preference",
        "Border country navigation for exploring neighboring nations",
        "Detailed country pages with population, capital, languages, and more",
        "Mobile-first responsive design",
        "Clean component architecture with reusable UI elements",
        "Optimized performance with React hooks (useEffect, useState)"
      ],
      gradient: "from-blue-500 to-cyan-600",
      icon: "🌍",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "React Native NATS Integration",
      year: "2025",
      category: "Mobile Development",
      description: "A cutting-edge mobile application implementing real-time messaging capabilities using NATS, a high-performance messaging system for modern distributed applications.",
      fullDescription: "Implemented real-time messaging in a React Native app using NATS (a high-performance messaging system). This project bridges the gap between NATS.js and React Native runtime through clever use of polyfills and native modules.",
      technologies: ["React Native", "JavaScript", "NATS", "WebSocket", "Polyfills", "Crypto"],
      features: [
        "Real-time messaging with NATS JetStream",
        "WebSocket polyfills for React Native compatibility",
        "Crypto polyfills using react-native-get-random-values",
        "Full NATS client support in mobile environment",
        "Publish-subscribe patterns for live chat",
        "Push notification system integration",
        "Efficient message queuing and delivery",
        "Cross-platform support (iOS & Android)"
      ],
      gradient: "from-purple-500 to-pink-600",
      icon: "📱",
      github: "#",
      demo: "#"
    }
  ];

  const experience = [
    {
      company: "SigTuple",
      role: "Full Stack Developer",
      period: "Oct 2024 – Present",
      location: "Bangalore, India",
      highlights: [
        "Led development of SigVet frontend using React + Tauri",
        "Built real-time communication with NATS JetStream for seamless backend integration",
        "Integrated Wi-Fi module in Rust into React frontend for device control",
        "Worked on cross-platform desktop performance and UI/UX improvements"
      ],
      gradient: "from-blue-500 to-cyan-600",
      icon: "💼"
    },
    {
      company: "MoutBlue",
      role: "Full Stack Developer",
      period: "Aug 2024 – Oct 2024",
      location: "Bangalore, India",
      highlights: [
        "Built scalable modules using full-stack web technologies",
        "Collaborated on RESTful APIs and frontend UI design improvements"
      ],
      gradient: "from-purple-500 to-pink-600",
      icon: "🚀"
    },
    {
      company: "Shiash InfoTech",
      role: "Full Stack Java Developer Intern",
      period: "May 2024 – Aug 2024",
      location: "Remote",
      highlights: [
        "Built and deployed Java Spring Boot APIs",
        "Implemented CRUD operations, integrated MySQL/PostgreSQL databases",
        "Worked on frontend using HTML, CSS, JS and connected with backend APIs"
      ],
      gradient: "from-orange-500 to-red-600",
      icon: "💻"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div 
        className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        style={{
          top: '10%',
          left: '10%',
          animation: 'blob 7s infinite'
        }}
      ></div>
      <div 
        className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        style={{
          top: '50%',
          right: '10%',
          animation: 'blob 7s infinite 2s'
        }}
      ></div>
      <div 
        className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        style={{
          bottom: '10%',
          left: '30%',
          animation: 'blob 7s infinite 4s'
        }}
      ></div>

      {/* Floating cursor glow effect */}
      <div 
        className="pointer-events-none fixed w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl transition-all duration-300"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      ></div>

      {/* Navigation Bar */}
      <nav className="relative z-20 bg-white/5 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-4">
          <div className="flex items-center justify-end">
            
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('experience')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'experience'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >
                <FaBriefcase /> Experience
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'projects'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >
                <FaCode /> Projects
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
    <ProjectContent activeTab={activeTab} projects={projects} experience={experience} setSelectedProject={setSelectedProject} isVisible={isVisible} />

      {/* Project Detail Modal */}
      {selectedProject && (
      <ProjectDetail selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      )}

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}