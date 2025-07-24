import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

// 在登录成功后调用此函数
async function fetchGitHubUser(accessToken) {
  if (!accessToken) {
    return
  }
  const response = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json()
}

const OAuthCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // 获取 URL 查询参数
  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      // 改为请求本地代理接口（注意路径前缀 /api/github）
      fetch('/api/github/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json', // GitHub 要求返回 JSON 格式
        },
        body: JSON.stringify({
          client_id: import.meta.env.VITE_GITHUB_CLIENT_ID, // 替换为你的 GitHub OAuth App Client ID
          client_secret: import.meta.env.VITE_GITHUB_CLIENT_SECRET, // 替换为你的 GitHub OAuth App Client Secret
          code,
        }),
      })
        .then((res) => res.json())
        .then(async (data) => {
          localStorage.setItem('token', data.access_token);
          const { login, avatar_url } = await fetchGitHubUser(data.access_token)

          localStorage.setItem('user', JSON.stringify({
            nickname: login, // GitHub 用户名
            avatar: avatar_url, // 头像 URL
          }));
          navigate('/');
        })
        .catch((err) => {
          console.error('GitHub OAuth 失败:', err);
          navigate('/login');
        });
    }
  }, [searchParams, navigate]);
  return (
    <div className="callback-container">
      <p>Processing GitHub login...</p>
    </div>
  );
};

export default OAuthCallback;
