import React from 'react';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import OAuthCallback from './pages/OAuthCallback/OAuthCallback';
import AuthGuard from './pages/Auth/AuthGuard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <AuthGuard>
            <HomePage />
          </AuthGuard>
        } />
        <Route path="/login" element={
          <LoginPage />
        } />
        <Route path="/oauth/callback" element={<OAuthCallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
