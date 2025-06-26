// src/components/BlogSidePanel.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './BlogSidePanel.css';
import { getAllPosts } from '../blog-posts'; // Import post data

const BlogSidePanel = () => {
  const { postId } = useParams(); // To highlight the active post
  const posts = getAllPosts(); // Get sorted posts

  return (
    <aside className="blog-side-panel">
      <h3 className="side-panel-title">All Posts</h3> {/* Changed title */}
      <ul className="side-panel-list">
        {posts.map(post => (
          <li key={post.id} className={`side-panel-item ${post.id === postId ? 'active' : ''}`}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default BlogSidePanel;
