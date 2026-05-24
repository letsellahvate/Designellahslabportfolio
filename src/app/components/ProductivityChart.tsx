import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { week: 'Week 1', productivity: 65, stress: 40 },
  { week: 'Week 2', productivity: 75, stress: 50 },
  { week: 'Week 3', productivity: 45, stress: 80, note: 'Discovered a bug at 2AM' },
  { week: 'Week 4', productivity: 55, stress: 85, note: 'Spent 3 hrs fixing one line' },
  { week: 'Week 5', productivity: 85, stress: 45, note: 'Clean dataset achieved' },
  { week: 'Week 6', productivity: 95, stress: 30, note: 'Model accuracy improved' },
  { week: 'Week 7', productivity: 90, stress: 35 },
  { week: 'Week 8', productivity: 88, stress: 40 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div
        className="p-3"
        style={{
          background: 'rgba(0,0,0,0.9)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '8px',
        }}
      >
        <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{data.week}</p>
        <p className="opacity-70">Productivity: {data.productivity}%</p>
        <p className="opacity-70">Stress: {data.stress}%</p>
        {data.note && <p className="mt-2 italic opacity-90" style={{ fontSize: '0.875rem' }}>{data.note}</p>}
      </div>
    );
  }
  return null;
};

export default function ProductivityChart() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-center mb-12" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
          Mood / Productivity Chart
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
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.1)"
              />
              <XAxis
                dataKey="week"
                stroke="rgba(255,255,255,0.5)"
                tick={{ fill: '#ffffff' }}
              />
              <YAxis
                stroke="rgba(255,255,255,0.5)"
                tick={{ fill: '#ffffff' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="productivity"
                stroke="#ffffff"
                strokeWidth={2}
                dot={{ fill: '#ffffff', r: 4 }}
                name="Productivity"
              />
              <Line
                type="monotone"
                dataKey="stress"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: 'rgba(255,255,255,0.4)', r: 4 }}
                name="Stress"
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="flex justify-center gap-8 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-white" />
              <span className="opacity-70">Productivity</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 opacity-40" style={{ background: 'white', borderTop: '2px dashed white' }} />
              <span className="opacity-70">Stress</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
