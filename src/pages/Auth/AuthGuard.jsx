// AuthGuard.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

// 路由守卫组件
const AuthGuard = ({ children }) => {
  // 检查localStorage中是否存在token
  const isAuthenticated = localStorage.getItem('token') !== null;

  // 如果未登录，重定向到登录页
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 已登录，渲染受保护的组件
  return children;
};

export default AuthGuard;