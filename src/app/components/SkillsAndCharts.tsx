import { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { CheckCircle2, Circle, Clock, Target, Heart, Sparkles, X, Copy, TrendingUp, Activity } from 'lucide-react';

const productivityData = [
  { week: 'W1', productivity: 65, stress: 40 },
  { week: 'W2', productivity: 75, stress: 50 },
  { week: 'W3', productivity: 45, stress: 80, note: 'Discovered a bug at 2AM' },
  { week: 'W4', productivity: 55, stress: 85, note: 'Spent 3 hrs fixing one line' },
  { week: 'W5', productivity: 85, stress: 45, note: 'Clean dataset achieved' },
  { week: 'W6', productivity: 95, stress: 30, note: 'Model accuracy improved' },
  { week: 'W7', productivity: 90, stress: 35 },
  { week: 'W8', productivity: 88, stress: 40 },
];

const currentTasks = [
  { task: 'Graduate from college', status: 'in-progress' },
  { task: 'Finish internship program', status: 'completed' },
  { task: 'Build personal portfolio website', status: 'completed' },
  { task: 'Complete thesis on ML applications', status: 'in-progress' },
  { task: 'Learn advanced deep learning', status: 'pending' },
  { task: 'Contribute to open source projects', status: 'pending' },
];

const goals2026 = [
  'Land first full-time data science role',
  'Master MLOps and deployment',
  'Publish a research paper',
  'Build 3 production-ready ML projects',
  'Speak at a tech conference',
];

const MiniTooltip = ({ active, payload, label, color }: any) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    return (
      <div style={{
        background: 'rgba(8,8,8,0.97)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '8px',
        padding: '8px 12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      }}>
        <p style={{ fontSize: '0.7rem', opacity: 0.45, letterSpacing: '0.06em', marginBottom: '2px' }}>{label}</p>
        <p style={{ fontSize: '0.95rem', fontWeight: 700, color }}>{payload[0].value}%</p>
        {d.note && <p style={{ fontSize: '0.72rem', fontStyle: 'italic', opacity: 0.55, marginTop: '4px', maxWidth: '140px', lineHeight: 1.4 }}>💬 {d.note}</p>}
      </div>
    );
  }
  return null;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || !payload.length) return null;
  const note = payload[0]?.payload?.note;
  return (
    <div style={{
      background: 'rgba(6,6,6,0.97)',
      border: '1px solid rgba(255,255,255,0.15)',
      borderRadius: '10px',
      padding: '10px 14px',
      minWidth: '160px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
    }}>
      <p style={{ fontSize: '0.7rem', opacity: 0.4, letterSpacing: '0.08em', marginBottom: '8px', fontFamily: 'monospace' }}>{label}</p>
      {payload.map((entry: any) => (
        <div key={entry.dataKey} className="flex items-center justify-between gap-6 mb-1">
          <div className="flex items-center gap-2">
            <div style={{
              width: '20px', height: '2px',
              background: entry.dataKey === 'productivity' ? '#ffffff' : 'transparent',
              borderTop: entry.dataKey === 'stress' ? '2px dashed #999999' : 'none',
            }} />
            <span style={{ fontSize: '0.78rem', opacity: 0.7, textTransform: 'capitalize' }}>{entry.dataKey}</span>
          </div>
          <span style={{ fontSize: '0.88rem', fontWeight: 700, color: entry.dataKey === 'productivity' ? '#ffffff' : '#999999' }}>
            {entry.value}%
          </span>
        </div>
      ))}
      {note && (
        <p style={{ fontSize: '0.72rem', fontStyle: 'italic', opacity: 0.5, marginTop: '8px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.08)', lineHeight: 1.4 }}>
          💬 {note}
        </p>
      )}
    </div>
  );
};

