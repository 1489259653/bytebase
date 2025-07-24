import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  // 登录逻辑保持不变
  const handleGitHubLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&redirect_uri=${window.location.origin}/oauth/callback`;
  };

  const handleGoogleLogin = () => {
    console.log('Google login');
  };

  const handleMicrosoftLogin = () => {
    console.log('Microsoft login');
  };

  const handleContinue = (e) => {
    e.preventDefault();


    console.log('Continue');
  };
  return (
    <div className="login-background">
      <main className="login-main">
        <section className="login-section">
          <div className="login-content-wrapper">
            <div className="logo-container">
              <img
                src="https://www.bytebase.com/images/logo.svg"
                alt="Bytebase"
                className="logo"
              />
            </div>

            <h1 className="title">欢迎</h1>
            <p className="description">登录 Bytebase 以继续使用 Bytebase Hub。</p>

            <div className="social-login-group">
              <button onClick={handleGoogleLogin} className="social-button">
                <span className="social-icon google-icon"></span>
                <span className='social-button-text'>继续使用 Google</span>
              </button>
              <button onClick={handleGitHubLogin} className="social-button">
                <span className="social-icon github-icon"></span>
                <span className='social-button-text'>继续使用 GitHub</span>
              </button>
              <button onClick={handleMicrosoftLogin} className="social-button">
                <span className="social-icon microsoft-icon"></span>
                <span className='social-button-text'>继续使用 Microsoft Account</span>
              </button>
            </div>

            <div className="divider">或</div>

            <form className="email-login-form" method='post'>
              <input
                type="email"
                placeholder=""
                required
                className="email-input"
              />
              <label className="placeholder-label">电子邮件地址*</label>
              <button type="submit" className="submit-btn" onClick={handleContinue} >继续</button>
            </form>

            <p className="register-text">
              没有帐户？ <a href="#" className="register-link">注册</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;