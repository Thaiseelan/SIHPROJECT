import React, { useState } from 'react';
import './DashboardContent.css';

const DashboardContent = ({ onNavigate }) => {
    const [selectedMood, setSelectedMood] = useState(null);

    const moods = [
        { id: 'happy', emoji: '😊', label: 'Happy' },
        { id: 'excited', emoji: '🤩', label: 'Excited' },
        { id: 'calm', emoji: '😌', label: 'Calm' },
        { id: 'neutral', emoji: '😐', label: 'Neutral' },
        { id: 'sad', emoji: '😢', label: 'Sad' },
        { id: 'anxious', emoji: '😰', label: 'Anxious' }
    ];

    const quickActions = [
        {
            icon: 'fas fa-calendar-plus',
            title: 'Book Session',
            subtitle: 'Professional Counseling',
            description: 'Schedule with licensed therapist',
            color: 'calendar',
            badge: 'Available',
            image: '👩‍⚕️'
        },
        {
            icon: 'fas fa-bullseye',
            title: 'Take Assessment',
            subtitle: 'Mental Health Check',
            description: 'Comprehensive wellness evaluation',
            color: 'target',
            badge: 'Free',
            image: '📊'
        },
        {
            icon: 'fas fa-users',
            title: 'Peer Forum',
            subtitle: 'Community Support',
            description: 'Connect with like-minded individuals',
            color: 'community',
            badge: 'Active',
            image: '👥'
        },
        {
            icon: 'fas fa-gift',
            title: 'Free Trial Available',
            subtitle: 'Premium Features',
            description: 'Unlock advanced wellness tools',
            color: 'gift',
            badge: 'Limited Time',
            image: '🎁'
        },
        {
            icon: 'fas fa-brain',
            title: 'Quick Meditation',
            subtitle: 'Mindfulness Practice',
            description: 'Guided meditation sessions',
            color: 'meditation',
            badge: 'Popular',
            image: '🧘‍♀️'
        }
    ];

    const exercises = [
        { icon: 'fas fa-brain', gradient: 'meditation', title: 'Morning Meditation', subtitle: 'Mindfulness', duration: '10 min' },
        { icon: 'fas fa-coffee', gradient: 'coffee', title: 'Breathing Exercise', subtitle: 'Anxiety Relief', duration: '5 min' },
        { icon: 'fas fa-dumbbell', gradient: 'fitness', title: 'Progressive Relaxation', subtitle: 'Stress Relief', duration: '15 min' }
    ];

    const videos = [
        { title: 'Understanding Anxiety', subtitle: 'Mental Health Education', duration: '12 min', views: '2.1M views' },
        { title: 'Building Resilience', subtitle: 'Wellness Guide', duration: '8 min', views: '890K views' }
    ];

    const musicTracks = [
        { title: 'Calming Piano Melodies', subtitle: 'Peaceful Sounds', category: 'Relaxation', duration: '45 min', color: 'piano' },
        { title: 'Nature Sounds for Focus', subtitle: 'Ambient Collection', category: 'Concentration', duration: '60 min', color: 'nature' },
        { title: 'Sleep Stories & Sounds', subtitle: 'Bedtime Collection', category: 'Sleep', duration: '90 min', color: 'sleep' }
    ];

    const dailyTracker = [
        { title: "Today's Mood", status: "Happy", icon: "😊", color: "teal" },
        { title: "Sleep", status: "7.5 hours", icon: "🌙", color: "pink" },
        { title: "Exercise", status: "30 minutes", icon: "🏋️", color: "orange" },
        { title: "Mindfulness", status: "15 minutes", icon: "🧘", color: "purple" }
    ];

    return (
        <div className="dashboard-content">
            {/* Header */}
            <header className="dashboard-header">
                <div className="header-left">
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
                    <div className="student-badge">
                        <span>S</span>
                    </div>
                </div>
            </header>

            {/* Mood Selection */}
            <div className="section-container">
                <div className="mood-section">
                    <h2>How are you feeling today?</h2>
                    <div className="mood-cards">
                        {moods.map((mood) => (
                            <div
                                key={mood.id}
                                className={`mood-card ${selectedMood === mood.id ? 'selected' : ''}`}
                                onClick={() => setSelectedMood(mood.id)}
                            >
                                <div className="mood-emoji">{mood.emoji}</div>
                                <div className="mood-label">{mood.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* AI Chat Assistant - Single Card */}
            <div className="ai-chat-section">
                <div className="ai-chat-card">
                    <div className="ai-chat-content">
                        <div className="ai-chat-left">
                            <div className="ai-icon">
                                <i className="fas fa-robot"></i>
                            </div>
                            <div className="ai-text">
                                <h3>Your AI chat assistant awaits</h3>
                                <p>Chat smarter and get things done faster with your AI-powered assistant</p>
                            </div>
                            <div className="online-status">
                                <div className="status-dot"></div>
                                <span>Online</span>
                            </div>
                        </div>
                        <div className="ai-chat-right">
                            <div className="chat-window">
                                <div className="chat-header">
                                    <div className="chat-icon">
                                        <i className="fas fa-robot"></i>
                                    </div>
                                    <h4>MindCare AI Assistant</h4>
                                    <div className="chat-online">
                                        <div className="status-dot"></div>
                                        <span>Online</span>
                                    </div>
                                </div>
                                <div className="chat-message">
                                    <p>Hi! How are you feeling today? I'm here to help with your mental wellness journey.</p>
                                    <div className="chat-buttons">
                                        <button className="btn-primary" onClick={() => onNavigate('chat')}>Get Started</button>
                                        <button className="btn-secondary">Watch Demo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="section-container">
                <div className="quick-actions-section">
                    <h2>Quick Actions</h2>
                    <div className="quick-actions-grid">
                        {quickActions.map((action, index) => (
                            <div key={index} className="action-card">
                                <div className="action-image-section">
                                    <div className="action-image">
                                        <span className="action-emoji">{action.image}</span>
                                    </div>
                                    <div className="action-badges">
                                        <span className="action-badge primary">{action.badge}</span>
                                        <span className="action-badge secondary">AI Powered</span>
                                    </div>
                                </div>
                                <div className="action-content">
                                    <div className="action-header">
                                        <div className="action-logo">
                                            <i className="fas fa-heart"></i>
                                            <span>MindCare</span>
                                        </div>
                                    </div>
                                    <h3>{action.title}</h3>
                                    <p className="action-subtitle">{action.subtitle}</p>
                                    <p className="action-description">{action.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recommended Exercises */}
            <div className="section-container">
                <div className="exercises-section">
                    <h2>Recommended Exercises</h2>
                    <div className="exercises-grid">
                        {exercises.map((exercise, index) => (
                            <div key={index} className={`exercise-card ${exercise.gradient}-card`}>
                                <div className="exercise-icon">
                                    <i className={exercise.icon}></i>
                                </div>
                                <div className="play-button">
                                    <i className="fas fa-play"></i>
                                </div>
                                <div className="exercise-content">
                                    <h3>{exercise.title}</h3>
                                    <p>{exercise.subtitle}</p>
                                    <span className="duration">{exercise.duration}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Educational Videos */}
            <div className="section-container">
                <div className="videos-section">
                    <h2>Educational Videos</h2>
                    <div className="videos-grid">
                        {videos.map((video, index) => (
                            <div key={index} className="video-card">
                                <div className="video-thumbnail">
                                    <i className="fas fa-play-circle"></i>
                                </div>
                                <div className="video-content">
                                    <h3>{video.title}</h3>
                                    <p>{video.subtitle}</p>
                                    <div className="video-meta">
                                        <span className="duration">{video.duration}</span>
                                        <span className="views">{video.views}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Music & Sounds */}
            <div className="section-container">
                <div className="music-section">
                    <h2>Music & Sounds</h2>
                    <div className="music-grid">
                        {musicTracks.map((track, index) => (
                            <div key={index} className={`music-card ${track.color}-card`}>
                                <div className={`music-icon ${track.color}`}>
                                    <i className="fas fa-music"></i>
                                </div>
                                <div className="music-content">
                                    <h3>{track.title}</h3>
                                    <p>{track.subtitle}</p>
                                    <div className="music-meta">
                                        <span className="category">{track.category}</span>
                                        <span className="duration">{track.duration}</span>
                                    </div>
                                </div>
                                <div className="play-button">
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Daily Tracker */}
            <div className="section-container">
                <div className="daily-tracker-section">
                    <h2>Your Daily Tracker</h2>
                    <div className="tracker-grid">
                        {dailyTracker.map((tracker, index) => (
                            <div key={index} className={`tracker-card ${tracker.color}-tracker`}>
                                <div className={`tracker-icon ${tracker.color}`}>
                                    <span className="tracker-emoji">{tracker.icon}</span>
                                </div>
                                <div className="tracker-content">
                                    <h3>{tracker.title}</h3>
                                    <p>{tracker.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardContent;

