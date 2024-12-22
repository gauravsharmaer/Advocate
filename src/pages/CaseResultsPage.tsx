import React from 'react';
import { CaseResults } from '../components/cases/CaseResults';
import { CaseStats } from '../components/cases/CaseStats';

export function CaseResultsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Case Results</h1>
          <p className="mt-4 text-xl text-gray-500">
            A track record of success in complex legal matters
          </p>
        </div>
        <CaseStats />
        <CaseResults />
      </div>
    </div>
  );
}