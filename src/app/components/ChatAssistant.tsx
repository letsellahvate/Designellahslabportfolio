import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const suggestedPrompts = [
  "What projects has she worked on?",
  "What tools does she use?",
  "Explain her process"
];

const responses: Record<string, string> = {
  "What projects has she worked on?": "Ellah has worked on diverse projects including customer churn prediction, sales forecasting dashboards, sentiment analysis engines, anomaly detection systems, e-commerce recommendation systems, and predictive maintenance models. Each project demonstrates her ability to transform complex data challenges into actionable insights.",
  "What tools does she use?": "Primary toolkit includes Python (pandas, scikit-learn, PyTorch), SQL for data manipulation, Tableau and Streamlit for visualization, and various ML frameworks like XGBoost, Prophet, and BERT. She's also proficient in statistical analysis and data cleaning methodologies.",
  "Explain her process": "Ellah follows a systematic approach: 1) Deep dive into the problem and data context, 2) Rigorous EDA to uncover patterns, 3) Strategic feature engineering, 4) Iterative modeling with continuous evaluation, 5) Clear communication of insights. She's known for attention to edge cases and delivering production-ready solutions."
};

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    setMessages([...messages, { text: messageText, isUser: true }]);

    setTimeout(() => {
      const response = responses[messageText] || "That's an interesting question! Feel free to explore the portfolio sections above to learn more about Ellah's work and expertise.";
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 500);

    setInput('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 p-4 rounded-full transition-all duration-300 z-50"
        style={{
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-8 w-96 h-[500px] flex flex-col z-50"
          style={{
            background: 'rgba(0,0,0,0.95)',
            border: '1px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
          }}
        >
          {/* Header */}
          <div className="p-4 border-b border-white/10">
            <h3 style={{ fontWeight: 700 }}>AI Assistant</h3>
            <p className="opacity-60" style={{ fontSize: '0.875rem' }}>Ask me about Ellah's work</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="space-y-2">
                <p className="opacity-60 mb-4" style={{ fontSize: '0.875rem' }}>Suggested prompts:</p>
                {suggestedPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSend(prompt)}
                    className="w-full text-left p-3 transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className="p-3"
                style={{
                  background: message.isUser ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                  borderRadius: '8px',
                  marginLeft: message.isUser ? 'auto' : '0',
                  marginRight: message.isUser ? '0' : 'auto',
                  maxWidth: '85%',
                  fontSize: '0.875rem',
                }}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question..."
                className="flex-1 px-3 py-2 bg-transparent border border-white/20 rounded-lg outline-none focus:border-white/40 transition-colors"
                style={{ fontSize: '0.875rem' }}
              />
              <button
                onClick={() => handleSend()}
                className="p-2 transition-all"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
