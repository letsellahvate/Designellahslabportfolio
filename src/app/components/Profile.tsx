import { MapPin, Mail, Phone, Briefcase, GraduationCap, Users, User } from 'lucide-react';
import { useState } from 'react';

const workExperience = [
  {
    company: 'Eskwelabs',
    role: 'Data Science Intern',
    period: 'Oct – Dec 2025',
    type: 'Internship',
    bullets: [
      'Engineered an n8n automation pipeline to programmatically collect, transform, and aggregate hackathon feedback for structured analysis.',
      'Performed data preprocessing, EDA, and visualization in Power BI on participant responses to extract insights and optimize future hackathon strategies.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Mathematics Tutor',
    period: '2017 – Present',
    type: 'Freelance',
    bullets: [
      'Provided one-on-one tutoring for local and international students covering algebra, trigonometry, calculus, statistics, and physics.',
      'Coached students for national math competitions, strengthening problem-solving skills and improving performance outcomes.',
    ],
  },
  {
    company: 'Pierre and Paul Solutions Inc.',
    role: 'IT Intern',
    period: 'May – Jul 2024',
    location: 'Mandaluyong, Manila',
    type: 'Internship',
    bullets: [
      'Managed and updated 1,000+ candidate records using Microsoft Excel and Workday CRM, ensuring 100% data accuracy across recruitment stages.',
      'Streamlined BPO recruitment workflows, accelerating candidate pipeline visibility by 30%.',
      'Designed a Power BI dashboard to visualize key recruitment KPIs for HR managers.',
    ],
  },
  {
    company: 'Bulacan State University',
    role: 'Student Research Assistant',
    period: 'Sep 2023 – Jul 2025',
    location: 'Malolos, Bulacan',
    type: 'Part-time',
    bullets: [
      'Supported the Math Department Head in a DOST-funded research project.',
      'Prepared technical documentation, reports, instructional materials, and visuals.',
    ],
  },
  {
    company: "Earl's Carwash",
    role: 'Cashier / Operations Assistant',
    period: 'Jun 2023 – 2024',
    location: 'Malolos, Bulacan',
    type: 'Part-time',
    bullets: [
      'Managed client flow and ensured timely service for an average of 50+ vehicles per day.',
      'Handled customer inquiries, payments, and service coordination.',
    ],
  },
  {
    company: 'CEQAT Boosting Site',
    role: 'Co-Founder',
    period: 'Aug 2020 – 2022',
    type: 'Entrepreneurship',
    bullets: [
      'Co-founded a platform delivering social media boosting services to enhance clients\' online presence.',
      'Successfully supported 200+ accounts with a 95% customer satisfaction rate.',
    ],
  },
];

const typeColors: Record<string, string> = {
  Internship: 'rgba(255,255,255,0.85)',
  Freelance: 'rgba(255,255,255,0.65)',
  'Part-time': 'rgba(255,255,255,0.55)',
  Entrepreneurship: 'rgba(255,255,255,0.75)',
};

export default function Profile() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="opacity-40 mb-2" style={{ fontSize: '0.75rem', fontFamily: 'monospace', letterSpacing: '0.15em' }}>
            ABOUT
          </p>
          <h2 style={{ fontSize: '2rem', fontWeight: 600 }}>Meet Ellah</h2>
        </div>

        {/* Identity card */}
        <div
          className="p-8 mb-12"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            {/* Photo placeholder */}
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <div
                className="flex items-center justify-center relative overflow-hidden"
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                {/* Placeholder pattern */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 40%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
                  }}
                />
                <div className="relative flex flex-col items-center gap-1.5">
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <User style={{ width: '20px', height: '20px', opacity: 0.5 }} />
                  </div>
                  <span style={{ fontSize: '0.6rem', opacity: 0.35, letterSpacing: '0.06em', fontFamily: 'monospace' }}>PHOTO</span>
                </div>
              </div>
              {/* Stats below photo */}
              <div className="flex md:flex-col gap-2 w-full">
                {[
                  { value: '6+', label: 'Competitions' },
                  { value: '5+', label: 'Yrs Tutoring' },
                  { value: '200+', label: 'Students' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 text-center py-2"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '10px',
                    }}
                  >
                    <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>{stat.value}</div>
                    <div className="opacity-45" style={{ fontSize: '0.65rem' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>
                Ellah D. Benerado
              </h3>
              <p className="opacity-55 mb-5" style={{ fontSize: '0.95rem' }}>
                Junior Data Scientist · BS Mathematics (Computer Science)
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {[
                  { icon: <MapPin className="w-3.5 h-3.5" />, text: 'Calumpit, Bulacan, Philippines' },
                  { icon: <Mail className="w-3.5 h-3.5" />, text: 'letsellahvate@gmail.com' },
                  { icon: <Phone className="w-3.5 h-3.5" />, text: '09651507869' },
                  { icon: <GraduationCap className="w-3.5 h-3.5" />, text: 'Bulacan State University · 2023–Present' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 opacity-60">
                    {item.icon}
                    <span style={{ fontSize: '0.82rem' }}>{item.text}</span>
                  </div>
                ))}
              </div>

              <div
                className="p-5"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  borderRadius: '12px',
                }}
              >
                <p className="opacity-30 mb-2" style={{ fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.12em' }}>
                  PROFESSIONAL SUMMARY
                </p>
                <p className="opacity-75" style={{ fontSize: '0.875rem', lineHeight: '1.75' }}>
                  Junior Data Scientist with hands-on experience in Machine Learning, Predictive Modeling, SQL, and Python.
                  Skilled in developing scalable data-driven solutions, performing statistical analysis, and building data
                  visualizations to support business decision-making. Passionate about applying the end-to-end ML lifecycle
                  within data-first organizations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience — Timeline */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-5 h-5 opacity-50" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Work Experience</h3>
          </div>

          <div className="relative">
            {/* Vertical timeline track */}
            <div
              className="absolute left-0 top-2 bottom-2"
              style={{ width: '1px', background: 'rgba(255,255,255,0.1)', marginLeft: '7px' }}
            />

            <div className="space-y-0">
              {workExperience.map((job, idx) => {
                const isOpen = expanded === idx;
                return (
                  <div key={idx} className="relative pl-10">
                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 transition-all duration-300"
                      style={{
                        top: '18px',
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        background: isOpen ? '#ffffff' : 'rgba(255,255,255,0.15)',
                        border: `2px solid ${isOpen ? '#ffffff' : 'rgba(255,255,255,0.25)'}`,
                        boxShadow: isOpen ? '0 0 12px rgba(255,255,255,0.3)' : 'none',
                      }}
                    />

                    {/* Entry */}
                    <button
                      className="w-full text-left py-5 group"
                      style={{
                        borderBottom: idx < workExperience.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                      }}
                      onClick={() => setExpanded(isOpen ? null : idx)}
                    >
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{job.role}</span>
                            <span
                              style={{
                                fontSize: '0.65rem',
                                padding: '1px 7px',
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '20px',
                                color: typeColors[job.type] ?? 'rgba(255,255,255,0.6)',
                                letterSpacing: '0.04em',
                              }}
                            >
                              {job.type}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 opacity-50" style={{ fontSize: '0.82rem' }}>
                            <span>{job.company}</span>
                            {job.location && (
                              <>
                                <span style={{ opacity: 0.4 }}>·</span>
                                <span>{job.location}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontFamily: 'monospace',
                            opacity: 0.4,
                            whiteSpace: 'nowrap',
                            paddingTop: '2px',
                          }}
                        >
                          {job.period}
                        </span>
                      </div>

                      {/* Expanded bullets */}
                      {isOpen && (
                        <div className="mt-4 space-y-2.5">
                          {job.bullets.map((b, bi) => (
                            <div key={bi} className="flex items-start gap-3">
                              <div
                                style={{
                                  width: '4px',
                                  height: '4px',
                                  borderRadius: '50%',
                                  background: 'rgba(255,255,255,0.4)',
                                  marginTop: '8px',
                                  flexShrink: 0,
                                }}
                              />
                              <p style={{ fontSize: '0.85rem', opacity: 0.7, lineHeight: '1.7' }}>{b}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Education + Leadership row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education */}
          <div
            className="p-6"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: '16px',
            }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <GraduationCap className="w-4 h-4 opacity-50" />
              <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Education</h3>
            </div>
            <p style={{ fontWeight: 600 }}>Bulacan State University</p>
            <p className="opacity-65 mt-1" style={{ fontSize: '0.875rem' }}>
              BS Mathematics Major in Computer Science
            </p>
            <p className="opacity-40 mt-1" style={{ fontSize: '0.78rem', fontFamily: 'monospace' }}>
              Aug 2023 – Present · Malolos City, Bulacan
            </p>
          </div>

          {/* Leadership */}
          <div
            className="p-6"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: '16px',
            }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <Users className="w-4 h-4 opacity-50" />
              <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Leadership</h3>
            </div>
            <p style={{ fontWeight: 600 }}>Computer Science Society – BulSU</p>
            <p className="opacity-65 mt-1" style={{ fontSize: '0.875rem' }}>Founder & President</p>
            <p className="opacity-40 mt-1 mb-3" style={{ fontSize: '0.78rem', fontFamily: 'monospace' }}>Mar 2025 – Present</p>
            <ul className="space-y-2">
              {[
                'Founded and scaled a premier student org for CS enthusiasts.',
                'Forged industry partnerships providing certifications and mentorship.',
                'Mentored students in collaboration, creativity, and project execution.',
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.35)', marginTop: '9px', flexShrink: 0 }} />
                  <span className="opacity-60" style={{ fontSize: '0.8rem', lineHeight: '1.65' }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
