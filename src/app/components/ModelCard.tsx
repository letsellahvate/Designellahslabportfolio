import { ArrowRight, Database, Zap, Target, Activity } from 'lucide-react';

export default function ModelCard() {
  return (
    <section id="model" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="text-center mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
          How I Work: The ML Model
        </h2>
        <p className="text-center mb-16 opacity-60" style={{ fontSize: '1.125rem' }}>
          Think of me as a machine learning model processing problems
        </p>

        {/* Main Model Architecture */}
        <div
          className="p-8 mb-8"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Input Layer */}
            <div
              className="p-6 transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '12px',
              }}
            >
              <Database className="w-8 h-8 mb-4 opacity-70" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                Input Layer
              </h3>
              <p className="opacity-70 mb-3" style={{ fontSize: '0.875rem' }}>
                What I receive:
              </p>
              <ul className="space-y-2 opacity-70" style={{ fontSize: '0.875rem' }}>
                <li>• Raw datasets</li>
                <li>• Messy problems</li>
                <li>• Business questions</li>
                <li>• Unclear requirements</li>
                <li>• Lots of coffee ☕</li>
              </ul>
            </div>

            {/* Processing Layer */}
            <div
              className="p-6 transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '12px',
              }}
            >
              <Activity className="w-8 h-8 mb-4 opacity-70" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                Hidden Layers (Processing)
              </h3>
              <p className="opacity-70 mb-3" style={{ fontSize: '0.875rem' }}>
                What happens inside:
              </p>
              <div className="space-y-2">
                {['Clean data', 'Explore patterns', 'Feature engineering', 'Model training', 'Validation'].map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/50" />
                    <span className="opacity-70" style={{ fontSize: '0.875rem' }}>
                      Layer {i + 1}: {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Output Layer */}
            <div
              className="p-6 transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '12px',
              }}
            >
              <Target className="w-8 h-8 mb-4 opacity-70" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                Output Layer
              </h3>
              <p className="opacity-70 mb-3" style={{ fontSize: '0.875rem' }}>
                What you get:
              </p>
              <ul className="space-y-2 opacity-70" style={{ fontSize: '0.875rem' }}>
                <li>• Clear insights</li>
                <li>• Predictive models</li>
                <li>• Visualizations</li>
                <li>• Actionable decisions</li>
                <li>• Production-ready code</li>
              </ul>
            </div>
          </div>

          {/* Architecture Flow */}
          <div className="pt-6 border-t border-white/10">
            <h3 className="mb-4" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
              <Zap className="inline w-5 h-5 mr-2 opacity-70" />
              Full Pipeline Architecture
            </h3>
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {['Data In', 'Clean', 'Explore', 'Engineer', 'Train', 'Validate', 'Deploy', 'Monitor'].map((step, index, arr) => (
                <div key={step} className="flex items-center gap-2 flex-shrink-0">
                  <span
                    className="px-4 py-2 whitespace-nowrap"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                    }}
                  >
                    {step}
                  </span>
                  {index < arr.length - 1 && <ArrowRight className="w-4 h-4 opacity-40" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Model Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="p-6"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(20px)',
              borderRadius: '12px',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>
              Performance Metrics
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="opacity-70">Accuracy</span>
                <span className="font-mono">Continuously improving</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">Precision</span>
                <span className="font-mono">Detail-oriented</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">Recall</span>
                <span className="font-mono">Catches edge cases</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">F1-Score</span>
                <span className="font-mono">Balanced approach</span>
              </div>
            </div>
          </div>

          <div
            className="p-6"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(20px)',
              borderRadius: '12px',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>
              Known Parameters
            </h3>
            <div className="space-y-2 opacity-70">
              <p>⚙️ <strong>Activation Function:</strong> Curiosity-driven</p>
              <p>🔧 <strong>Optimizer:</strong> Coffee-SGD</p>
              <p>📊 <strong>Loss Function:</strong> Minimize confusion</p>
              <p>🎯 <strong>Regularization:</strong> Avoid overfitting to perfection</p>
              <p className="pt-2 text-xs italic">Version: Ellah_v1.0 (stable, in production)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
