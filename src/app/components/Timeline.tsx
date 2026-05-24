export default function Timeline() {
  const experiences = [
    {
      year: '2024',
      title: 'Senior Data Scientist',
      company: 'TechCorp AI',
      description: 'Leading ML initiatives for predictive analytics and recommendation systems',
    },
    {
      year: '2022',
      title: 'Data Scientist',
      company: 'DataViz Solutions',
      description: 'Built end-to-end ML pipelines and interactive dashboards for enterprise clients',
    },
    {
      year: '2020',
      title: 'Junior Data Analyst',
      company: 'Analytics Inc',
      description: 'Performed data analysis and created automated reporting systems',
    },
    {
      year: '2016',
      title: 'B.S. Computer Science',
      company: 'Tech University',
      description: 'Focus on Machine Learning and Statistical Analysis',
    }
  ];

  return (
    <section id="timeline" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-center mb-16" style={{ fontSize: '2rem', fontWeight: 600 }}>
          Journey
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px"
            style={{
              background: 'rgba(255,255,255,0.2)'
            }}
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Left side - Content (odd items) or empty (even items) */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : ''}`}>
                  {index % 2 === 0 && (
                    <div>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                        {exp.title}
                      </h3>
                      <p className="opacity-60 mb-2" style={{ fontSize: '0.875rem' }}>
                        {exp.company}
                      </p>
                      <p className="opacity-50" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
                        {exp.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Center - Year box on the line */}
                <div className="relative flex-shrink-0 z-10">
                  <div
                    className="px-4 py-2 text-center"
                    style={{
                      background: 'rgba(0,0,0,1)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      minWidth: '70px'
                    }}
                  >
                    {exp.year}
                  </div>
                </div>

                {/* Right side - Content (even items) or empty (odd items) */}
                <div className={`flex-1 ${index % 2 === 1 ? 'text-left pl-8' : ''}`}>
                  {index % 2 === 1 && (
                    <div>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                        {exp.title}
                      </h3>
                      <p className="opacity-60 mb-2" style={{ fontSize: '0.875rem' }}>
                        {exp.company}
                      </p>
                      <p className="opacity-50" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
                        {exp.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
