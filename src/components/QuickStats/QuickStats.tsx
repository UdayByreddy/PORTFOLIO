export default function QuickStats() {
  return (
      <div 
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.8s both' }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Me?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mx-auto mb-4 text-3xl shadow-lg">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Fast Response</h3>
                <p className="text-gray-400 text-sm">Usually reply within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4 text-3xl shadow-lg">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Detail Oriented</h3>
                <p className="text-gray-400 text-sm">Precision in every project</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mx-auto mb-4 text-3xl shadow-lg">
                  💡
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Creative Solutions</h3>
                <p className="text-gray-400 text-sm">Innovative problem solving</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4 text-3xl shadow-lg">
                  🤝
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Collaborative</h3>
                <p className="text-gray-400 text-sm">Open communication always</p>
              </div>
            </div>
          </div>
  )
}
