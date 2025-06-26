// src/App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import AboutUsPage from './components/AboutUsPage';
import ContactUsPage from './components/ContactUsPage';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import { AppProvider, useAppContext } from './contexts/AppContext'; // Import AppProvider and hook
import ImmersiveHeader from './components/ImmersiveHeader';

// Inner component to access context
const MainLayout = () => {
  const { isImmersiveMode, currentPageTitle, isMainNavVisible } = useAppContext();

  return (
    <div className={`App ${isImmersiveMode ? 'immersive-active' : ''}`}>
      {/* Conditional Header Rendering Logic */}
      {isImmersiveMode ? (
        isMainNavVisible ? <Header /> : <ImmersiveHeader title={currentPageTitle} />
      ) : (
        <Header />
      )}

      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogPostPage />} />
        </Routes>
      </div>
      {!isImmersiveMode && <Footer />} {/* Conditionally render Footer */}
    </div>
  );
}

function App() {
  return (
    <AppProvider> {/* Wrap with AppProvider */}
      <Router>
        <MainLayout />
      </Router>
    </AppProvider>
  );
}

export default App;
