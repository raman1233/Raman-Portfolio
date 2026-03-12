export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I am an analytical problem-solver with a comprehensive foundation in Artificial Intelligence and Data Science. While my primary focus and core expertise lie in data analytics, my broader academic background gives me a unique perspective on how data interacts with machine learning and emerging technologies.
            </p>
            <p>
              My passion is turning complex, raw datasets into actionable business intelligence. Through hands-on projects—including my virtual Data Analyst internship with the Tata Group—I have honed my ability to build interactive dashboards, execute complex database queries, and translate numbers into compelling narratives that stakeholders can act upon.
            </p>
            <p>
              I am highly proficient in Python, MySQL, and Power BI, and I continuously expand my toolkit by building end-to-end predictive models and data-driven applications. I thrive in collaborative environments where I can bridge the gap between deep technical analysis and high-level business strategy.
            </p>
            <p>
As I prepare to transition from academia to the professional world, I am actively seeking opportunities to leverage my analytical skills and domain expertise to make a significant impact in a dynamic organization.            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Key Highlights</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 text-xl mt-1">•</span>
                <span>Internship at <strong>Tata Group (Via Forage)</strong> with hands-on experience in data analysis</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 text-xl mt-1">•</span>
                <span>Proficient in <strong>Python</strong>, <strong>SQL</strong>, and <strong>Power BI</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 text-xl mt-1">•</span>
                <span>Strong background in <strong>data visualization</strong> and <strong>business analytics</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 text-xl mt-1">•</span>
                <span>Experience with <strong>statistical analysis</strong> and <strong>trend forecasting</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 text-xl mt-1">•</span>
                <span>Excellent <strong>communication skills</strong> for presenting insights to diverse audiences</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
