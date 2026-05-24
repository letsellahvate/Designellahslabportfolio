import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! (This is a demo form)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-center mb-4" style={{ fontSize: '2rem', fontWeight: 600 }}>
          Let's Connect
        </h2>
        <p className="text-center mb-12 opacity-50" style={{ fontSize: '0.95rem' }}>
          Got a project, research commission, or just want to say hi? I'm one message away.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div
            className="p-8"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(20px)',
              borderRadius: '16px',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 opacity-70">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-lg outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div>
                <label className="block mb-2 opacity-70">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-lg outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div>
                <label className="block mb-2 opacity-70">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-lg outline-none focus:border-white/40 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '8px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center space-y-4">
            {[
              {
                icon: <Mail className="w-7 h-7" />,
                label: 'Email',
                value: 'letsellahvate@gmail.com',
                href: 'mailto:letsellahvate@gmail.com',
              },
              {
                icon: <Phone className="w-7 h-7" />,
                label: 'Phone / GCash',
                value: '09651507869',
                href: 'tel:+639651507869',
              },
              {
                icon: <MapPin className="w-7 h-7" />,
                label: 'Location',
                value: 'Calumpit, Bulacan, Philippines',
                href: null,
              },
              {
                icon: <Github className="w-7 h-7" />,
                label: 'GitHub',
                value: '@ellahslab',
                href: 'https://github.com/ellahslab',
              },
              {
                icon: <Linkedin className="w-7 h-7" />,
                label: 'LinkedIn',
                value: 'Ellah Benerado',
                href: 'https://linkedin.com/in/ellah-benerado',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 flex items-center gap-4 transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '12px',
                  cursor: item.href ? 'pointer' : 'default',
                }}
                onClick={() => item.href && window.open(item.href, '_blank')}
                onMouseEnter={(e) => {
                  if (item.href) e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                }}
              >
                <div className="opacity-60">{item.icon}</div>
                <div>
                  <p className="opacity-50" style={{ fontSize: '0.75rem' }}>{item.label}</p>
                  <p style={{ fontWeight: 500 }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}