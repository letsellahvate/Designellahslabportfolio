import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  insight: string;
  tags: string[];
  chartData: { name: string; value: number }[];
}

export default function ProjectCard({ title, insight, tags, chartData }: ProjectCardProps) {
  return (
    <div
      className="p-6 transition-all duration-300 group cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.15)',
        backdropFilter: 'blur(20px)',
        borderRadius: '12px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
      }}
    >
      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>
        {title}
      </h3>
      <p className="opacity-70 mb-4">{insight}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '6px',
              fontSize: '0.875rem',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mb-4" style={{ height: '80px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <Bar dataKey="value" fill="rgba(255,255,255,0.3)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-3">
        <button
          className="flex-1 py-2 flex items-center justify-center gap-2 transition-all"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '6px',
          }}
        >
          <ExternalLink className="w-4 h-4" />
          View Project
        </button>
        <button
          className="flex-1 py-2 flex items-center justify-center gap-2 transition-all"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '6px',
          }}
        >
          <Github className="w-4 h-4" />
          GitHub
        </button>
      </div>
    </div>
  );
}
