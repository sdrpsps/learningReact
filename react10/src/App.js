import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';
import StudentPage from './pages/StudentPage';
import Layout from './components/Layout/Layout';
import NeedAuth from './components/NeedAuth/NeedAuth';
import useAutoLogout from './hooks/useAutoLogout';

function App() {
  // 自定义自动登出钩子
  useAutoLogout();
  return (
    <div className="App">
      <Layout>
        {/* 类似 Vue 的 <router-view /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/profile"
            element={
              <NeedAuth>
                <ProfilePage />
              </NeedAuth>
            }
          />
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/student"
            element={
              <NeedAuth>
                <StudentPage />
              </NeedAuth>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
