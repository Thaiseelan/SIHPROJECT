import React, { useState, useEffect, useRef } from 'react';
import './LoginPage.css';
import { GoogleLogin } from '@react-oauth/google';
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
export default function LoginPage({ onBackToFeatures, onLogin }) {
    const [mobileNumber, setMobileNumber] = useState('');
    const [countryCode] = useState('+91');
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [step, setStep] = useState("register");

    const register = async () => {
        await fetch("http://localhost:5000/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone }),
        });
        setStep("verify");
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
                    <div>
                        {step === "register" && (
                            <>
                                <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" />
                                <button onClick={register}>Send OTP</button>
                            </>
                        )}
                        {step === "verify" && (
                            <>
                                <input value={otp} onChange={e => setOtp(e.target.value)} placeholder="Enter OTP" />
                                <button onClick={verify}>Verify</button>
                            </>
                        )}
                    </div>


                    <p className="privacy-text">By continuing, you agree to our privacy policy and terms of service designed to protect student wellbeing.</p>

                    <div className="divider"><span>Or connect with</span></div>

                    <div className="social-login">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                                if (onLogin) {
                                    onLogin();
                                }
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
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


