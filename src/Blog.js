import React from 'react';

const Blog = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Blog</h1>
    <p className="text-xl text-gray-500 mb-12">
      Thoughts, news, and insights from the Hask team.
    </p>
    <div className="flex flex-col items-center justify-center min-h-[40vh] border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50">
      <span className="text-4xl mb-4">✍️</span>
      <h2 className="text-2xl font-bold text-gray-400">New posts coming soon...</h2>
    </div>
  </div>
);

export default Blog;