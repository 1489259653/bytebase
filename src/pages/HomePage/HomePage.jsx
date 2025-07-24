import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // 引入 CSS 文件

const HomePage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="home-page">
      <h1>Welcome to Bytebase</h1>
      <p>You are now logged in!</p>
      <div className="user-info">
        <h1>欢迎回来, {user?.nickname || '游客'}!</h1>
        {user?.avatar && (
          <img
            src={user.avatar}
            alt="用户头像"
          />
        )}
      </div>
      <button
        className="logout-button"
        onClick={() => {
          localStorage.removeItem('token');
          navigate('/login');
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;
