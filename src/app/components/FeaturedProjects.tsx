import { useRef, useState } from 'react';
import { Trophy, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: '000',
    title: 'Graph Theoretic Analysis of Philippine Stock Market',
    subtitle: null,
    competition: null,
    placement: null,
    date: null,
    description:
      'Applied graph theory to model relationships between PSE equities, uncovering hidden market correlations through network topology and centrality metrics.',
    tags: ['Graph Theory', 'Python', 'Network Analysis', 'Finance'],
  },
  {
    id: '001',
    title: 'DokQ',
    subtitle: 'AI-powered medical queueing and triage system',
    competition: 'DLSU Hackercup',
    placement: '9th Place',
    date: 'Aug 2025',
    description:
      'Intelligent triage platform prioritizing patient queues using AI-driven severity scoring, reducing wait times and improving emergency care allocation.',
    tags: ['AI', 'Healthcare', 'Python', 'NLP'],
  },
  {
    id: '002',
    title: 'WorkSight',
    subtitle: 'Burnout & task monitoring dashboard with Agentic AI',
    competition: 'BPI DataWave',
    placement: '3rd Place',
    date: 'Oct 2025',
    description:
      'Real-time employee wellness dashboard powered by Agentic AI that detects burnout signals from productivity patterns and recommends proactive interventions.',
    tags: ['Agentic AI', 'Power BI', 'Dashboard', 'ML'],
  },
  {
    id: '003',
    title: 'KLIMA',
    subtitle: 'Climate resilience platform with IoT & community data',
    competition: 'UP Junior Data Science Challenge',
    placement: 'Participant',
    date: 'Oct 2025',
    description:
      'End-to-end climate resilience platform fusing weather forecasts, IoT sensor readings, and crowdsourced community data for evacuation planning.',
    tags: ['IoT', 'Forecasting', 'GIS', 'Python'],
  },
  {
    id: '004',
    title: 'ForgeSure',
    subtitle: 'SME operations with AI, ML & blockchain',
    competition: 'BulSU DOST LikhaIN',
    placement: 'Participant',
    date: 'Nov 2025',
    description:
      'Integrated operations platform for SMEs combining ML forecasts, geospatial supply chain monitoring, and blockchain-based transparency.',
    tags: ['Blockchain', 'Geospatial', 'ML', 'SME'],
  },
  {
    id: '005',
    title: 'SubaybayPh',
    subtitle: 'Maps flood control projects & community monitoring',
    competition: 'UP Hack the Flood',
    placement: 'Participant',
    date: 'Dec 2025',
    description:
      'Civic-tech platform mapping flood control infrastructure with real-time public reporting and community verification for government accountability.',
    tags: ['GIS', 'Civic Tech', 'React', 'Community'],
  },
  {
    id: '006',
    title: 'SARAI-SABI',
    subtitle: 'Offline-first agri-tech with USSD & voice alerts',
    competition: 'UPLB The Innovation Lab',
    placement: '7th Place',
    date: 'Mar 2026',
    description:
      'Offline-first mobile agri-platform for Filipino farmers with AI crop advisories, USSD reporting for low-connectivity areas, and voice-enabled alerts.',
    tags: ['Agri-tech', 'Offline-first', 'USSD', 'AI'],
  },
];

const isPlaced = (p: string | null) => !!p && p.includes('Place');

