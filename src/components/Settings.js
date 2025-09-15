import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    profile: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      dateOfBirth: '1990-01-01',
      gender: 'Male'
    },
    notifications: {
      dailyReminders: true,
      weeklyReports: true,
      emailNotifications: true,
      pushNotifications: true,
      smsNotifications: false
    },
    privacy: {
      dataSharing: false,
      anonymousMode: false,
      profileVisibility: 'Private',
      dataRetention: '1 year'
    },
    preferences: {
      theme: 'Dark',
      language: 'English',
      timezone: 'UTC-5',
      units: 'Imperial'
    }
  });

  const handleInputChange = (section, field, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    // In a real app, this would save to backend
    alert('Settings saved successfully!');
  };

  return (
    <div className="settings">
      <div className="settings-header">
        <h2>Settings</h2>
        <p>Manage your account preferences and privacy settings</p>
      </div>

      <div className="settings-content">
        {/* Profile Settings */}
        <div className="settings-section">
          <h3>Profile Settings</h3>
          <div className="settings-grid">
            <div className="setting-item">
              <label>Full Name</label>
              <input
                type="text"
                value={settings.profile.name}
                onChange={(e) => handleInputChange('profile', 'name', e.target.value)}
              />
            </div>
            <div className="setting-item">
              <label>Email Address</label>
              <input
                type="email"
                value={settings.profile.email}
                onChange={(e) => handleInputChange('profile', 'email', e.target.value)}
              />
            </div>
            <div className="setting-item">
              <label>Phone Number</label>
              <input
                type="tel"
                value={settings.profile.phone}
                onChange={(e) => handleInputChange('profile', 'phone', e.target.value)}
              />
            </div>
            <div className="setting-item">
              <label>Date of Birth</label>
              <input
                type="date"
                value={settings.profile.dateOfBirth}
                onChange={(e) => handleInputChange('profile', 'dateOfBirth', e.target.value)}
              />
            </div>
            <div className="setting-item">
              <label>Gender</label>
              <select
                value={settings.profile.gender}
                onChange={(e) => handleInputChange('profile', 'gender', e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="settings-section">
          <h3>Notifications</h3>
          <div className="settings-grid">
            <div className="setting-item toggle">
              <div className="setting-info">
                <label>Daily Reminders</label>
                <p>Receive daily check-in reminders</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.dailyReminders}
                  onChange={(e) => handleInputChange('notifications', 'dailyReminders', e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="setting-item toggle">
              <div className="setting-info">
                <label>Weekly Reports</label>
                <p>Get weekly progress summaries</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.weeklyReports}
                  onChange={(e) => handleInputChange('notifications', 'weeklyReports', e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="setting-item toggle">
              <div className="setting-info">
                <label>Email Notifications</label>
                <p>Receive updates via email</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.emailNotifications}
                  onChange={(e) => handleInputChange('notifications', 'emailNotifications', e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="setting-item toggle">
              <div className="setting-info">
                <label>Push Notifications</label>
                <p>Get notifications on your device</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.pushNotifications}
                  onChange={(e) => handleInputChange('notifications', 'pushNotifications', e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="setting-item toggle">
              <div className="setting-info">
                <label>SMS Notifications</label>
                <p>Receive text message alerts</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.smsNotifications}
                  onChange={(e) => handleInputChange('notifications', 'smsNotifications', e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="settings-section">
          <h3>Privacy & Security</h3>
          <div className="settings-grid">
            <div className="setting-item toggle">
              <div className="setting-info">
                <label>Data Sharing</label>
                <p>Allow anonymous data sharing for research</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.privacy.dataSharing}
                  onChange={(e) => handleInputChange('privacy', 'dataSharing', e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="setting-item toggle">
              <div className="setting-info">
                <label>Anonymous Mode</label>
                <p>Hide your identity in community features</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.privacy.anonymousMode}
                  onChange={(e) => handleInputChange('privacy', 'anonymousMode', e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="setting-item">
              <label>Profile Visibility</label>
              <select
                value={settings.privacy.profileVisibility}
                onChange={(e) => handleInputChange('privacy', 'profileVisibility', e.target.value)}
              >
                <option value="Public">Public</option>
                <option value="Private">Private</option>
                <option value="Friends Only">Friends Only</option>
              </select>
            </div>
            <div className="setting-item">
              <label>Data Retention</label>
              <select
                value={settings.privacy.dataRetention}
                onChange={(e) => handleInputChange('privacy', 'dataRetention', e.target.value)}
              >
                <option value="30 days">30 days</option>
                <option value="6 months">6 months</option>
                <option value="1 year">1 year</option>
                <option value="Indefinitely">Indefinitely</option>
              </select>
            </div>
          </div>
        </div>

        {/* App Preferences */}
        <div className="settings-section">
          <h3>App Preferences</h3>
          <div className="settings-grid">
            <div className="setting-item">
              <label>Theme</label>
              <select
                value={settings.preferences.theme}
                onChange={(e) => handleInputChange('preferences', 'theme', e.target.value)}
              >
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
                <option value="Auto">Auto</option>
              </select>
            </div>
            <div className="setting-item">
              <label>Language</label>
              <select
                value={settings.preferences.language}
                onChange={(e) => handleInputChange('preferences', 'language', e.target.value)}
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
            </div>
            <div className="setting-item">
              <label>Timezone</label>
              <select
                value={settings.preferences.timezone}
                onChange={(e) => handleInputChange('preferences', 'timezone', e.target.value)}
              >
                <option value="UTC-5">UTC-5 (EST)</option>
                <option value="UTC-6">UTC-6 (CST)</option>
                <option value="UTC-7">UTC-7 (MST)</option>
                <option value="UTC-8">UTC-8 (PST)</option>
              </select>
            </div>
            <div className="setting-item">
              <label>Units</label>
              <select
                value={settings.preferences.units}
                onChange={(e) => handleInputChange('preferences', 'units', e.target.value)}
              >
                <option value="Imperial">Imperial (lbs, ft)</option>
                <option value="Metric">Metric (kg, m)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Account Actions */}
        <div className="settings-section">
          <h3>Account Actions</h3>
          <div className="account-actions">
            <button className="action-button primary">
              <i className="fas fa-download"></i>
              Export Data
            </button>
            <button className="action-button secondary">
              <i className="fas fa-key"></i>
              Change Password
            </button>
            <button className="action-button warning">
              <i className="fas fa-user-times"></i>
              Deactivate Account
            </button>
            <button className="action-button danger">
              <i className="fas fa-trash"></i>
              Delete Account
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="save-section">
          <button className="save-button" onClick={handleSave}>
            <i className="fas fa-save"></i>
            Save Changes
          </button>
        </div>
      </div>

    </div>
  );
};

export default Settings;
