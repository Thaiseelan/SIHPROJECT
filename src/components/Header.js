import React from 'react';
import './Header.css';

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle" onClick={onToggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <h1>MindCare</h1>
      </div>
      <div className="header-right">
        <div className="status-item">
          <i className="fas fa-star"></i>
          <span>0 pts</span>
        </div>
        <div className="status-item">
          <i className="far fa-star"></i>
          <span>Beginner</span>
        </div>
        <div className="status-item">
          <div className="student-badge">
            <span>S</span>
          </div>
          <div className="student-text">
            <span>Student</span>
            <span>Student</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
