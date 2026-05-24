import { ChevronDown } from 'lucide-react';

export default function ScrollDivider() {
  const handleScroll = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-32 flex items-center justify-center">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <button
        onClick={handleScroll}
        className="relative z-10 p-3 rounded-full transition-all duration-300 animate-bounce"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </div>
  );
}
