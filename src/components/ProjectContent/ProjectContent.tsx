import { FaGithub, FaExternalLinkAlt} from 'react-icons/fa';
import { EDUCATION, GIT_URL } from '../../Config';
export default function ProjectContent({activeTab, projects, setSelectedProject, isVisible,experience}: {activeTab: string, projects: any[], setSelectedProject: any, isVisible: boolean, experience: any[]}) {
  return (
   <div className="relative z-10 px-4 sm:px-8 lg:px-16 py-12">
          {activeTab === 'projects' && (
            <div className={`max-w-7xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center mb-16">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4 animate-gradient">
                  My Projects
                </h1>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <p className="text-xl text-gray-300">Building solutions that matter</p>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
              </div>
  
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20"
                    style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.15}s both` }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-4xl`}>
                      {project.icon}
                    </div>
  
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mt-2 mb-2">{project.title}</h3>
                    <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300 font-semibold mb-4">{project.year}</span>
                    
                    <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">{project.description}</p>
  
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3)?.map((tech:any) => (
                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-blue-400 font-semibold">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
  
                    <div className="flex gap-3">
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                      onClick={() => window.open(GIT_URL, "_blank")}
                      >
                        <FaGithub /> Code
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                        <FaExternalLinkAlt /> Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
  
              {/* Tech Stack Section */}
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-blue-400 mb-4">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Java', 'JavaScript', 'SQL','HTML', 'CSS', 'Python','Rust'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Spring Boot', 'React', 'Tauri'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                     <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Databases</h3>
                    <div className="flex flex-wrap gap-2">
                      {['MySQL', 'PostgreSQL'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-pink-400 mb-4">Tools & More</h3>
                    <div className="flex flex-wrap gap-2">
                      {[  'Docker','NATS', 'Git', 'Postman', 'Swagger', 'Redis', 'MongoDB'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-sm text-pink-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Coding Stats */}
              <div className="backdrop-blur-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Coding Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">300+</div>
                    <div className="text-gray-300">DSA Problems Solved</div>
                    <div className="text-sm text-gray-400 mt-2">LeetCode • GeeksforGeeks • HackerRank</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">3</div>
                    <div className="text-gray-300">Major Projects</div>
                    <div className="text-sm text-gray-400 mt-2">Microservices • Web Apps • Mobile</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 mb-2">OSS</div>
                    <div className="text-gray-300">Open Source Contributor</div>
                    <div className="text-sm text-gray-400 mt-2">GitHub • Tech Blogger</div>
                  </div>
                </div>
              </div>
            </div>
          )}
  
          {activeTab === 'experience' && (
            <div className={`max-w-5xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center mb-16">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4 animate-gradient">
                  Experience
                </h1>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <p className="text-xl text-gray-300">My professional journey</p>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
              </div>
  
              <div className="space-y-8 mb-12">
                {experience?.map((exp:any, index:number) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:scale-102 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                    style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.2}s both` }}
                  >
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center flex-shrink-0 text-3xl shadow-lg`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                            <p className="text-lg text-blue-400 font-semibold mb-2">{exp.company}</p>
                            <p className="text-gray-400 text-sm">{exp.location}</p>
                          </div>
                          <span className="text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm mt-4 md:mt-0 inline-block">
                            {exp.period}
                          </span>
                        </div>
  
                        <ul className="space-y-3">
                          {exp.highlights.map((highlight: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                              <span className="text-blue-400 mt-1 text-xl">▸</span>
                              <span className="leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
  
              {/* Education Section */}
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span>🎓</span> Education
                </h2>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 text-3xl shadow-lg">
                    📚
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{EDUCATION.degree}</h3>
                    <p className="text-blue-400 font-semibold text-lg mb-3">{EDUCATION.institution}</p>
                    <div className="flex flex-wrap gap-4 text-gray-300">
                      <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">{EDUCATION.duration}</span>
                      <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-sm text-green-300 font-semibold">CGPA: 8.8</span>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Leadership */}
              <div className="mt-8 backdrop-blur-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/20 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span>🌟</span> Leadership & Extracurricular
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">👥</span>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Team Leader - National Service Scheme (NSS)</h4>
                      <p className="text-gray-400">Sree Vidyanikethan Engineering College</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">✍️</span>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Tech Blogger & Open Source Contributor</h4>
                      <p className="text-gray-400">Active contributor to GitHub projects and technical writing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
  )
}
