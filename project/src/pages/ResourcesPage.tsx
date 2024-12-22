import React from 'react';
import { LegalResources } from '../components/resources/LegalResources';
import { BlogPosts } from '../components/resources/BlogPosts';
import { Newsletter } from '../components/resources/Newsletter';

export function ResourcesPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Legal Resources</h1>
          <p className="mt-4 text-xl text-gray-500">
            Helpful information and insights about legal matters
          </p>
        </div>
        <LegalResources />
        <BlogPosts />
        <Newsletter />
      </div>
    </div>
  );
}