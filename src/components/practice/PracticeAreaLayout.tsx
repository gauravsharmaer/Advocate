import React from 'react';
import { useParams } from 'react-router-dom';
import { practiceAreasData } from './practiceAreasData';
import { CommonCases } from './CommonCases';
import { ServicesList } from './ServicesList';
import { LegalProcess } from './LegalProcess';

export function PracticeAreaLayout() {
  const { slug } = useParams();
  const areaData = practiceAreasData[slug as keyof typeof practiceAreasData];

  if (!areaData) {
    return <div>Practice area not found</div>;
  }

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {areaData.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {areaData.description}
          </p>
        </div>
        
        <CommonCases cases={areaData.commonCases} />
        <ServicesList services={areaData.services} />
        <LegalProcess steps={areaData.process} />
      </div>
    </div>
  );
}