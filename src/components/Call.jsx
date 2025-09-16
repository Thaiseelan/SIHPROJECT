import React, { useState } from 'react';
import './Call.css';

const Call = () => {
  const [callType, setCallType] = useState('video');
  const [isCallActive, setIsCallActive] = useState(false);

  const callOptions = [
    {
      id: 'video',
      icon: 'fas fa-video',
      title: 'Video Call',
      description: 'Face-to-face consultation with professionals',
      duration: '30-60 min',
      price: '$75/hour',
      color: 'video'
    },
    {
      id: 'phone',
      icon: 'fas fa-phone',
      title: 'Phone Call',
      description: 'Voice consultation for privacy and comfort',
      duration: '30-45 min',
      price: '$50/hour',
      color: 'phone'
    },
    {
      id: 'chat',
      icon: 'fas fa-comments',
      title: 'Chat Support',
      description: 'Instant messaging support available 24/7',
      duration: 'Unlimited',
      price: '$25/hour',
      color: 'chat'
    }
  ];

  const professionals = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Clinical Psychologist',
      experience: '8 years',
      rating: 4.9,
      availability: 'Available now',
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Psychiatrist',
      experience: '12 years',
      rating: 4.8,
      availability: 'Available in 30 min',
      avatar: 'MC'
    },
    {
      id: 3,
      name: 'Lisa Rodriguez',
      specialty: 'Licensed Therapist',
      experience: '6 years',
      rating: 4.9,
      availability: 'Available now',
      avatar: 'LR'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Counselor',
      experience: '10 years',
      rating: 4.7,
      availability: 'Available tomorrow',
      avatar: 'JW'
    }
  ];

  const handleStartCall = () => {
    setIsCallActive(true);
    // In a real app, this would initiate the call
    setTimeout(() => setIsCallActive(false), 5000);
  };

  return (
    <div className="call">
      <div className="call-header">
        <h2>Connect with Professionals</h2>
        <p>Get the support you need from qualified mental health professionals</p>
      </div>

      <div className="call-options">
        {callOptions.map((option) => (
          <div 
            key={option.id} 
            className={`call-card ${option.color} ${callType === option.id ? 'selected' : ''}`}
            onClick={() => setCallType(option.id)}
          >
            <div className="call-icon">
              <i className={option.icon}></i>
            </div>
            <div className="call-content">
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <div className="call-meta">
                <span className="duration">{option.duration}</span>
                <span className="price">{option.price}</span>
              </div>
            </div>
            <div className="call-action">
              <button 
                className="btn-primary"
                onClick={handleStartCall}
              >
                <i className="fas fa-phone"></i>
                Schedule Call
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="professionals-section">
        <h3>Available Professionals</h3>
        <div className="professionals-grid">
          {professionals.map((professional) => (
            <div key={professional.id} className="professional-card">
              <div className="professional-avatar">
                {professional.avatar}
              </div>
              <div className="professional-info">
                <h4>{professional.name}</h4>
                <p className="specialty">{professional.specialty}</p>
                <div className="professional-meta">
                  <span className="experience">{professional.experience} experience</span>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <span>{professional.rating}</span>
                  </div>
                </div>
                <div className="availability">
                  <i className="fas fa-circle"></i>
                  <span>{professional.availability}</span>
                </div>
              </div>
              <button className="book-button">
                <i className="fas fa-calendar-plus"></i>
                Book
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="emergency-section">
        <div className="emergency-card">
          <div className="emergency-icon">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
          <div className="emergency-content">
            <h3>Emergency Support</h3>
            <p>If you're experiencing a mental health crisis, please contact emergency services immediately.</p>
            <div className="emergency-contacts">
              <a href="tel:988" className="emergency-button">
                <i className="fas fa-phone"></i>
                Call 988 (Suicide & Crisis Lifeline)
              </a>
              <a href="tel:911" className="emergency-button">
                <i className="fas fa-ambulance"></i>
                Call 911 (Emergency)
              </a>
            </div>
          </div>
        </div>
      </div>

      {isCallActive && (
        <div className="call-modal">
          <div className="modal-content">
            <div className="call-status">
              <div className="call-icon-large">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Connecting...</h3>
              <p>Please wait while we connect you with a professional</p>
              <div className="call-timer">00:05</div>
            </div>
            <button 
              className="end-call-button"
              onClick={() => setIsCallActive(false)}
            >
              <i className="fas fa-phone-slash"></i>
              End Call
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Call;
