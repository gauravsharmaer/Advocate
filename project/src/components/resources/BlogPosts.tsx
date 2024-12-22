import React from 'react';

const posts = [
  {
    title: 'Understanding Personal Injury Claims',
    excerpt: 'Learn about the key elements of a successful personal injury claim and what to expect during the legal process.',
    date: '2024-03-15',
    author: 'James Anderson'
  },
  {
    title: 'Corporate Law Updates 2024',
    excerpt: 'Recent changes in corporate law that business owners need to know about.',
    date: '2024-03-10',
    author: 'Sarah Chen'
  },
  {
    title: 'Rights During Criminal Proceedings',
    excerpt: 'A comprehensive guide to understanding your rights during criminal proceedings.',
    date: '2024-03-05',
    author: 'James Anderson'
  }
];

export function BlogPosts() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Legal Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <h3 className="mt-2 text-xl font-bold text-gray-900">{post.title}</h3>
              <p className="mt-3 text-gray-600">{post.excerpt}</p>
              <div className="mt-4">
                <span className="text-sm font-medium text-indigo-600">By {post.author}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}