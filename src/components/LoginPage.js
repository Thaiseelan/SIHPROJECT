import React, { useState } from 'react';
import './LoginPage.css';

export default function LoginPage({ onBackToFeatures, onLogin }) {
    const [mobileNumber, setMobileNumber] = useState('');
    const [countryCode] = useState('+91');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call onLogin to navigate to dashboard
        if (onLogin) {
            onLogin();
        }
    };

    return (
        <div className="login-container">
            <div className="login-left-pane">
                <div className="login-mindcare-content">
                    <div className="login-mindcare-logo"></div>
                    <h1 className="login-mindcare-title">MindCare</h1>
                    <p className="login-mindcare-subtitle">Your Personal Mental Health Companion</p>

                    <div className="login-features-grid">
                        <div className="login-feature-card">
                            <span className="login-feature-icon">💬</span>
                            <div className="login-feature-text">AI Chatbot Support</div>
                        </div>
                        <div className="login-feature-card">
                            <span className="login-feature-icon">👥</span>
                            <div className="login-feature-text">Peer Community</div>
                        </div>
                        <div className="login-feature-card">
                            <span className="login-feature-icon">🎯</span>
                            <div className="login-feature-text">Mood Tracking</div>
                        </div>
                        <div className="login-feature-card">
                            <span className="login-feature-icon">🎵</span>
                            <div className="login-feature-text">Therapy Sessions</div>
                        </div>
                    </div>

                    <p className="login-mindcare-tagline">
                        Supporting student mental health through AI-powered conversations and community care
                    </p>
                </div>
            </div>

            <div className="login-right-pane">
                <div className="form-container">
                    <h1 className="welcome-title">Welcome to Your Safe Space</h1>
                    <p className="welcome-subtitle">Enter your mobile number to access personalized mental health support.</p>

                    <div className="trust-indicators">
                        <div className="trust-item"><div className="trust-icon secure">🛡️</div><span>Secure</span></div>
                        <div className="trust-item"><div className="trust-icon confidential">❤️</div><span>Confidential</span></div>
                        <div className="trust-item"><div className="trust-icon support">👥</div><span>24/7 Support</span></div>
                    </div>

                    <form onSubmit={handleSubmit} className="mobile-form">
                        <div className="mobile-input-container">
                            <div className="country-code-dropdown"><span className="flag">🇮🇳</span><span className="code">{countryCode}</span></div>
                            <input type="tel" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Enter your mobile number" className="mobile-input" required />
                        </div>
                        <button type="submit" className="start-journey-btn">Start Your Journey</button>
                    </form>

                    <p className="privacy-text">By continuing, you agree to our privacy policy and terms of service designed to protect student wellbeing.</p>

                    <div className="divider"><span>Or connect with</span></div>

                    <div className="social-login">
                        <button className="social-btn facebook"><span className="social-icon">f</span></button>
                        <button className="social-btn email"><span className="social-icon">✉</span></button>
                        <button className="social-btn apple"><span className="social-icon">🍎</span></button>
                    </div>

                    <div className="crisis-support"><span>Need immediate help?</span><button className="crisis-link">Crisis Support Available 24/7</button></div>

                    {onBackToFeatures && (
                        <button onClick={onBackToFeatures} className="mobile-back-button">← Back</button>
                    )}
                </div>
            </div>
        </div>
    );
}


