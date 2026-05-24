import { Calculator, FlaskConical, BrainCircuit, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: <Calculator className="w-8 h-8" />,
    label: 'MATH TUTOR',
    title: 'Mathematics Tutoring',
    tagline: 'From algebra to calculus — I make math click.',
    description:
      'One-on-one tutoring sessions covering algebra, trigonometry, calculus, statistics, and physics. I\'ve helped local and international students for 5+ years, including coaching for national math competitions.',
    offerings: [
      'Algebra & Trigonometry',
      'Calculus (Differential & Integral)',
      'Statistics & Probability',
      'Physics',
      'Competition Coaching',
    ],
    cta: 'Book a Session',
    ctaHref: '#contact',
  },
  {
    icon: <FlaskConical className="w-8 h-8" />,
    label: 'RESEARCH COMMISSION',
    title: 'Research & Analysis',
    tagline: 'Turn your raw data into publishable insights.',
    description:
      'I assist in research projects from data collection to final write-up — statistical analysis, data visualization, EDA, technical documentation, and reporting for academic or industry use.',
    offerings: [
      'Statistical Analysis & EDA',
      'Data Visualization (Power BI, Python)',
      'Technical Documentation',
      'Research Writing & Reports',
      'DOST / Academic Research Support',
    ],
    cta: 'Commission Research',
    ctaHref: '#contact',
  },
  {
    icon: <BrainCircuit className="w-8 h-8" />,
    label: 'DATA & AI',
    title: 'Data Science & AI Solutions',
    tagline: 'ML pipelines, dashboards, and intelligent systems — built for impact.',
    description:
      'End-to-end data science consulting and development: from exploratory analysis and predictive modeling to deploying agentic AI workflows and interactive dashboards for real decision-making.',
    offerings: [
      'Machine Learning & Predictive Modeling',
      'Data Pipeline & Automation (n8n)',
      'Power BI / Streamlit Dashboards',
      'NLP & AI Application Development',
      'Hackathon & Project Collaboration',
    ],
    cta: 'Start a Project',
    ctaHref: '#contact',
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="opacity-40 mb-2" style={{ fontSize: '0.75rem', fontFamily: 'monospace', letterSpacing: '0.15em' }}>
            WHAT I CAN DO
          </p>
          <h2 style={{ fontSize: '2rem', fontWeight: 600 }}>
            How I Can Help
          </h2>
          <p className="opacity-50 mt-2" style={{ fontSize: '0.95rem' }}>
            Three ways to work with me — pick what fits your need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative flex flex-col overflow-hidden transition-all duration-300"
              style={{
                background: hovered === idx ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${hovered === idx ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)'}`,
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                transform: hovered === idx ? 'translateY(-4px)' : 'none',
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Top accent */}
              {hovered === idx && (
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)' }}
                />
              )}

              <div className="p-7 flex-1 flex flex-col">
                {/* Label + Icon */}
                <div className="flex items-start justify-between mb-5">
                  <span
                    className="px-2 py-1"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '6px',
                      fontSize: '0.65rem',
                      fontFamily: 'monospace',
                      letterSpacing: '0.1em',
                      opacity: 0.7,
                    }}
                  >
                    {service.label}
                  </span>
                  <div className="opacity-50">{service.icon}</div>
                </div>

                <h3 className="mb-1" style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                  {service.title}
                </h3>
                <p className="mb-4 opacity-50" style={{ fontSize: '0.85rem', fontStyle: 'italic' }}>
                  {service.tagline}
                </p>

                <p className="opacity-70 mb-5 flex-1" style={{ fontSize: '0.875rem', lineHeight: '1.7' }}>
                  {service.description}
                </p>

                {/* Offerings list */}
                <ul className="space-y-2 mb-7">
                  {service.offerings.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span className="opacity-30" style={{ fontSize: '0.5rem' }}>◆</span>
                      <span className="opacity-70" style={{ fontSize: '0.825rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={service.ctaHref}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center justify-between px-5 py-3 transition-all duration-200 group"
                  style={{
                    background: hovered === idx ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    color: 'white',
                  }}
                >
                  <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{service.cta}</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}