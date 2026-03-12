export default function Skills() {
  const skillCategories = [
    {
      category: 'Data Analysis & Programming',
      skills: ['Python', 'SQL', 'Data Cleaning', 'Statistical Analysis', 'R', 'Pandas', 'NumPy', 'Scikit-learn'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      category: 'Business Intelligence & Visualization',
      skills: ['Power BI', 'Tableau', 'Excel', 'DAX', 'Data Modeling', 'Dashboard Design', 'Google Sheets', 'Plotly'],
      color: 'from-blue-500 to-purple-500',
    },
    {
      category: 'Databases & Tools',
      skills: ['MySQL', 'MongoDB', 'Excel VBA',  'Jupyter Notebook', 'AWS'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Soft Skills',
      skills: ['Data Storytelling', 'Problem Solving', 'Communication', 'Team Collaboration', 'Presentation', 'Documentation', 'Project Management'],
      color: 'from-pink-500 to-cyan-500',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills & Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-colors"
            >
              <h3 className={`text-xl font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-cyan-300 rounded-full text-sm font-medium border border-slate-600/50 transition-all hover:border-cyan-500/50 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
