import React from 'react';
import { Check } from 'lucide-react';

interface ServicesListProps {
  services: string[];
}

export function ServicesList({ services }: ServicesListProps) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">How We Can Help You</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <div key={service} className="flex items-start gap-3">
            <Check className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
}