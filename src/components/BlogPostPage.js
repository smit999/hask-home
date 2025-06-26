// src/components/BlogPostPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './BlogPostPage.css';
import BlogSidePanel from './BlogSidePanel';
import { getPostById } from '../blog-posts';
import { useAppContext } from '../contexts/AppContext'; // Import context hook

const BlogPostPage = () => {
  const { postId } = useParams();
  const { setImmersiveMode, setCurrentPageTitle } = useAppContext(); // Get context functions
  const [markdown, setMarkdown] = useState('');
  const postMeta = getPostById(postId);

  useEffect(() => {
    if (postMeta) {
      setCurrentPageTitle(postMeta.title);
      setImmersiveMode(true);

      import(`../blog-posts/${postId}.md`)
        .then(res => fetch(res.default))
        .then(response => response.text())
        .then(text => setMarkdown(text))
        .catch(err => console.error('Error fetching markdown:', err));
    } else {
        setImmersiveMode(false); // Not found, ensure not in immersive mode
        setCurrentPageTitle('');
    }

    // Cleanup function to reset immersive mode when component unmounts
    return () => {
      setImmersiveMode(false);
      setCurrentPageTitle('');
    };
  }, [postId, postMeta, setImmersiveMode, setCurrentPageTitle]);

  if (!postMeta) {
    return (
        <div>
            <p>Post not found!</p>
            <Link to="/blog">Go back to blog list</Link>
        </div>
    );
  }

  // The <header> inside <article> can be simplified or removed as title is in ImmersiveHeader
  return (
    <div className="blog-post-layout">
      <article className="blog-post-page">
        {/* The header with post title is now handled by ImmersiveHeader via context */}
        {/* We might still want a small header here for meta if not in ImmersiveHeader */}
         <header className="blog-post-header-meta" style={{textAlign: 'center', marginBottom: '20px'}}>
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
