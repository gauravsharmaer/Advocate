import React from 'react';
import { Award } from 'lucide-react';

const awards = [
  {
    title: 'Best Law Firm',
    organization: 'Legal Excellence Awards',
    year: '2023'
  },
  {
    title: 'Top Corporate Law Practice',
    organization: 'Business Law Review',
    year: '2022'
  },
  {
    title: 'Client Satisfaction Award',
    organization: 'Legal Services Review',
    year: '2023'
  }
];

export function Awards() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Awards & Recognition</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {awards.map((award) => (
          <div key={award.title} className="bg-white rounded-lg shadow p-6 text-center">
            <Award className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">{award.title}</h3>
            <p className="text-gray-600 mt-2">{award.organization}</p>
            <p className="text-indigo-600 font-semibold mt-1">{award.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}