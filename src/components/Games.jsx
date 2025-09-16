import React, { useState } from 'react';
import './Games.css';

const Games = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
      id: 1,
      title: 'Memory Challenge',
      description: 'Improve your memory skills with fun exercises',
      icon: 'fas fa-puzzle-piece',
      difficulty: 'Easy',
      duration: '5-10 min',
      category: 'Memory',
      color: 'memory'
    },
    {
      id: 2,
      title: 'Focus Builder',
      description: 'Enhance concentration and attention span',
      icon: 'fas fa-brain',
      difficulty: 'Medium',
      duration: '10-15 min',
      category: 'Focus',
      color: 'focus'
    },
    {
      id: 3,
      title: 'Strategy Games',
      description: 'Boost problem-solving and critical thinking',
      icon: 'fas fa-chess',
      difficulty: 'Hard',
      duration: '15-30 min',
      category: 'Strategy',
      color: 'strategy'
    },
    {
      id: 4,
      title: 'Reaction Time',
      description: 'Test and improve your reaction speed',
      icon: 'fas fa-bolt',
      difficulty: 'Easy',
      duration: '3-5 min',
      category: 'Speed',
      color: 'speed'
    },
    {
      id: 5,
      title: 'Pattern Recognition',
      description: 'Develop visual pattern recognition skills',
      icon: 'fas fa-shapes',
      difficulty: 'Medium',
      duration: '8-12 min',
      category: 'Visual',
      color: 'pattern'
    },
    {
      id: 6,
      title: 'Word Association',
      description: 'Enhance verbal fluency and creativity',
      icon: 'fas fa-font',
      difficulty: 'Easy',
      duration: '5-8 min',
      category: 'Language',
      color: 'word'
    }
  ];

  const achievements = [
    { title: 'Memory Master', description: 'Complete 10 memory challenges', progress: 7, total: 10 },
    { title: 'Focus Champion', description: 'Maintain focus for 20 minutes', progress: 15, total: 20 },
    { title: 'Strategy Expert', description: 'Win 5 strategy games', progress: 3, total: 5 },
    { title: 'Speed Demon', description: 'Achieve perfect reaction time', progress: 0, total: 1 }
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex M.', score: 2450, avatar: 'A' },
    { rank: 2, name: 'Sarah K.', score: 2380, avatar: 'S' },
    { rank: 3, name: 'Mike R.', score: 2290, avatar: 'M' },
    { rank: 4, name: 'Lisa C.', score: 2150, avatar: 'L' },
    { rank: 5, name: 'John D.', score: 2080, avatar: 'J' }
  ];

  const handlePlayGame = (game) => {
    setSelectedGame(game);
    // In a real app, this would start the game
    setTimeout(() => setSelectedGame(null), 2000);
  };

  return (
    <div className="games">
      <div className="games-header">
        <h2>Mind Games</h2>
        <p>Boost your cognitive skills with fun and engaging games</p>
      </div>

      <div className="games-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-trophy"></i>
          </div>
          <div className="stat-content">
            <span className="stat-value">1,250</span>
            <span className="stat-label">Total Score</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-medal"></i>
          </div>
          <div className="stat-content">
            <span className="stat-value">8</span>
            <span className="stat-label">Achievements</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-clock"></i>
          </div>
          <div className="stat-content">
            <span className="stat-value">45m</span>
            <span className="stat-label">Play Time</span>
          </div>
        </div>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <div key={game.id} className={`game-card ${game.color}`}>
            <div className="game-icon">
              <i className={game.icon}></i>
            </div>
            <div className="game-content">
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              <div className="game-meta">
                <span className="difficulty">{game.difficulty}</span>
                <span className="duration">{game.duration}</span>
                <span className="category">{game.category}</span>
              </div>
            </div>
            <button 
              className="play-button"
              onClick={() => handlePlayGame(game)}
            >
              <i className="fas fa-play"></i>
              Play Now
            </button>
          </div>
        ))}
      </div>

      {selectedGame && (
        <div className="game-modal">
          <div className="modal-content">
            <h3>Starting {selectedGame.title}...</h3>
            <p>Get ready to play!</p>
            <div className="loading-spinner"></div>
          </div>
        </div>
      )}

      <div className="achievements-section">
        <h3>Achievements</h3>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="achievement-content">
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                  ></div>
                </div>
                <span className="progress-text">{achievement.progress}/{achievement.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="leaderboard-section">
        <h3>Leaderboard</h3>
        <div className="leaderboard">
          {leaderboard.map((player) => (
            <div key={player.rank} className="leaderboard-item">
              <div className="rank">{player.rank}</div>
              <div className="player-avatar">{player.avatar}</div>
              <div className="player-info">
                <span className="player-name">{player.name}</span>
                <span className="player-score">{player.score} pts</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Games;
