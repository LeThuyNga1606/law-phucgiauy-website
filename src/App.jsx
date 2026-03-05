import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './components/common/PageLayout';

// Import các trang
import AboutUs      from './pages/public/AboutUs';
// import AboutPage      from './pages/public/AboutPage';
// import NewsPage       from './pages/public/NewsPage';
// import NewsDetailPage from './pages/public/NewsDetailPage';
// import ContactPage    from './pages/public/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <PageLayout>             {/* ← Navbar + Footer bọc ngoài */}
        <Routes>
          <Route path="/"              element={<AboutUs />} />
          <Route path="/gioi-thieu"    element={<AboutUs />} />
          {/* <Route path="/tin-tuc"       element={<NewsPage />} /> */}
          {/* <Route path="/tin-tuc/:slug" element={<NewsDetailPage />} /> */}
          {/* <Route path="/lien-he"       element={<ContactPage />} /> */}
        </Routes>
      </PageLayout>             {/* ← chỉ phần <Routes> thay đổi */}
    </BrowserRouter>
  );
}

export default App;