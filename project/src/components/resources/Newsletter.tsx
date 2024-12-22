import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="mt-16 bg-indigo-50 rounded-lg p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Subscribe to Our Newsletter</h2>
        <p className="mt-4 text-gray-600">
          Stay updated with the latest legal news and insights
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
        <div className="flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Subscribe
            <Send className="ml-2 h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}