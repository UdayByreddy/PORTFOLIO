import { useState, useEffect } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Content from "../../components/Content/Content";
import { SKILLS } from "../../Config";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div
        className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
        style={{
          top: "10%",
          left: "10%",
          animation: "blob 7s infinite",
        }}
      ></div>
      <div
        className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
        style={{
          top: "50%",
          right: "10%",
          animation: "blob 7s infinite 2s",
        }}
      ></div>
      <div
        className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
        style={{
          bottom: "10%",
          left: "30%",
          animation: "blob 7s infinite 4s",
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

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 lg:px-16 py-12 gap-8">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 mb-4">
          <ProfileCard isVisible={isVisible} />
          <Content isVisible={isVisible} skills={SKILLS} />
        </div>

        <div className="w-full backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 mb-8 mt-4">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Java",
                    "JavaScript",
                    "SQL",
                    "HTML",
                    "CSS",
                    "Python",
                    "Rust",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">
                  Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Spring Boot", "React", "Tauri"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">
                  Databases
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "PostgreSQL"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-pink-400 mb-4">
                  Tools & More
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Docker",
                    "NATS",
                    "Git",
                    "Postman",
                    "Swagger",
                    "Redis",
                    "MongoDB",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-sm text-pink-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Coding Stats */}
          <div className="backdrop-blur-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Coding Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  300+
                </div>
                <div className="text-gray-300">DSA Problems Solved</div>
                <div className="text-sm text-gray-400 mt-2">
                  LeetCode • GeeksforGeeks • HackerRank
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  3
                </div>
                <div className="text-gray-300">Major Projects</div>
                <div className="text-sm text-gray-400 mt-2">
                  Microservices • Web Apps • Mobile
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 mb-2">
                  OSS
                </div>
                <div className="text-gray-300">Open Source Contributor</div>
                <div className="text-sm text-gray-400 mt-2">
                  GitHub • Tech Blogger
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
      `}</style>
    </div>
  );
}
