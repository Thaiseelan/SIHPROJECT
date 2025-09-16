import React, { useState } from 'react';
import './Logout.css';

const Logout = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    // In a real app, this would handle the logout process
    setTimeout(() => {
      alert('You have been logged out successfully!');
      setIsLoggingOut(false);
    }, 2000);
  };

  const handleCancel = () => {
    // In a real app, this would navigate back to dashboard
    window.location.reload();
  };

  return (
    <div className="logout">
      <div className="logout-container">
        <div className="logout-card">
          <div className="logout-icon">
            <i className="fas fa-sign-out-alt"></i>
          </div>
          
          <div className="logout-content">
            <h2>Are you sure you want to logout?</h2>
            <p>Your progress will be saved automatically and you can continue where you left off when you return.</p>
            
            <div className="logout-stats">
              <div className="stat-item">
                <i className="fas fa-chart-line"></i>
                <span>Progress saved</span>
              </div>
              <div className="stat-item">
                <i className="fas fa-clock"></i>
                <span>Session time: 2h 15m</span>
              </div>
              <div className="stat-item">
                <i className="fas fa-trophy"></i>
                <span>Achievements unlocked: 3</span>
              </div>
            </div>
          </div>
          
          <div className="logout-actions">
            <button 
              className="btn-cancel" 
              onClick={handleCancel}
              disabled={isLoggingOut}
            >
              <i className="fas fa-arrow-left"></i>
              Cancel
            </button>
            <button 
              className="btn-logout" 
              onClick={handleLogout}
              disabled={isLoggingOut}
            >
              {isLoggingOut ? (
                <>
                  <div className="spinner"></div>
                  Logging out...
                </>
              ) : (
                <>
                  <i className="fas fa-sign-out-alt"></i>
                  Logout
                </>
              )}
            </button>
          </div>
        </div>
        
        <div className="logout-info">
          <h3>Before you go...</h3>
          <div className="info-cards">
            <div className="info-card">
              <i className="fas fa-heart"></i>
              <h4>Your Mental Health Matters</h4>
              <p>Remember to take care of yourself. We're here whenever you need support.</p>
            </div>
            <div className="info-card">
              <i className="fas fa-calendar"></i>
              <h4>Schedule Your Next Session</h4>
              <p>Book your next appointment to maintain your wellness journey.</p>
            </div>
            <div className="info-card">
              <i className="fas fa-users"></i>
              <h4>Stay Connected</h4>
              <p>Join our community forum to connect with others on similar journeys.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Logout;
