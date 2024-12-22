import React from 'react';
import { Scale } from 'lucide-react';

const cases = [
  {
    title: 'Major Corporate Merger',
    area: 'Corporate Law',
    outcome: 'Successful $50M merger completion',
    description: 'Successfully represented a tech company in a complex merger acquisition.'
  },
  {
    title: 'Personal Injury Settlement',
    area: 'Personal Injury',
    outcome: '$2.5M Settlement',
    description: 'Secured substantial compensation for client injured in a workplace accident.'
  },
  {
    title: 'Criminal Defense Victory',
    area: 'Criminal Defense',
    outcome: 'All Charges Dismissed',
    description: 'Successfully defended client against serious criminal allegations.'
  }
];

export function CaseResults() {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((case_) => (
          <div key={case_.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <Scale className="h-8 w-8 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-600">{case_.area}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{case_.title}</h3>
              <p className="mt-2 text-gray-600">{case_.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-semibold text-green-600">{case_.outcome}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}