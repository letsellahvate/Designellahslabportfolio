import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Customer Churn Prediction',
    insight: 'Reduced churn by 23% using ensemble methods',
    tags: ['Python', 'XGBoost', 'Sklearn'],
    chartData: [
      { name: 'Baseline', value: 72 },
      { name: 'V1', value: 85 },
      { name: 'V2', value: 91 },
      { name: 'Final', value: 94 },
    ]
  },
  {
    title: 'Sales Forecasting Dashboard',
    insight: 'Improved forecast accuracy by 34% with time series analysis',
    tags: ['Python', 'Prophet', 'Streamlit'],
    chartData: [
      { name: 'Q1', value: 65 },
      { name: 'Q2', value: 78 },
      { name: 'Q3', value: 85 },
      { name: 'Q4', value: 92 },
    ]
  },
  {
    title: 'Sentiment Analysis Engine',
    insight: 'Analyzed 100K+ customer reviews with 89% accuracy',
    tags: ['NLP', 'BERT', 'PyTorch'],
    chartData: [
      { name: 'Positive', value: 45 },
      { name: 'Neutral', value: 30 },
      { name: 'Negative', value: 25 },
    ]
  },
  {
    title: 'Anomaly Detection System',
    insight: 'Detected fraudulent transactions with 96% precision',
    tags: ['Python', 'Isolation Forest', 'SQL'],
    chartData: [
      { name: 'Week 1', value: 12 },
      { name: 'Week 2', value: 8 },
      { name: 'Week 3', value: 15 },
      { name: 'Week 4', value: 6 },
    ]
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-center mb-12" style={{ fontSize: '2rem', fontWeight: 600 }}>
          Experiments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
