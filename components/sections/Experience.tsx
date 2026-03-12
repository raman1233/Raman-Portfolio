export default function Experience() {
  const experiences = [
    {
      company: 'Tata Group (Via Forage)',
      role: 'Data Analyst Intern',
      duration: '3 months',
      description: [
        'Analyzed complex datasets using SQL and Python to identify key business metrics and trends',
        'Created interactive Power BI dashboards to visualize KPIs and operational metrics for stakeholders',
        'Performed data cleaning and transformation on large datasets with 100K+ records',
        'Collaborated with cross-functional teams to understand business requirements and deliver analytical solutions',
        'Presented insights and recommendations to management, resulting in data-driven decision making',
      ],
      skills: ['Python', 'SQL', 'Power BI', 'Excel', 'Data Analysis', 'Business Intelligence'],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Professional Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative border-l-2 border-cyan-500/50 pl-8 pb-8"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[13px] top-0 w-6 h-6 bg-slate-900 border-2 border-cyan-500 rounded-full" />

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-xl text-cyan-400 font-semibold">{exp.company}</p>
                  <p className="text-sm text-gray-400 mt-2">{exp.duration}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex gap-3 text-gray-300">
                      <span className="text-cyan-400 mt-1 flex-shrink-0">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Experience Info */}
        <div className="mt-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/20">
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">Additional Experience & Involvement</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">•</span>
              <span>Successfully completed multiple data analysis projects as part of TCS internship program</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">•</span>
              <span>Developed proficiency in handling and analyzing large-scale datasets with 100,000+ records</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">•</span>
              <span>Gained hands-on experience in creating actionable business intelligence solutions</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">•</span>
              <span>Demonstrated ability to work in collaborative team environments and communicate findings effectively</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
