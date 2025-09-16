import React from 'react';
import './ProgressTracker.css';

const ProgressTracker = () => {
  const trackerData = [
    { icon: 'fas fa-smile', title: "Today's Mood", value: 'Happy', color: 'mood' },
    { icon: 'fas fa-moon', title: 'Sleep', value: '7.5 hours', color: 'sleep' },
    { icon: 'fas fa-dumbbell', title: 'Exercise', value: '30 minutes', color: 'exercise' },
    { icon: 'fas fa-square', title: 'Mindfulness', value: '15 minutes', color: 'mindfulness' }
  ];

  const weeklyData = [
    { day: 'Mon', mood: 8, sleep: 7.5, exercise: 30, mindfulness: 20 },
    { day: 'Tue', mood: 7, sleep: 8, exercise: 45, mindfulness: 15 },
    { day: 'Wed', mood: 9, sleep: 7, exercise: 20, mindfulness: 25 },
    { day: 'Thu', mood: 6, sleep: 6.5, exercise: 60, mindfulness: 10 },
    { day: 'Fri', mood: 8, sleep: 8.5, exercise: 30, mindfulness: 30 },
    { day: 'Sat', mood: 9, sleep: 9, exercise: 90, mindfulness: 45 },
    { day: 'Sun', mood: 8, sleep: 8, exercise: 0, mindfulness: 20 }
  ];

  return (
    <div className="progress-tracker">
      <div className="daily-tracker">
        <h2>Your Daily Tracker</h2>
        <div className="tracker-items">
          {trackerData.map((item, index) => (
            <div key={index} className="tracker-item">
              <div className={`tracker-icon ${item.color}-icon`}>
                <i className={item.icon}></i>
              </div>
              <h3>{item.title}</h3>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="weekly-progress">
        <h2>Weekly Progress</h2>
        <div className="progress-chart">
          <div className="chart-header">
            <span>Day</span>
            <span>Mood</span>
            <span>Sleep</span>
            <span>Exercise</span>
            <span>Mindfulness</span>
          </div>
          {weeklyData.map((day, index) => (
            <div key={index} className="chart-row">
              <span className="day">{day.day}</span>
              <div className="progress-bar">
                <div 
                  className="progress-fill mood" 
                  style={{ width: `${(day.mood / 10) * 100}%` }}
                ></div>
                <span>{day.mood}/10</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill sleep" 
                  style={{ width: `${(day.sleep / 10) * 100}%` }}
                ></div>
                <span>{day.sleep}h</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill exercise" 
                  style={{ width: `${(day.exercise / 90) * 100}%` }}
                ></div>
                <span>{day.exercise}m</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill mindfulness" 
                  style={{ width: `${(day.mindfulness / 60) * 100}%` }}
                ></div>
                <span>{day.mindfulness}m</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="achievements">
        <h2>Achievements</h2>
        <div className="achievement-grid">
          <div className="achievement-card">
            <div className="achievement-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <h3>7-Day Streak</h3>
            <p>Completed daily check-ins for 7 days in a row</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">
              <i className="fas fa-medal"></i>
            </div>
            <h3>Mindfulness Master</h3>
            <p>Completed 100 minutes of mindfulness practice</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">
              <i className="fas fa-star"></i>
            </div>
            <h3>Mood Champion</h3>
            <p>Maintained positive mood for 5 consecutive days</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProgressTracker;
