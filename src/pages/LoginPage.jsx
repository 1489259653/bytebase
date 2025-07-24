import React from 'react';
import './LoginPage.css';



const LoginPage = () => {
  // GitHub OAuth 登录逻辑
  const handleGitHubLogin = () => {
    // 重定向到 GitHub OAuth 授权页面
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&redirect_uri=${window.location.origin}/oauth/callback`;
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Bytebase</h1>
        <p>Sign in to your account</p>
        <button className="github-login-btn" onClick={handleGitHubLogin}>
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
