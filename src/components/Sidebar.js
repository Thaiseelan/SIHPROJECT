import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, activeSection, onNavigate, onToggleSidebar }) => {
  const menuItems = [
    { id: 'dashboard', icon: 'fas fa-home', label: 'Dashboard' },
    { id: 'book', icon: 'fas fa-calendar-plus', label: 'Book Session' },
    { id: 'analytics', icon: 'fas fa-chart-bar', label: 'Analytics' },
    { id: 'resources', icon: 'fas fa-book', label: 'Resources' },
    { id: 'games', icon: 'fas fa-gamepad', label: 'Game' },
    { id: 'community', icon: 'fas fa-users', label: 'Community' },
    { id: 'contact', icon: 'fas fa-phone', label: 'Contact' },
    { id: 'settings', icon: 'fas fa-cog', label: 'Settings' },
    { id: 'logout', icon: 'fas fa-sign-out-alt', label: 'Logout' }
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="hamburger" onClick={onToggleSidebar}>
          <i className="fas fa-bars"></i>
        </div>
        {isOpen && (
          <div className="sidebar-title">
            <span className="close-btn" onClick={onToggleSidebar}>
              <i className="fas fa-times"></i>
            </span>
            <h3>MindCare AI</h3>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="online-status">
          <div className="status-dot"></div>
          <span>Online</span>
        </div>
      )}

      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <i className={item.icon}></i>
            {isOpen && <span className="nav-label">{item.label}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
