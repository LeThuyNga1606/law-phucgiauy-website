import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/authContext';

// Trang public
import HomePage         from './pages/public/HomePage';
// import AboutPage        from './pages/public/AboutPage';
// import NewsPage         from './pages/public/NewsPage';
// import NewsDetailPage   from './pages/public/NewsDetailPage';
// import ServicePage      from './pages/public/ServicePage';
// import ContactPage      from './pages/public/ContactPage';

// Trang admin
// import LoginPage        from './pages/admin/LoginPage';
// import DashboardPage    from './pages/admin/DashboardPage';
// import PostListPage     from './pages/admin/PostListPage';
// import PostCreatePage   from './pages/admin/PostCreatePage';
// import PostEditPage     from './pages/admin/PostEditPage';


// Route bảo vệ — chỉ admin đăng nhập mới vào được
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to='/admin/login' replace />;
};


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Trang public */}
          <Route path='/'                    element={<HomePage />} />
          {/* <Route path='/gioi-thieu'          element={<AboutPage />} />
          <Route path='/tin-tuc'             element={<NewsPage />} />
          <Route path='/tin-tuc/:slug'       element={<NewsDetailPage />} />
          <Route path='/dich-vu/:slug'       element={<ServicePage />} />
          <Route path='/lien-he'             element={<ContactPage />} /> */}


          {/* Trang admin
          <Route path='/admin/login'         element={<LoginPage />} />
          <Route path='/admin' element={
            <ProtectedRoute><DashboardPage /></ProtectedRoute>
          } />
          <Route path='/admin/bai-viet' element={
            <ProtectedRoute><PostListPage /></ProtectedRoute>
          } />
          <Route path='/admin/bai-viet/tao-moi' element={
            <ProtectedRoute><PostCreatePage /></ProtectedRoute>
          } />
          <Route path='/admin/bai-viet/sua/:id' element={
            <ProtectedRoute><PostEditPage /></ProtectedRoute>
          } /> */}
        </Routes>
      </BrowserRouter>

    </AuthProvider>
  )
}

export default App;
