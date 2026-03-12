import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'Sales Performance Dashboard',
      description: 'Interactive Power BI dashboard analyzing sales metrics, customer trends, and revenue forecasting. Provides real-time insights to sales and marketing teams.',
      tools: ['Power BI', 'SQL', 'Excel'],
      insights: [
        'Reduced report generation time by 70%',
        'Identified top 20% performing regions',
        'Enabled 30% improvement in sales strategy',
      ],
      highlight: 'Shows Dashboard Presentation Skills',
    },
    {
      title: 'Customer Data Analysis & Segmentation',
      description: 'Comprehensive analysis of customer behavior patterns using Python and statistical methods. Implemented customer segmentation model for targeted marketing campaigns.',
      tools: ['Python', 'Pandas', 'Statistical Analysis', 'Matplotlib'],
      insights: [
        'Identified 5 distinct customer segments',
        'Increased marketing efficiency by 40%',
        'Improved customer retention by 25%',
      ],
      highlight: 'Used for strategic decision making',
    },
    {
      title: 'Business Metrics Automation System',
      description: 'Developed automated ETL pipeline in Python for processing and analyzing business metrics. Integrated with multiple data sources and provided automated reporting.',
      tools: ['Python', 'SQL', 'ETL', 'Automation'],
      insights: [
        'Automated 50+ manual reporting processes',
        'Reduced data processing time by 80%',
        'Eliminated data entry errors completely',
      ],
      highlight: 'Improved operational efficiency',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Featured Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-slate-800/80 to-slate-800/40 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Card Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative p-6 flex flex-col h-full">
                {/* Header */}
                <div className="mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

                {/* Highlight Badge */}
                <div className="mb-4 inline-block">
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-semibold border border-amber-500/30">
                    ⭐ {project.highlight}
                  </span>
                </div>

                {/* Key Insights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Outcomes:</h4>
                  <ul className="space-y-1">
                    {project.insights.map((insight, insightIdx) => (
                      <li key={insightIdx} className="text-xs text-gray-400 flex gap-2">
                        <span className="text-cyan-400 flex-shrink-0">→</span>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
                  {project.tools.map((tool, toolIdx) => (
                    <span
                      key={toolIdx}
                      className="px-2 py-1 bg-slate-700/50 text-cyan-300 rounded text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Want to see more of my work?</p>
          <Link
            href="https://github.com/raman1233"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Visit My GitHub
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
