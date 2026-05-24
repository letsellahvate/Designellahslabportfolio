import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Why Clean Data Beats Fancy Algorithms',
    excerpt: 'After 3 years in data science, I\'ve learned that spending 80% of your time on data cleaning isn\'t a bug—it\'s a feature. Here\'s why...',
    date: '2026-04-15',
    readTime: '5 min read',
    tags: ['Data Cleaning', 'Best Practices']
  },
  {
    title: 'My Journey from Zero to ML Engineer',
    excerpt: 'From struggling with basic Python to deploying production ML models. The mistakes I made and lessons learned along the way.',
    date: '2026-04-01',
    readTime: '8 min read',
    tags: ['Career', 'Learning']
  },
  {
    title: 'Building Interpretable ML Models',
    excerpt: 'High accuracy means nothing if stakeholders can\'t understand your model. How I balance performance with explainability.',
    date: '2026-03-20',
    readTime: '6 min read',
    tags: ['Machine Learning', 'Business']
  },
  {
    title: 'Coffee, Code, and Debugging at 2AM',
    excerpt: 'A candid look at what really happens when your model works in dev but fails spectacularly in production.',
    date: '2026-03-10',
    readTime: '4 min read',
    tags: ['Debugging', 'Real Talk']
  },
];

export default function BlogPosts() {
  return (
    <section id="blog" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-center mb-4" style={{ fontSize: '2rem', fontWeight: 600 }}>
          Thoughts & Learnings
        </h2>
        <p className="text-center mb-12 opacity-60" style={{ fontSize: '1rem' }}>
          Where I document my journey, experiments, and occasional wins
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(20px)',
                borderRadius: '16px',
              }}
            >
              <div className="flex items-center gap-4 mb-4 opacity-60">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span style={{ fontSize: '0.75rem' }}>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span style={{ fontSize: '0.75rem' }}>{post.readTime}</span>
                </div>
              </div>

              <h3
                className="mb-3 group-hover:opacity-100 transition-opacity"
                style={{ fontSize: '1.25rem', fontWeight: 600, opacity: 0.95 }}
              >
                {post.title}
              </h3>

              <p className="mb-4 opacity-70" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1"
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="px-8 py-3 transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
            }}
          >
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
}