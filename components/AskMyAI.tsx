'use client'; // This is required for components using hooks (useState, useEffect)

import { useState, FormEvent } from 'react';

const AskMyAI = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer('');
    setError('');

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error('Failed to get an answer from the AI.');
      }

      const data = await response.json();
      setAnswer(data.answer);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
      setQuestion('');
    }
  };

  return (
    <section id="ai-assistant" className="bg-dark-surface">
      <div className="container-wrapper max-w-3xl mx-auto text-center">
        <h2 className="text-center">Ask my AI about my work</h2>
        <p>
          This assistant is powered by Google's Gemini. Ask it questions about my services, 
          technical pipelines, or specific tools I use. (e.g., "What is your experience with AR assets?")
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 mt-8">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question..."
            disabled={isLoading}
            className="flex-grow px-4 py-3 rounded-md bg-dark-bg border border-gray-700 text-dark-text placeholder-dark-text-muted focus:outline-none focus:border-primary"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 rounded-md bg-primary text-black font-heading font-bold uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-transparent hover:text-primary border-2 border-primary"
          >
            {isLoading ? 'Thinking...' : 'Ask'}
          </button>
        </form>

        {(answer || error || isLoading) && (
          <div className="mt-8 p-6 bg-dark-bg border border-gray-800 rounded-lg text-left min-h-24">
            {isLoading && (
              <p className="text-dark-text-muted animate-pulse">AI is generating a response...</p>
            )}
            {error && (
              <p className="text-red-400">Error: {error}</p>
            )}
            {answer && (
              <p className="text-white whitespace-pre-wrap">{answer}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AskMyAI;