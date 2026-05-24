import { Lightbulb, Target, TrendingUp, Beaker } from 'lucide-react';

export default function InsightsLab() {
  const projects = [
    {
      id: 'experiment-001',
      title: 'E-Commerce Recommendation System',
      problem: 'Low product discovery rate (12%) and poor cross-selling performance',
      approach: 'Hybrid recommendation engine combining collaborative filtering with content-based features + real-time personalization',
      insight: 'Time-of-day patterns significantly influenced purchase decisions. Morning browsers converted better with educational content, evening shoppers preferred quick recommendations.',
      results: [
        { metric: 'Product Discovery', value: '+47%' },
        { metric: 'Cross-sell Conversion', value: '+31%' },
        { metric: 'Average Order Value', value: '+18%' }
      ],
      tags: ['Python', 'Collaborative Filtering', 'Real-time ML']
    },
    {
      id: 'experiment-002',
      title: 'Predictive Maintenance Model',
      problem: 'Equipment failures causing unexpected downtime and significant revenue loss',
      approach: 'LSTM model using IoT sensor data (temperature, vibration, pressure) with 7-day failure prediction window',
      insight: 'Subtle vibration pattern changes 5-6 days before failure were more predictive than temperature spikes, enabling proactive maintenance scheduling.',
      results: [
        { metric: 'Unplanned Downtime', value: '-62%' },
        { metric: 'Annual Cost Savings', value: '$2.4M' },
        { metric: 'Prediction Accuracy', value: '89%' }
      ],
      tags: ['LSTM', 'IoT', 'Time Series']
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Beaker className="w-8 h-8 opacity-70" />
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Case Studies
            </h2>
          </div>
          <p className="opacity-60" style={{ fontSize: '1.125rem' }}>
            Real-world experiments and their impact
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden transition-all duration-300 hover:scale-[1.01]"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(20px)',
                borderRadius: '16px',
              }}
            >
              {/* Header */}
              <div
                className="px-8 py-4"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                    {project.title}
                  </h3>
                  <span
                    className="px-3 py-1"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontFamily: 'monospace',
                    }}
                  >
                    {project.id}
                  </span>
                </div>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  <div
                    className="p-4"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-5 h-5 opacity-70" />
                      <h4 style={{ fontWeight: 700 }}>Problem</h4>
                    </div>
                    <p className="opacity-70" style={{ fontSize: '0.875rem' }}>
                      {project.problem}
                    </p>
                  </div>

                  <div
                    className="p-4"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="w-5 h-5 opacity-70" />
                      <h4 style={{ fontWeight: 700 }}>Approach</h4>
                    </div>
                    <p className="opacity-70" style={{ fontSize: '0.875rem' }}>
                      {project.approach}
                    </p>
                  </div>

                  <div
                    className="p-4"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5 opacity-70" />
                      <h4 style={{ fontWeight: 700 }}>Key Insight</h4>
                    </div>
                    <p className="opacity-70" style={{ fontSize: '0.875rem' }}>
                      {project.insight}
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div
                  className="p-6"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                  }}
                >
                  <h4 className="mb-4" style={{ fontWeight: 700 }}>
                    📊 Measurable Impact
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div
                          className="mb-2"
                          style={{
                            fontSize: '2rem',
                            fontWeight: 800,
                            color: 'white',
                          }}
                        >
                          {result.value}
                        </div>
                        <div className="opacity-60" style={{ fontSize: '0.875rem' }}>
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
