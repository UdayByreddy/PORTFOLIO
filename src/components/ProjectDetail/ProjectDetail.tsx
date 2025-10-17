import { FaGithub } from "react-icons/fa";
import { GIT_URL } from "../../Config";
export default function ProjectDetail({
  selectedProject,
  setSelectedProject,
}: any) {
    function handleNavigateGitHub(): void {
        window.open(GIT_URL,"_blank");
    }

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={() => setSelectedProject(null)}
    >
      <div
        className="bg-slate-900/95 backdrop-blur-lg border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-lg border-b border-white/10 p-6 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedProject?.gradient} flex items-center justify-center text-3xl shadow-lg`}
            >
              {selectedProject.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h2>
              <p className="text-blue-300">
                {selectedProject.category} • {selectedProject.year}
              </p>
            </div>
          </div>
          <button
            onClick={() => setSelectedProject(null)}
            className="text-gray-400 hover:text-white text-3xl transition-colors leading-none"
          >
            ×
          </button>
        </div>

        <div className="p-8">
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            {selectedProject?.fullDescription}
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <span>✨</span> Key Features
            </h3>
            <ul className="space-y-3">
              {selectedProject?.features.map((feature: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-gray-300 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                >
                  <span className="text-blue-400 mt-1 text-lg">▸</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <span>🛠️</span> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {selectedProject?.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 font-semibold" onClick={handleNavigateGitHub}>
              <FaGithub size={20} /> View Source Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
