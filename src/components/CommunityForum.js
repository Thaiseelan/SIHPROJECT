import React, { useState } from 'react';
import './CommunityForum.css';

const CommunityForum = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const forumStats = [
    { icon: 'fas fa-users', value: '2.5K+', label: 'Active Members' },
    { icon: 'fas fa-comments', value: '150+', label: 'Daily Posts' },
    { icon: 'fas fa-heart', value: '98%', label: 'Support Rate' }
  ];

  const categories = [
    { icon: 'fas fa-heart', title: 'Mental Health Support', description: 'Share experiences and get support', posts: 245 },
    { icon: 'fas fa-lightbulb', title: 'Tips & Strategies', description: 'Learn from community wisdom', posts: 189 },
    { icon: 'fas fa-trophy', title: 'Success Stories', description: 'Celebrate achievements together', posts: 156 },
    { icon: 'fas fa-question-circle', title: 'Q&A Forum', description: 'Ask questions and get answers', posts: 98 },
    { icon: 'fas fa-book', title: 'Resources', description: 'Share helpful resources and articles', posts: 134 },
    { icon: 'fas fa-calendar', title: 'Events', description: 'Join community events and meetups', posts: 67 }
  ];

  const recentPosts = [
    {
      id: 1,
      title: 'How to manage anxiety during work presentations',
      author: 'Sarah M.',
      time: '2 hours ago',
      replies: 12,
      likes: 24,
      category: 'Mental Health Support'
    },
    {
      id: 2,
      title: 'My 30-day mindfulness journey - what I learned',
      author: 'Mike R.',
      time: '4 hours ago',
      replies: 8,
      likes: 31,
      category: 'Success Stories'
    },
    {
      id: 3,
      title: 'Best breathing exercises for panic attacks',
      author: 'Dr. Lisa Chen',
      time: '6 hours ago',
      replies: 15,
      likes: 42,
      category: 'Tips & Strategies'
    },
    {
      id: 4,
      title: 'Looking for accountability partner for daily meditation',
      author: 'Alex K.',
      time: '8 hours ago',
      replies: 5,
      likes: 18,
      category: 'Mental Health Support'
    }
  ];

  return (
    <div className="community-forum">
      <div className="forum-header">
        <h2>Community Forum</h2>
        <p>Connect, share, and support each other on your mental wellness journey</p>
      </div>

      <div className="forum-stats">
        {forumStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">
              <i className={stat.icon}></i>
            </div>
            <div className="stat-content">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="forum-tabs">
        <button 
          className={`tab-button ${activeTab === 'discussions' ? 'active' : ''}`}
          onClick={() => setActiveTab('discussions')}
        >
          <i className="fas fa-comments"></i>
          Discussions
        </button>
        <button 
          className={`tab-button ${activeTab === 'categories' ? 'active' : ''}`}
          onClick={() => setActiveTab('categories')}
        >
          <i className="fas fa-folder"></i>
          Categories
        </button>
        <button 
          className={`tab-button ${activeTab === 'members' ? 'active' : ''}`}
          onClick={() => setActiveTab('members')}
        >
          <i className="fas fa-users"></i>
          Members
        </button>
      </div>

      {activeTab === 'discussions' && (
        <div className="discussions-section">
          <div className="section-header">
            <h3>Recent Discussions</h3>
            <button className="btn-primary">
              <i className="fas fa-plus"></i>
              Start Discussion
            </button>
          </div>
          <div className="posts-list">
            {recentPosts.map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-content">
                  <h4>{post.title}</h4>
                  <div className="post-meta">
                    <span className="author">by {post.author}</span>
                    <span className="time">{post.time}</span>
                    <span className="category">{post.category}</span>
                  </div>
                </div>
                <div className="post-stats">
                  <div className="stat">
                    <i className="fas fa-comment"></i>
                    <span>{post.replies}</span>
                  </div>
                  <div className="stat">
                    <i className="fas fa-heart"></i>
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'categories' && (
        <div className="categories-section">
          <h3>Forum Categories</h3>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <div className="category-content">
                  <h4>{category.title}</h4>
                  <p>{category.description}</p>
                  <span className="post-count">{category.posts} posts</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'members' && (
        <div className="members-section">
          <h3>Community Members</h3>
          <div className="members-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((member) => (
              <div key={member} className="member-card">
                <div className="member-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="member-info">
                  <h4>Member {member}</h4>
                  <p>Active contributor</p>
                  <div className="member-stats">
                    <span>Posts: {Math.floor(Math.random() * 50) + 10}</span>
                    <span>Joined: {Math.floor(Math.random() * 12) + 1} months ago</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default CommunityForum;
