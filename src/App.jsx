import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './components/common/PageLayout';

// Import các trang
import AboutUs          from './pages/public/AboutUs';
import CompanyInfor      from './pages/public/CompanyInfor';
// import NewsPage       from './pages/public/NewsPage';
// import NewsDetailPage from './pages/public/NewsDetailPage';
import Contact   from './pages/public/Contact';
import ServiceCategoryPage from './pages/public/ServiceCategoryPage';
import ServiceDetailPage   from './pages/public/ServiceDetailPage';

function App() {
  return (
    <BrowserRouter>
      <PageLayout>             {/* ← Navbar + Footer bọc ngoài */}
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/gioi-thieu" element={<CompanyInfor />} />
          {/* <Route path="/tin-tuc"       element={<NewsPage />} /> */}
          {/* <Route path="/tin-tuc/:slug" element={<NewsDetailPage />} /> */}
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/dich-vu/:category" element={<ServiceCategoryPage />} />
          <Route path="/dich-vu/:category/:slug" element={<ServiceDetailPage />} />
        </Routes>
      </PageLayout>             {/* ← chỉ phần <Routes> thay đổi */}
    </BrowserRouter>
  );
}

export default App;