// src/components/BlogPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';
import { getAllPosts } from '../blog-posts'; // Import post data

const BlogPage = () => {
  const posts = getAllPosts(); // Get sorted posts

  return (
    <div className="blog-page">
      <h1 className="blog-page-title">Blog</h1>
      <div className="blog-post-list">
        {posts.map(post => (
          <div key={post.id} className="blog-post-preview-card">
            <h2 className="blog-post-preview-title">
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="blog-post-meta">Published on {new Date(post.date).toLocaleDateString()}</p>
            <p className="blog-post-preview-summary">{post.summary}</p>
            <Link to={`/blog/${post.id}`} className="blog-post-preview-readmore">Read more &rarr;</Link>
          </div>
        ))}
        {posts.length === 0 && <p>No posts yet. Check back soon!</p>}
      </div>
      {/* Optionally, a less prominent side panel could be here too, or not at all on the list page */}
    </div>
  );
};

export default BlogPage;