export default function SkillsAndCharts() {
  const [cheers, setCheers] = useState(() => {
    if (typeof window !== 'undefined') {
      return parseInt(localStorage.getItem('ellahCheers') || '0');
    }
    return 0;
  });
  const [hasCheared, setHasCheered] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('hasCheared') === 'true';
    }
    return false;
  });
  const [showHearts, setShowHearts] = useState(false);
  const [showGCash, setShowGCash] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText('09651507869').then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }).catch(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
      } else { setCopied(true); setTimeout(() => setCopied(false), 2000); }
    } catch { setCopied(true); setTimeout(() => setCopied(false), 2000); }
  };

  const handleCheer = () => {
    if (hasCheared) return;
    const newCheers = cheers + 1;
    setCheers(newCheers);
    setHasCheered(true);
    setShowHearts(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ellahCheers', newCheers.toString());
      localStorage.setItem('hasCheared', 'true');
    }
    setTimeout(() => setShowHearts(false), 2000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="w-4 h-4" />;
      case 'in-progress': return <Circle className="w-4 h-4" style={{ fill: 'rgba(255,255,255,0.5)' }} />;
      default: return <Circle className="w-4 h-4 opacity-30" />;
    }
  };

  const avgProd = Math.round(productivityData.reduce((a, b) => a + b.productivity, 0) / productivityData.length);
  const avgStress = Math.round(productivityData.reduce((a, b) => a + b.stress, 0) / productivityData.length);

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="opacity-40 mb-2" style={{ fontSize: '0.75rem', fontFamily: 'monospace', letterSpacing: '0.15em' }}>
            LIVE DASHBOARD
          </p>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Inside the Lab
          </h2>
          <p className="opacity-50" style={{ fontSize: '0.95rem' }}>
            Real-time glimpse into what I'm building, feeling, and chasing
          </p>
        </div>

        {/* Tasks and Goals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Current Tasks */}
          <div className="p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)', borderRadius: '16px' }}>
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-5 h-5 opacity-60" />
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>What I'm Up To</h3>
            </div>
            <div className="space-y-3 mb-6">
              {currentTasks.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 transition-all duration-200 hover:translate-x-1">
                  {getStatusIcon(item.status)}
                  <span className={item.status === 'completed' ? 'line-through opacity-40' : ''} style={{ fontSize: '0.9rem' }}>
                    {item.task}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10 relative">
              {showHearts && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  {[...Array(8)].map((_, i) => (
                    <Heart key={i} className="absolute animate-ping" style={{ width: '20px', height: '20px', fill: 'white', opacity: 0.8, animation: `float 1.5s ease-out ${i * 0.1}s`, transform: `translate(${Math.cos(i * 45) * 40}px, ${Math.sin(i * 45) * 40}px)` }} />
                  ))}
                </div>
              )}
              <button onClick={handleCheer} disabled={hasCheared} className="w-full py-3 flex items-center justify-center gap-2 transition-all duration-300"
                style={{ background: hasCheared ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: '8px', cursor: hasCheared ? 'not-allowed' : 'pointer', opacity: hasCheared ? 0.7 : 1 }}
                onMouseEnter={(e) => { if (!hasCheared) e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                onMouseLeave={(e) => { if (!hasCheared) e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
              >
                <Heart className="w-5 h-5" style={{ fill: hasCheared ? 'white' : 'none' }} />
                <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{hasCheared ? 'Thanks for the support! 🤍' : 'Send me some motivation'}</span>
              </button>
              <p className="text-center mt-3 opacity-40" style={{ fontSize: '0.75rem' }}>
                {cheers} {cheers === 1 ? 'visitor has' : 'visitors have'} cheered me on
              </p>
            </div>
          </div>

          {/* 2026 Goals */}
          <div className="p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)', borderRadius: '16px' }}>
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-5 h-5 opacity-60" />
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>2026 Goals</h3>
            </div>
            <div className="space-y-3 mb-6">
              {goals2026.map((goal, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 transition-all duration-200 hover:bg-white/5 rounded-lg">
                  <Sparkles className="w-4 h-4 mt-0.5 opacity-50 flex-shrink-0" />
                  <span style={{ fontSize: '0.9rem' }}>{goal}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10">
              <button onClick={() => setShowGCash(true)} className="w-full py-3 flex items-center justify-center gap-2 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: '8px' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
              >
                <Sparkles className="w-5 h-5" />
                <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Help me achieve these goals</span>
              </button>
            </div>

            {showGCash && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' }} onClick={() => setShowGCash(false)}>
                <div className="relative max-w-md w-full p-8" style={{ background: 'rgba(0,0,0,0.95)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '16px' }} onClick={(e) => e.stopPropagation()}>
                  <button onClick={() => setShowGCash(false)} className="absolute top-4 right-4 p-2 transition-all hover:bg-white/10 rounded-full"><X className="w-5 h-5" /></button>
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-70" />
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Support My Journey</h3>
                    <p className="mb-6 opacity-70" style={{ fontSize: '0.875rem' }}>Help me achieve my 2026 goals via GCash</p>
                    <div className="p-4 mb-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px' }}>
                      <p className="mb-2 opacity-60" style={{ fontSize: '0.75rem' }}>GCash Number</p>
                      <p style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'monospace' }}>09651507869</p>
                    </div>
                    <button onClick={copyToClipboard} className="w-full py-3 flex items-center justify-center gap-2 transition-all mb-4"
                      style={{ background: copied ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '8px' }}>
                      <Copy className="w-4 h-4" />
                      {copied ? 'Copied!' : 'Copy Number'}
                    </button>
                    <p className="opacity-60" style={{ fontSize: '0.75rem', fontStyle: 'italic' }}>Every little bit helps me level up and build more cool projects!</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Productivity & Stress Trend — single chart, 2 lines */}
        <div className="p-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)', borderRadius: '16px' }}>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <p style={{ fontSize: '0.7rem', fontFamily: 'monospace', letterSpacing: '0.12em', opacity: 0.4, marginBottom: '4px' }}>
                WEEKLY METRICS — 8 WEEKS
              </p>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Productivity & Stress Trend</h3>
            </div>
            <div className="flex gap-3">
              <div className="px-4 py-2 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px' }}>
                <div className="flex items-center justify-center gap-1.5 mb-0.5">
                  <TrendingUp style={{ width: '11px', height: '11px', opacity: 0.5 }} />
                  <p style={{ fontSize: '0.63rem', opacity: 0.4, letterSpacing: '0.06em' }}>AVG PROD</p>
                </div>
                <p style={{ fontSize: '1.05rem', fontWeight: 700 }}>{avgProd}%</p>
              </div>
              <div className="px-4 py-2 text-center" style={{ background: 'rgba(130,130,130,0.08)', border: '1px solid rgba(130,130,130,0.15)', borderRadius: '10px' }}>
                <div className="flex items-center justify-center gap-1.5 mb-0.5">
                  <Activity style={{ width: '11px', height: '11px', opacity: 0.5 }} />
                  <p style={{ fontSize: '0.63rem', opacity: 0.4, letterSpacing: '0.06em' }}>AVG STRESS</p>
                </div>
                <p style={{ fontSize: '1.05rem', fontWeight: 700, color: '#999999' }}>{avgStress}%</p>
              </div>
            </div>
          </div>

          {/* Single chart, 2 lines */}
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={productivityData} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="2 6" stroke="rgba(255,255,255,0.07)" vertical={false} />
              <XAxis
                dataKey="week"
                tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 11, fontFamily: 'monospace' }}
                tickLine={false}
                axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              />
              <YAxis
                tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 11, fontFamily: 'monospace' }}
                tickLine={false}
                axisLine={false}
                domain={[0, 100]}
                tickFormatter={(v: number) => `${v}%`}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: '4 4' }} />
              {/* Productivity — solid white */}
              <Line
                type="monotone"
                dataKey="productivity"
                stroke="#ffffff"
                strokeWidth={2.5}
                dot={{ r: 4, fill: '#ffffff', strokeWidth: 0 }}
                activeDot={{ r: 6, fill: '#ffffff', stroke: 'rgba(255,255,255,0.3)', strokeWidth: 4 }}
                isAnimationActive={true}
              />
              {/* Stress — gray dashed */}
              <Line
                type="monotone"
                dataKey="stress"
                stroke="#999999"
                strokeWidth={2.5}
                strokeDasharray="8 4"
                dot={{ r: 4, fill: '#999999', strokeWidth: 0 }}
                activeDot={{ r: 6, fill: '#999999', stroke: 'rgba(153,153,153,0.35)', strokeWidth: 4 }}
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="flex items-center justify-center gap-8 mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="flex items-center gap-2.5">
              <svg width="28" height="4" viewBox="0 0 28 4">
                <line x1="0" y1="2" x2="28" y2="2" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>Productivity</span>
            </div>
            <div className="flex items-center gap-2.5">
              <svg width="28" height="4" viewBox="0 0 28 4">
                <line x1="0" y1="2" x2="28" y2="2" stroke="#999999" strokeWidth="2.5" strokeDasharray="8 4" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>Stress Level</span>
            </div>
          </div>

          <p className="text-center mt-4 opacity-30" style={{ fontSize: '0.7rem', fontFamily: 'monospace' }}>
            Self-reported · daily journaling &amp; productivity apps · hover for weekly notes
          </p>
        </div>
      </div>
    </section>
  );
}