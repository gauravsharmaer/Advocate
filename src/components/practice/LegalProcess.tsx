import React from 'react';

interface LegalProcessProps {
  steps: Array<{
    title: string;
    description: string;
  }>;
}

export function LegalProcess({ steps }: LegalProcessProps) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Legal Process</h2>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={step.title} className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
              {index + 1}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}