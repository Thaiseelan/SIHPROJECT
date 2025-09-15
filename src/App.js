import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import ChatPage from './components/ChatPage';
import LoginPage from './components/LoginPage';
import Resources from './components/Resources';
import BookSession from './components/BookSession';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigation = (section) => {
    // Push section to browser history so Back works
    try {
      window.history.pushState({ section }, '', `#${section}`);
    } catch (_) { }
    setActiveSection(section);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Initialize history to dashboard on login
    try {
      window.history.replaceState({ section: 'dashboard' }, '', '#dashboard');
    } catch (_) { }
    setActiveSection('dashboard');
  };

  // Manage body class for scrolling
  useEffect(() => {
    if (!isLoggedIn) {
      document.body.classList.add('login-active');
    } else {
      document.body.classList.remove('login-active');
    }

    // Cleanup function
    return () => {
      document.body.classList.remove('login-active');
    };
  }, [isLoggedIn]);

  // Read initial section from URL hash and listen for Back/Forward
  useEffect(() => {
    // On first load (when logged in), pick up hash route
    if (isLoggedIn) {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash) {
        setActiveSection(hash);
      } else {
        try {
          window.history.replaceState({ section: activeSection }, '', `#${activeSection}`);
        } catch (_) { }
      }
    }

    const onPopState = (event) => {
      const sectionFromState = event.state && event.state.section ? event.state.section : (window.location.hash.replace('#', '') || 'dashboard');
      setActiveSection(sectionFromState);
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [isLoggedIn]);

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigation} />;
      case 'chat':
        return <ChatPage />;
      case 'resources':
        return <Resources onNavigate={handleNavigation} />;
      case 'book':
        return <BookSession onNavigate={handleNavigation} />;
      default:
        return <Dashboard onNavigate={handleNavigation} />;
    }
  };

  // Show LoginPage if not logged in
  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      {renderContent()}
    </div>
  );
}

export default App;
