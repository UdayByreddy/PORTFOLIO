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

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-8 lg:px-16 py-12 gap-12">
        {/* LEFT SECTION - Profile Card */}
        <ProfileCard isVisible={isVisible} />

        {/* RIGHT SECTION - Content */}
        <Content isVisible={isVisible} skills={SKILLS} />
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
