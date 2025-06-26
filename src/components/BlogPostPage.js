import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPostPage = () => {
  let { postId } = useParams();
  return (
    <div>
      <h1>Blog Post</h1>
      <p>Content for blog post: <strong>{postId}</strong> will appear here.</p>
    </div>
  );
};

export default BlogPostPage;
