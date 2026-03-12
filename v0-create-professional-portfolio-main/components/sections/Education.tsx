export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Education & Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              Academic Background
            </h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <h4 className="text-lg font-bold text-white mb-1">Bachelor of Science</h4>
                <p className="text-cyan-400 font-semibold mb-2">In Computer Science / IT / Engineering</p>
                <p className="text-gray-400 text-sm">Specialized in data analysis and business analytics</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              Certifications & Training
            </h3>
            <div className="space-y-3">
              {[
                { title: 'TCS Data Analytics Internship', issuer: 'Tata Consultancy Services', status: 'Completed' },
                { title: 'Python for Data Analysis', issuer: 'Professional Training', status: 'Completed' },
                { title: 'SQL Database Management', issuer: 'Professional Development', status: 'Completed' },
                { title: 'Business Intelligence with Power BI', issuer: 'Industry Training', status: 'Completed' },
              ].map((cert, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 rounded-lg p-4 border border-slate-700 hover:border-cyan-500/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-white text-sm">{cert.title}</h4>
                      <p className="text-gray-400 text-xs mt-1">{cert.issuer}</p>
                    </div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs font-semibold">
                      ✓ {cert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Coursework & Skills */}
        <div className="mt-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/20">
          <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Key Coursework & Areas of Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">📊</span>
                Data Analysis
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Exploratory Data Analysis (EDA)</li>
                <li>• Data Mining & Extraction</li>
                <li>• Statistical Modeling</li>
                <li>• Trend Analysis & Forecasting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-400">💻</span>
                Technical Skills
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Database Design & Optimization</li>
                <li>• ETL Process Development</li>
                <li>• API Integration</li>
                <li>• Data Pipeline Architecture</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-purple-400">📈</span>
                Business Intelligence
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Dashboard Development</li>
                <li>• KPI Tracking & Reporting</li>
                <li>• Business Metrics Analysis</li>
                <li>• Stakeholder Communication</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Languages & Other Info */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 rounded-xl p-6 border border-slate-700">
            <h4 className="font-semibold text-white mb-4">Languages</h4>
            <div className="space-y-3">
              {[
                { lang: 'English', level: 'Fluent', proficiency: 95 },
                { lang: 'Hindi', level: 'Native', proficiency: 100 },
                { lang: 'Marathi', level: 'Native', proficiency: 100 },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm">{item.lang}</span>
                    <span className="text-cyan-400 text-xs">{item.level}</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-1.5">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      style={{ width: `${item.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 rounded-xl p-6 border border-slate-700">
            <h4 className="font-semibold text-white mb-4">Continuous Learning</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex gap-2">
                <span className="text-cyan-400 flex-shrink-0">→</span>
                <span>Advanced Machine Learning & AI</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 flex-shrink-0">→</span>
                <span>Cloud Data Platforms (AWS, Azure)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 flex-shrink-0">→</span>
                <span>Advanced SQL Optimization</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 flex-shrink-0">→</span>
                <span>Emerging Data Technologies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
