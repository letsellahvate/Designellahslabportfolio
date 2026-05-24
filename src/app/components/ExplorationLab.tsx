import { useState } from 'react';
import { Play, RotateCcw, Sparkles, Info, Brain } from 'lucide-react';

export default function ExplorationLab() {
  const [dataSize, setDataSize] = useState(100);
  const [algorithm, setAlgorithm] = useState('linear');
  const [accuracy, setAccuracy] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [trainingLog, setTrainingLog] = useState<string[]>([]);

  const runExperiment = () => {
    setIsRunning(true);
    setAccuracy(0);
    setTrainingLog([]);

    const logs: string[] = [];
    logs.push(`[INFO] Initializing ${algorithm} model...`);
    logs.push(`[INFO] Loading ${dataSize} training samples...`);
    setTrainingLog([...logs]);

    // Simulate model training with educational logs
    let progress = 0;
    let epoch = 1;
    const interval = setInterval(() => {
      progress += Math.random() * 15;

      if (progress >= 25 && epoch === 1) {
        logs.push(`[EPOCH 1] Training... Loss: 0.${Math.floor(Math.random() * 900 + 100)}`);
        epoch++;
        setTrainingLog([...logs]);
      } else if (progress >= 50 && epoch === 2) {
        logs.push(`[EPOCH 2] Training... Loss: 0.${Math.floor(Math.random() * 500 + 100)}`);
        epoch++;
        setTrainingLog([...logs]);
      } else if (progress >= 75 && epoch === 3) {
        logs.push(`[EPOCH 3] Validating model...`);
        epoch++;
        setTrainingLog([...logs]);
      }

      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setIsRunning(false);

        const baseAccuracy = algorithm === 'neural' ? 85 : algorithm === 'forest' ? 78 : 65;
        const sizeBonus = Math.min((dataSize / 1000) * 10, 15);
        const finalAccuracy = Math.min(baseAccuracy + sizeBonus + Math.random() * 5, 99);

        logs.push(`[SUCCESS] Training complete!`);
        logs.push(`[RESULT] Final accuracy: ${Math.floor(finalAccuracy)}%`);
        setTrainingLog([...logs]);
        setAccuracy(Math.floor(finalAccuracy));
        return;
      }

      const baseAccuracy = algorithm === 'neural' ? 85 : algorithm === 'forest' ? 78 : 65;
      const sizeBonus = Math.min((dataSize / 1000) * 10, 15);
      const finalAccuracy = Math.min(baseAccuracy + sizeBonus + Math.random() * 5, 99);

      setAccuracy(Math.floor((progress / 100) * finalAccuracy));
    }, 150);
  };

  const reset = () => {
    setAccuracy(0);
    setIsRunning(false);
    setTrainingLog([]);
  };

  const getAlgorithmInfo = () => {
    switch (algorithm) {
      case 'neural':
        return 'Neural Networks mimic the human brain with layers of interconnected nodes. Best for complex patterns but requires more data.';
      case 'forest':
        return 'Random Forest uses multiple decision trees voting together. Great balance between accuracy and interpretability.';
      default:
        return 'Linear Regression finds straight-line relationships. Fast and simple but limited to linear patterns.';
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-8 h-8 opacity-70" />
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Interactive ML Lab
            </h2>
          </div>
          <p className="opacity-60 mb-3" style={{ fontSize: '1.125rem' }}>
            Experiment with machine learning and see how different parameters affect performance
          </p>
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="flex items-center gap-2 mx-auto opacity-70 hover:opacity-100 transition-opacity"
            style={{ fontSize: '0.875rem' }}
          >
            <Info className="w-4 h-4" />
            {showExplanation ? 'Hide' : 'Show'} how it works
          </button>
          {showExplanation && (
            <div
              className="mt-4 p-4 max-w-2xl mx-auto text-left animate-fade-in"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '12px',
                fontSize: '0.875rem',
                lineHeight: '1.6',
              }}
            >
              <p className="mb-2">
                <strong>What you're seeing:</strong> This simulates training a machine learning model.
                In real ML, we feed data to an algorithm which "learns" patterns to make predictions.
              </p>
              <p>
                <strong>Key lesson:</strong> More data usually = better accuracy, and more complex algorithms
                (like Neural Networks) can capture intricate patterns but need more data to work well.
              </p>
            </div>
          )}
        </div>

        <div
          className="p-8"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Controls */}
            <div className="space-y-6">
              <div>
                <label className="block mb-3 opacity-70">
                  Dataset Size: <span style={{ fontWeight: 700 }}>{dataSize.toLocaleString()}</span> samples
                </label>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  value={dataSize}
                  onChange={(e) => setDataSize(parseInt(e.target.value))}
                  className="w-full accent-white"
                  disabled={isRunning}
                  style={{
                    height: '8px',
                    borderRadius: '4px',
                    background: 'rgba(255,255,255,0.1)',
                  }}
                />
              </div>

              <div>
                <label className="block mb-3 opacity-70">Algorithm Type</label>
                <select
                  value={algorithm}
                  onChange={(e) => setAlgorithm(e.target.value)}
                  disabled={isRunning}
                  className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg outline-none focus:border-white/40 transition-colors"
                >
                  <option value="linear" className="bg-black">Linear Regression</option>
                  <option value="forest" className="bg-black">Random Forest</option>
                  <option value="neural" className="bg-black">Neural Network</option>
                </select>
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  onClick={runExperiment}
                  disabled={isRunning}
                  className="flex-1 py-3 flex items-center justify-center gap-2 transition-all duration-300"
                  style={{
                    background: isRunning ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '8px',
                    opacity: isRunning ? 0.5 : 1,
                  }}
                >
                  <Play className="w-5 h-5" />
                  {isRunning ? 'Training...' : 'Run Experiment'}
                </button>
                <button
                  onClick={reset}
                  className="px-4 py-3 transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '8px',
                  }}
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Results */}
            <div
              className="p-6 flex flex-col items-center justify-center"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
              }}
            >
              <Sparkles className="w-12 h-12 mb-4 opacity-50" />
              <h3 className="mb-2" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                Model Accuracy
              </h3>
              <div
                className="mb-4"
                style={{
                  fontSize: '4rem',
                  fontWeight: 800,
                  background: 'linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.4))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {accuracy}%
              </div>

              {accuracy > 0 && (
                <div className="w-full">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full bg-white/50 transition-all duration-300"
                      style={{ width: `${accuracy}%` }}
                    />
                  </div>
                  <p className="text-center opacity-60" style={{ fontSize: '0.875rem' }}>
                    {accuracy >= 90 ? '🎉 Excellent!' : accuracy >= 75 ? '👍 Good' : '📊 Keep tuning'}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Algorithm Info & Training Log */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div
              className="p-4"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
              }}
            >
              <h4 className="flex items-center gap-2 mb-2" style={{ fontWeight: 600, fontSize: '0.875rem' }}>
                <Info className="w-4 h-4" />
                Algorithm Info
              </h4>
              <p className="opacity-70" style={{ fontSize: '0.8125rem', lineHeight: '1.5' }}>
                {getAlgorithmInfo()}
              </p>
            </div>

            <div
              className="p-4"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
              }}
            >
              <h4 className="mb-2" style={{ fontWeight: 600, fontSize: '0.875rem' }}>
                Training Log
              </h4>
              <div
                className="space-y-1 max-h-20 overflow-y-auto"
                style={{ fontFamily: 'monospace', fontSize: '0.75rem' }}
              >
                {trainingLog.length > 0 ? (
                  trainingLog.map((log, idx) => (
                    <div key={idx} className="opacity-70">
                      {log}
                    </div>
                  ))
                ) : (
                  <div className="opacity-50">No training in progress...</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
