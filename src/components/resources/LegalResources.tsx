import React from 'react';
import { FileText, Download } from 'lucide-react';

const resources = [
  {
    title: 'Personal Injury Guide',
    description: 'Learn about your rights and the legal process for personal injury cases.',
    downloadUrl: '#'
  },
  {
    title: 'Corporate Law Handbook',
    description: 'Essential information for businesses about corporate law compliance.',
    downloadUrl: '#'
  },
  {
    title: 'Criminal Defense FAQ',
    description: 'Common questions and answers about criminal defense proceedings.',
    downloadUrl: '#'
  }
];

export function LegalResources() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Free Legal Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <div key={resource.title} className="bg-white rounded-lg shadow-lg p-6">
            <FileText className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <a
              href={resource.downloadUrl}
              className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
            >
              <Download className="h-5 w-5 mr-2" />
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}