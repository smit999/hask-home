// src/blog-posts/index.js
// Manually define post metadata. The 'id' should match the Markdown filename without extension.
export const posts = [
  {
    id: 'jules-blog-setup', // New
    title: 'New to Blogging? Let Jules Help You Set Up Your Site!',
    date: '2025-06-29',
    summary: "Discover how AI coding assistants like Jules can streamline the process of creating and launching your own blog, even if you're new to web development."
  },
  {
    id: 'my-first-post',
    title: 'My First Official Post!',
    date: '2025-06-27',
    summary: 'This is the first real post using Markdown in our React blog.',
  },
  {
    id: 'another-post',
    title: 'A Look at Another Topic',
    date: '2025-06-28',
    summary: 'Exploring different subjects is the spice of life and blogging.',
  },
  {
    id: 'benefits-of-reading', // New
    title: 'Unlocking Worlds: The Timeless Benefits of Reading',
    date: '2025-06-20',
    summary: 'Beyond mere entertainment, reading offers a wealth of cognitive, emotional, and personal growth advantages. Explore why picking up a book is one of the best investments in yourself.'
  },
  {
    id: 'future-of-remote-work', // New
    title: 'The Evolving Landscape: Navigating the Future of Remote Work',
    date: '2025-06-15',
    summary: 'Remote work has rapidly transformed from a niche perk to a mainstream reality. What does its future hold, and how can individuals and organizations adapt to thrive in this new era?'
  }
];

// Function to get all post metadata, potentially sorted
export const getAllPosts = () => {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date descending
};

// Function to get a single post's metadata
export const getPostById = (id) => {
  return posts.find(post => post.id === id);
};
