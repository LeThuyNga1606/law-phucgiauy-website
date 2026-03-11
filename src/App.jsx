import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

import PageLayout from "./components/common/PageLayout";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminLayout from "./components/admin/AdminLayout";

// Public pages
import AboutUs from "./pages/public/AboutUs";
import CompanyInfor from "./pages/public/CompanyInfor";
import News from "./pages/public/News";
import NewsDetail from "./pages/public/NewsDetail";
import Contact from "./pages/public/Contact";
import ServiceCategory from "./pages/public/ServiceCategory";
import ServiceDetail from "./pages/public/ServiceDetail";
import NotFound from "./pages/public/NotFound";

// Admin pages
import Login from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPosts from "./pages/admin/AdminPosts";
import AdminPostEditor from "./pages/admin/AdminPostEditor";
import AdminServices from "./pages/admin/AdminServices";

// Wrapper dùng chung cho tất cả trang admin
function AdminWrapper({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);
  return <AdminLayout user={user}>{children}</AdminLayout>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── PUBLIC: có Navbar + Footer ── */}
        <Route element={<PageLayout />}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/gioi-thieu" element={<CompanyInfor />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/tin-tuc/:slug" element={<NewsDetail />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/dich-vu/:category" element={<ServiceCategory />} />
          <Route path="/dich-vu/:category/:slug" element={<ServiceDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* ── ADMIN LOGIN: không có layout nào ── */}
        <Route path="/admin/login" element={<Login />} />
        {/* ── ADMIN: có AdminLayout (header ngang) ── */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminWrapper>
                <AdminDashboard />
              </AdminWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/posts"
          element={
            <ProtectedRoute>
              <AdminWrapper>
                <AdminPosts />
              </AdminWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/posts/new"
          element={
            <ProtectedRoute>
              <AdminWrapper>
                <AdminPostEditor />
              </AdminWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/posts/:id/edit"
          element={
            <ProtectedRoute>
              <AdminWrapper>
                <AdminPostEditor />
              </AdminWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/services"
          element={
            <ProtectedRoute>
              <AdminWrapper>
                <AdminServices />
              </AdminWrapper>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
