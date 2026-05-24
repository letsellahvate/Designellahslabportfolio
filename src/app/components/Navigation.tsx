import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Lab', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(0,0,0,0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('#home')}
          className="transition-opacity hover:opacity-70"
          style={{ fontSize: '1.25rem', fontWeight: 700 }}
        >
          Ellah's Lab
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="transition-all hover:opacity-100 opacity-70 relative group"
            >
              {item.label}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full bg-green-500"
            style={{
              boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          />
          <span className="opacity-60" style={{ fontSize: '0.875rem' }}>Live</span>
        </div>
      </div>
    </nav>
  );
}