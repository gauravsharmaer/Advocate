import React from 'react';

interface CommonCasesProps {
  cases: Array<{
    title: string;
    description: string;
  }>;
}

export function CommonCases({ cases }: CommonCasesProps) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Common Cases We Handle</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {cases.map((item) => (
          <div key={item.title} className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}