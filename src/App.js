import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import ChatPage from './components/ChatPage';
import LoginPage from './components/LoginPage';
import Resources from './components/Resources';
import BookSession from './components/BookSession';
import BookTherapist from './components/BookTherapist';
import './App.css';
import LandingPage from './components/landingpage';
import TrialTest from './components/TrialTest';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('landing');
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

  const handleGetStarted = () => {
    setActiveSection('login');
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
      case 'landing':
        return <LandingPage onGetStarted={handleGetStarted} />;
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigation} />;
      case 'trial-test':
        return <TrialTest />;
      case 'chat':
        return <ChatPage />;
      case 'resources':
        return <Resources onNavigate={handleNavigation} />;
      case 'book':
        return <BookSession onNavigate={handleNavigation} />;
      case 'book-therapist':
        return <BookTherapist onNavigate={handleNavigation} />;
      default:
        return <LandingPage onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="app">
      {renderContent()}
    </div>
  );
}

export default App;
