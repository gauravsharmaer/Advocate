import React from 'react';
import { TeamMembers } from '../components/about/TeamMembers';
import { FirmHistory } from '../components/about/FirmHistory';
import { Awards } from '../components/about/Awards';

export function AboutPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">About Our Firm</h1>
          <p className="mt-4 text-xl text-gray-500">
            Dedicated to excellence in legal representation since 1995
          </p>
        </div>
        <FirmHistory />
        <TeamMembers />
        <Awards />
      </div>
    </div>
  );
}