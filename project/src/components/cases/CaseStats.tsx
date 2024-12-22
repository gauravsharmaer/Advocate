import React from 'react';

const stats = [
  { label: 'Cases Won', value: '95%' },
  { label: 'Total Settlements', value: '$100M+' },
  { label: 'Satisfied Clients', value: '1000+' },
  { label: 'Years Experience', value: '25+' }
];

export function CaseStats() {
  return (
    <div className="mt-16">
      <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow px-6 py-8 text-center">
            <dt className="text-lg font-medium text-gray-500">{stat.label}</dt>
            <dd className="mt-2 text-3xl font-extrabold text-indigo-600">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}