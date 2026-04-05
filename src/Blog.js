import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// You can later import this data directly from your src/blog-posts folder!
const blogPosts = [
  {
    id: 'welcome-to-hask',
    title: 'Welcome to Hask Softwares',
    date: 'Jan 1, 2024',
    excerpt: 'We are thrilled to launch our new modern website...',
    content: '# Welcome to Hask Softwares\n\nWe are thrilled to launch our new website. We specialize in **HVAC solutions**, ERP systems, and modern web applications.\n\n## What to expect\n\n- Technical insights & tutorials\n- HVAC industry news\n- Project case studies\n\nStay tuned for more updates!'
  },
  {
    id: 'power-of-react',
    title: 'The Power of Modern React',
    date: 'Jan 15, 2024',
    excerpt: 'How React 19 and Tailwind CSS are changing the way we build frontend experiences.',
    content: '# The Power of Modern React\n\nReact continues to be the dominant library for UI development. Combined with **Tailwind CSS**, development is faster, and the results are incredibly polished.\n\nHere are some benefits:\n- Component-driven architecture\n- Instant styling with utility classes\n- Better performance and caching'
  }
];

const BlogList = () => (
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Blog</h1>
      <p className="text-xl text-gray-500 max-w-2xl mx-auto">
        Thoughts, news, and insights from the Hask team.
      </p>
    </div>
    <div className="grid gap-8 md:grid-cols-2">
      {blogPosts.map(post => (
        <Link key={post.id} to={`/blog/${post.id}`} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
          <span className="text-sm font-semibold text-brand tracking-wide uppercase">{post.date}</span>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 leading-tight">{post.title}</h2>
          <p className="mt-4 text-gray-600 leading-relaxed flex-grow">{post.excerpt}</p>
          <div className="mt-6 text-brand font-semibold hover:text-brand/80 transition-colors inline-flex items-center">
            Read Article <span className="ml-2">&rarr;</span>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

const BlogPost = ({ postId }) => {
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">The article you are looking for does not exist.</p>
        <Link to="/blog" className="px-6 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand/90 transition-colors">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Link to="/blog" className="text-brand font-medium hover:underline mb-8 inline-block transition-colors">
        &larr; Back to all posts
      </Link>
      <header className="mb-10 border-b border-gray-100 pb-8">
        <span className="text-sm font-semibold text-gray-500 tracking-wide uppercase">{post.date}</span>
        <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">{post.title}</h1>
      </header>
      {/* Using Tailwind arbitrary variants to style the raw markdown HTML beautifully */}
      <div className="prose prose-lg max-w-none text-gray-700 [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-6 [&>h1]:text-gray-900 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:text-gray-900 [&>p]:mb-6 [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-6 [&>li]:mb-2 [&>strong]:text-gray-900 [&>strong]:font-semibold">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
};

const Blog = () => {
  // React Router hook to check if we are viewing a specific post
  const { postId } = useParams();
  
  // Conditionally render the single post or the list of all posts
  return postId ? <BlogPost postId={postId} /> : <BlogList />;
};

export default Blog;