import React from 'react';

const team = [
  {
    name: 'James Anderson',
    role: 'Senior Partner',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    education: ['J.D., Harvard Law School', 'B.A., Yale University'],
    admissions: ['New York State Bar', 'U.S. Supreme Court'],
    bio: 'Over 25 years of experience in corporate and criminal law.'
  },
  {
    name: 'Sarah Chen',
    role: 'Partner',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    education: ['J.D., Stanford Law School', 'B.A., UC Berkeley'],
    admissions: ['California State Bar', 'New York State Bar'],
    bio: 'Specializes in personal injury and employment law.'
  }
];

export function TeamMembers() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {team.map((member) => (
          <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover"
              src={member.image}
              alt={member.name}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-indigo-600 font-semibold">{member.role}</p>
              <p className="mt-4 text-gray-600">{member.bio}</p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900">Education</h4>
                <ul className="mt-2 text-gray-600">
                  {member.education.map((edu) => (
                    <li key={edu}>{edu}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900">Bar Admissions</h4>
                <ul className="mt-2 text-gray-600">
                  {member.admissions.map((admission) => (
                    <li key={admission}>{admission}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}