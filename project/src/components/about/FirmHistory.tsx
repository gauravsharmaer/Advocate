import React from 'react';
import { Building, Award, Users } from 'lucide-react';

export function FirmHistory() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our History</h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600">
          Founded in 1995, Anderson Law has grown from a small practice to one of the most respected law firms in the region. Our commitment to excellence and client satisfaction has been the cornerstone of our success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center text-center">
            <Building className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Established 1995</h3>
            <p className="text-gray-600">Started with a vision to provide exceptional legal services</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Recognition</h3>
            <p className="text-gray-600">Multiple awards for legal excellence and client satisfaction</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Growing Team</h3>
            <p className="text-gray-600">Expanded to a team of dedicated legal professionals</p>
          </div>
        </div>
      </div>
    </div>
  );
}