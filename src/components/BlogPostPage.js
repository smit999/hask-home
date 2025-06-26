// src/components/BlogPostPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './BlogPostPage.css';
import BlogSidePanel from './BlogSidePanel';
import { getPostById } from '../blog-posts'; // Import metadata getter

const BlogPostPage = () => {
  const { postId } = useParams();
  const [markdown, setMarkdown] = useState('');
  const postMeta = getPostById(postId);

  useEffect(() => {
    if (postMeta) {
      import(`../blog-posts/${postId}.md`)
        .then(res => {
          fetch(res.default) // Dynamic import returns a module, .default is the path to the raw file
            .then(response => response.text())
            .then(text => setMarkdown(text))
            .catch(err => console.error('Error fetching markdown:', err));
        })
        .catch(err => console.error('Error importing module for markdown:', err));
    }
  }, [postId, postMeta]);

  if (!postMeta) {
    return <p>Post not found!</p>; // Or a proper 404 component
  }

  return (
    <div className="blog-post-layout">
      <article className="blog-post-page">
        <header className="blog-post-header">
          <Link to="/blog" className="blog-post-backlink">&larr; Back to Blog</Link>
          <h1 className="blog-post-title">{postMeta.title}</h1>
          <p className="blog-post-meta">Published on {new Date(postMeta.date).toLocaleDateString()}</p>
        </header>
        <div className="blog-post-content">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </article>
      <BlogSidePanel />
    </div>
  );
};

export default BlogPostPage;
