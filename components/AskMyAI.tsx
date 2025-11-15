'use client';

import { useState, FormEvent } from 'react';

const AskMyAI = () => {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setError('');
    setChatHistory((prev) => [...prev, { role: 'user', content: question }]);

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) throw new Error('AI failed to respond');
      const data = await res.json();
      setChatHistory((prev) => [...prev, { role: 'assistant', content: data.answer || 'No response' }]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      setError(msg);
      setChatHistory((prev) => [...prev, { role: 'assistant', content: `Error: ${msg}` }]);
    } finally {
      setIsLoading(false);
      setQuestion('');
    }
  };

  return (
    <section id="ai-assistant" className="py-16">
      <div className="container-wrapper max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Ask my AI about my work</h2>
          <p className="text-dark-text-muted">Ask about services, pipelines, or tools (e.g., "What is your experience with AR assets?").</p>
        </div>

        <div className="card">
          <div className="chat-history mb-4">
            {chatHistory.length === 0 && <div className="text-dark-text-muted text-center py-12">Start a conversation — ask about projects, tools, or services.</div>}
            {chatHistory.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'msg-user' : 'msg-assistant'}>{m.content}</div>
            ))}
            {isLoading && <div className="msg-assistant">🤖 Thinking…</div>}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1 px-4 py-3 rounded-md bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] text-white"
              placeholder="Ask about 3D work, AR assets, or tools..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !question.trim()} className="btn-primary">{isLoading ? '...' : 'Send'}</button>
          </form>

          {error && <div className="mt-4 text-red-400">{error}</div>}
        </div>
      </div>
    </section>
  );
};

export default AskMyAI;