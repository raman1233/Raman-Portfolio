'use client';

import Link from 'next/link';

export default function Contact() {
  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'ramangulhane@email.com',
      link: 'mailto:ramangulhane@email.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/ramangulhane',
      link: 'https://www.linkedin.com/in/ramangulhane/',
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/raman1233',
      link: 'https://github.com/raman1233',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'India',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Let's Connect</span>
        </h2>

        {/* Contact Information Card */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 rounded-xl p-8 border border-slate-700 shadow-xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
            <p className="text-gray-400 leading-relaxed max-w-xl mx-auto">
              I'm always interested in hearing about new opportunities and connecting with fellow data enthusiasts. 
              Whether you have a question or just want to say hello, feel free to reach out!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            {contactInfo.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-xl flex-shrink-0 group-hover:border-cyan-500/50 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-semibold">{item.label}</p>
                  {item.link ? (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300 hover:text-cyan-200 transition-colors break-all"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="text-cyan-300">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-8 border-t border-slate-700 flex flex-col items-center">
            <h4 className="text-white font-semibold mb-6">Connect on Social</h4>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/ramangulhane/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-white hover:border-cyan-500/50 hover:bg-gradient-to-br hover:from-cyan-500/30 hover:to-blue-500/30 transition-all"
                title="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </Link>
              <Link
                href="https://github.com/raman1233"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-white hover:border-cyan-500/50 hover:bg-gradient-to-br hover:from-cyan-500/30 hover:to-blue-500/30 transition-all"
                title="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}