export default function FeaturedProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const scrollTo = (idx: number) => {
    if (!scrollRef.current) return;
    const clamped = Math.max(0, Math.min(projects.length - 1, idx));
    setActiveIdx(clamped);
    const child = scrollRef.current.children[clamped] as HTMLElement;
    if (child) {
      scrollRef.current.scrollTo({ left: child.offsetLeft - 24, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, children } = scrollRef.current;
    let closest = 0;
    let minDist = Infinity;
    Array.from(children).forEach((child, i) => {
      const el = child as HTMLElement;
      const dist = Math.abs(el.offsetLeft - scrollLeft - 24);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActiveIdx(closest);
  };

  return (
    <section id="projects" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 px-4">
          <p className="opacity-40 mb-2" style={{ fontSize: '0.75rem', fontFamily: 'monospace', letterSpacing: '0.15em' }}>
            FEATURED WORK
          </p>
          <h2 style={{ fontSize: '2rem', fontWeight: 600 }}>Projects & Competitions</h2>
          <p className="opacity-50 mt-2" style={{ fontSize: '0.95rem' }}>
            Proof-of-concept experiments turned into real solutions
          </p>
        </div>

        {/* Scroll track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto pb-4"
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingLeft: '24px',
            paddingRight: '24px',
            cursor: 'grab',
          }}
        >
          {projects.map((p, i) => (
            <div
              key={p.id}
              onClick={() => setActiveIdx(i)}
              style={{
                scrollSnapAlign: 'start',
                flexShrink: 0,
                width: 'clamp(280px, 75vw, 360px)',
                background: activeIdx === i ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${activeIdx === i ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.09)'}`,
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.3s, background 0.3s',
                position: 'relative',
              }}
            >
              {/* Top shimmer on active */}
              {activeIdx === i && (
                <div
                  className="absolute top-0 left-6 right-6"
                  style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    borderRadius: '1px',
                  }}
                />
              )}

              {/* ID */}
              <span style={{ fontSize: '0.62rem', fontFamily: 'monospace', opacity: 0.3, letterSpacing: '0.1em', marginBottom: '12px', display: 'block' }}>
                PROJ-{p.id}
              </span>

              {/* Title */}
              <h3 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: '1.35', marginBottom: p.subtitle ? '4px' : '12px' }}>
                {p.title}
              </h3>
              {p.subtitle && (
                <p style={{ fontSize: '0.77rem', opacity: 0.48, marginBottom: '12px', lineHeight: '1.45' }}>{p.subtitle}</p>
              )}

              {/* Competition */}
              {p.competition && (
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <div
                    className="flex items-center gap-1.5 px-2 py-1"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px' }}
                  >
                    <Trophy style={{ width: '11px', height: '11px', opacity: 0.6 }} />
                    <span style={{ fontSize: '0.69rem', fontFamily: 'monospace' }}>{p.competition}</span>
                  </div>
                  {p.placement && (
                    <span style={{
                      fontSize: '0.69rem',
                      padding: '2px 8px',
                      background: isPlaced(p.placement) ? 'rgba(255,255,255,0.13)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${isPlaced(p.placement) ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)'}`,
                      borderRadius: '6px',
                      fontWeight: isPlaced(p.placement) ? 700 : 400,
                    }}>
                      {p.placement}
                    </span>
                  )}
                  {p.date && (
                    <div className="flex items-center gap-1 opacity-35">
                      <Calendar style={{ width: '10px', height: '10px' }} />
                      <span style={{ fontSize: '0.68rem' }}>{p.date}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Description */}
              <p style={{ fontSize: '0.83rem', opacity: 0.58, lineHeight: '1.7', flex: 1, marginBottom: '16px' }}>
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.67rem',
                      padding: '2px 9px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.09)',
                      borderRadius: '20px',
                      opacity: 0.8,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6 px-6">
          {/* Prev */}
          <button
            onClick={() => scrollTo(activeIdx - 1)}
            disabled={activeIdx === 0}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '8px 16px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              opacity: activeIdx === 0 ? 0.3 : 1,
              cursor: activeIdx === 0 ? 'default' : 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => { if (activeIdx > 0) e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
          >
            <ChevronLeft style={{ width: '16px', height: '16px' }} />
            <span style={{ fontSize: '0.82rem' }}>Prev</span>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                style={{
                  width: i === activeIdx ? '22px' : '7px',
                  height: '7px',
                  borderRadius: '4px',
                  background: i === activeIdx ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => scrollTo(activeIdx + 1)}
            disabled={activeIdx === projects.length - 1}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '8px 16px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              opacity: activeIdx === projects.length - 1 ? 0.3 : 1,
              cursor: activeIdx === projects.length - 1 ? 'default' : 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => { if (activeIdx < projects.length - 1) e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
          >
            <span style={{ fontSize: '0.82rem' }}>Next</span>
            <ChevronRight style={{ width: '16px', height: '16px' }} />
          </button>
        </div>
      </div>

      {/* Hide scrollbar globally for this component */}
      <style>{`
        #projects [data-scroll-track]::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
