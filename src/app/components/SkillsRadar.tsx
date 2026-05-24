import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const skillsData = [
  { skill: 'Python', value: 95 },
  { skill: 'SQL', value: 88 },
  { skill: 'Machine Learning', value: 92 },
  { skill: 'Data Viz', value: 85 },
  { skill: 'Statistics', value: 90 },
  { skill: 'Data Cleaning', value: 97 },
];

export default function SkillsRadar() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full text-center">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem' }}>
          Skills Matrix
        </h2>

        <div
          className="p-8"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
          }}
        >
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={skillsData}>
              <PolarGrid
                stroke="rgba(255,255,255,0.15)"
                strokeWidth={1}
              />
              <PolarAngleAxis
                dataKey="skill"
                tick={{ fill: '#ffffff', fontSize: 14 }}
              />
              <Radar
                dataKey="value"
                stroke="#ffffff"
                fill="rgba(255,255,255,0.2)"
                strokeWidth={2}
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
