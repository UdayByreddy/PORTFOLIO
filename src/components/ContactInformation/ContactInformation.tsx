export default function ContactInformation({contactInfo, socialLinks}:{contactInfo:any, socialLinks:any}) {
  return (
     <div className="space-y-6">
              
              {/* Contact Cards */}
              <div 
                className="space-y-4"
                style={{ animation: 'fadeInUp 0.5s ease-out 0.2s both' }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                
                {contactInfo.map((contact:any, index:number) => (
                  <a
                    key={index}
                    href={contact.link}
                    className="block bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center text-white shadow-lg`}>
                        {contact.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-400 text-sm font-medium">{contact.title}</h3>
                        <p className="text-white text-lg font-semibold">{contact.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div 
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
                style={{ animation: 'fadeInUp 0.5s ease-out 0.4s both' }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Connect on Social</h3>
                <div className="space-y-3">
                  {socialLinks.map((social:any, index:number) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-lg ${social.hoverColor}`}
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white shadow-lg`}>
                        {social.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{social.name}</h4>
                        <p className="text-gray-400 text-sm">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div 
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6"
                style={{ animation: 'fadeInUp 0.5s ease-out 0.6s both' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-bold text-white">Currently Available</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm open to freelance projects, full-time opportunities, and collaborations. 
                  Let's build something amazing together!
                </p>
              </div>

            </div>
  )
}
