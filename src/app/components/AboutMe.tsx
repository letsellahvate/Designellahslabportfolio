import { useEffect, useRef, useState } from 'react';
import { Sparkles, Cpu, Zap, Brain, Lightbulb } from 'lucide-react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  label: string;
  description: string;
  layer: number;
}

export default function AboutMe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [currentInsight, setCurrentInsight] = useState<string>('');

  const thoughts = [
    {
      label: 'ML Algorithms',
      category: 'tech',
      description: 'From linear regression to deep neural networks, I love exploring different approaches to solve problems'
    },
    {
      label: 'Coffee',
      category: 'fuel',
      description: 'My debugging companion. Current record: 6 cups in a single model training session'
    },
    {
      label: 'Data Patterns',
      category: 'passion',
      description: 'The hidden stories in data that most people miss - that\'s where the magic happens'
    },
    {
      label: 'Python',
      category: 'tech',
      description: 'My primary language for turning ideas into working solutions'
    },
    {
      label: 'Edge Cases',
      category: 'obsession',
      description: 'The 1% of scenarios that break everything. I find them oddly satisfying to solve'
    },
    {
      label: 'Visualization',
      category: 'passion',
      description: 'Making complex data accessible through beautiful, intuitive charts'
    },
    {
      label: 'Learning',
      category: 'passion',
      description: 'Constantly evolving - new techniques, tools, and perspectives keep me energized'
    },
    {
      label: 'Statistics',
      category: 'tech',
      description: 'The mathematical foundation that makes data science reliable and rigorous'
    },
    {
      label: 'Debugging',
      category: 'reality',
      description: 'Where I spend 40% of my time. It\'s basically detective work with code'
    },
    {
      label: 'Innovation',
      category: 'passion',
      description: 'Finding creative solutions to problems that haven\'t been solved yet'
    },
    {
      label: 'Neural Networks',
      category: 'tech',
      description: 'Fascinated by how they mirror biological learning and solve complex problems'
    },
    {
      label: 'Data Cleaning',
      category: 'reality',
      description: 'The unglamorous 60% of data science that makes everything else possible'
    },
    {
      label: 'Pandas',
      category: 'tech',
      description: 'My go-to tool for data manipulation and analysis'
    },
    {
      label: 'SQL',
      category: 'tech',
      description: 'The language that connects me to the data I need'
    },
    {
      label: 'Curiosity',
      category: 'passion',
      description: 'The driving force behind every question I ask and every dataset I explore'
    },
    {
      label: 'Feature Engineering',
      category: 'tech',
      description: 'The art of extracting signal from noise'
    },
    {
      label: 'Model Evaluation',
      category: 'tech',
      description: 'Making sure models actually work in the real world, not just on paper'
    },
    {
      label: 'Optimization',
      category: 'obsession',
      description: 'Always seeking that extra 1% improvement in model performance'
    },
    {
      label: 'Collaboration',
      category: 'passion',
      description: 'Best insights come from diverse perspectives working together'
    },
    {
      label: 'Problem Solving',
      category: 'passion',
      description: 'The thrill of breaking down complex challenges into solvable pieces'
    },
  ];

  const randomInsights = [
    "Most productive between 10PM–2AM",
    "A sapiosexual",
    "Currently learning French",
    "Listens to lo-fi beats while coding",
    "Has a notebook full of ML project ideas",
    "Prefers dark mode for everything",
    "Believes clean data > fancy algorithms",
    "Can explain p-values to anyone",
    "Tea only when coffee runs out",
    "Favorite color: #000000",
    "Debugs faster with background music",
    "Reads research papers for fun"
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Reinitialize nodes centered after resize
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      return thoughts.map((thought, i) => {
        // Create organic clustering around center
        const angle = (i / thoughts.length) * Math.PI * 2;
        const radiusVariation = Math.random() * 100 + 100;
        const angleOffset = (Math.random() - 0.5) * 0.8;

        return {
          x: centerX + Math.cos(angle + angleOffset) * radiusVariation,
          y: centerY + Math.sin(angle + angleOffset) * radiusVariation,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          label: thought.label,
          description: thought.description,
          layer: Math.floor(i / 3),
        };
      });
    };

    const initialNodes = resizeCanvas();
    setNodes(initialNodes);

    const handleResize = () => {
      const newNodes = resizeCanvas();
      setNodes(newNodes);
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw organic connections like dendrites and axons
      for (let i = 0; i < initialNodes.length; i++) {
        for (let j = i + 1; j < initialNodes.length; j++) {
          const dx = initialNodes[i].x - initialNodes[j].x;
          const dy = initialNodes[i].y - initialNodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Create brain-like connections with varying thresholds
          if (dist < 200) {
            ctx.beginPath();

            // Create curved path like neural dendrites
            const midX = (initialNodes[i].x + initialNodes[j].x) / 2;
            const midY = (initialNodes[i].y + initialNodes[j].y) / 2;
            const offsetX = (Math.random() - 0.5) * 30;
            const offsetY = (Math.random() - 0.5) * 30;

            ctx.moveTo(initialNodes[i].x, initialNodes[i].y);
            ctx.quadraticCurveTo(
              midX + offsetX,
              midY + offsetY,
              initialNodes[j].x,
              initialNodes[j].y
            );

            const opacity = Math.max(0.03, (200 - dist) / 200 * 0.2);
            const thickness = dist < 150 ? 2 : 1;
            ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
            ctx.lineWidth = thickness;
            ctx.stroke();

            // Add synaptic terminals (small dots) along connections
            if (dist < 150 && Math.random() > 0.7) {
              ctx.beginPath();
              ctx.arc(midX, midY, 2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255,255,255,${opacity * 2})`;
              ctx.fill();
            }
          }
        }
      }

      // Update and draw nodes (neurons)
      initialNodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Soft boundaries with gentle bounce
        const margin = 80;
        if (node.x < margin || node.x > canvas.width - margin) node.vx *= -1;
        if (node.y < margin || node.y > canvas.height - margin) node.vy *= -1;

        const isSelected = selectedNode?.label === node.label;

        // Draw neuron body with glow
        if (isSelected) {
          // Outer glow
          for (let r = 25; r > 0; r -= 5) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${0.05 * (25 - r) / 25})`;
            ctx.fill();
          }
        }

        // Main neuron body (soma)
        ctx.beginPath();
        ctx.arc(node.x, node.y, isSelected ? 7 : 5, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.85)';
        ctx.fill();

        // Neuron membrane
        ctx.beginPath();
        ctx.arc(node.x, node.y, isSelected ? 9 : 7, 0, Math.PI * 2);
        ctx.strokeStyle = isSelected ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Add pulse effect for selected neuron
        if (isSelected) {
          const pulseRadius = 12 + Math.sin(Date.now() / 200) * 2;
          ctx.beginPath();
          ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255,255,255,0.4)';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      for (const node of initialNodes) {
        const dist = Math.sqrt((x - node.x) ** 2 + (y - node.y) ** 2);
        if (dist < 15) {
          setSelectedNode(node);
          return;
        }
      }
      setSelectedNode(null);
    };

    canvas.addEventListener('click', handleCanvasClick);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, [selectedNode]);

  const generateInsight = () => {
    const randomIndex = Math.floor(Math.random() * randomInsights.length);
    setCurrentInsight(randomInsights[randomIndex]);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl w-full">
        <h2 className="text-center mb-4" style={{ fontSize: '2rem', fontWeight: 600 }}>
          Neural Architecture
        </h2>
        <p className="text-center mb-3 opacity-60" style={{ fontSize: '1rem' }}>
          A visual map of my thought patterns and cognitive connections
        </p>
        <p className="text-center mb-12 opacity-50" style={{ fontSize: '0.875rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Click any node to explore
        </p>

        {/* Full-width Neural Network */}
        <div className="mb-12 relative" style={{ height: '600px' }}>
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 opacity-60">
            <Brain className="w-4 h-4" />
            <p style={{ fontSize: '0.875rem' }}>
              Click a node to explore
            </p>
          </div>

          <canvas
            ref={canvasRef}
            className="w-full h-full cursor-pointer"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
            }}
          />

          {selectedNode && (
            <div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4 animate-fade-in max-w-md w-full mx-4"
              style={{
                background: 'rgba(0,0,0,0.95)',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '12px',
                backdropFilter: 'blur(20px)',
              }}
            >
              <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>
                {selectedNode.label}
              </h4>
              <p className="opacity-80" style={{ fontSize: '0.875rem' }}>
                {selectedNode.description}
              </p>
            </div>
          )}
        </div>

        {/* Bottom Section - Integrated with Brain */}
        <div
          className="p-6"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Philosophy - Left Hemisphere */}
            <div className="relative">
              <div className="absolute -top-3 left-4 px-3 py-1 bg-black border border-white/20 rounded-full">
                <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Left Hemisphere</span>
              </div>
              <div
                className="p-6 h-full transition-all duration-300 hover:border-white/30"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '12px',
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 opacity-70" />
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                    Core Philosophy
                  </h3>
                </div>
                <p className="opacity-80 italic" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                  "Data tells stories. My job is to listen, translate, and make sure those stories drive real decisions."
                </p>
              </div>
            </div>

            {/* Random Insight - Right Hemisphere */}
            <div className="relative">
              <div className="absolute -top-3 right-4 px-3 py-1 bg-black border border-white/20 rounded-full">
                <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Right Hemisphere</span>
              </div>
              <div
                className="p-6 h-full transition-all duration-300 hover:border-white/30"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '12px',
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 opacity-70" />
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                    Random Thought
                  </h3>
                </div>
                <button
                  onClick={generateInsight}
                  className="w-full py-2.5 flex items-center justify-center gap-2 transition-all duration-300 mb-3"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                  Generate Neural Impulse
                </button>
                {currentInsight && (
                  <div
                    className="p-3 text-center animate-fade-in"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px',
                    }}
                  >
                    <p style={{ fontSize: '0.875rem', fontStyle: 'italic' }}>
                      "{currentInsight}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
