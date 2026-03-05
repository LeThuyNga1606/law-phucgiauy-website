import Navbar from './Navbar';
import Footer from './Footer';
import FloatButtons from './FloatButtons';

const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <Navbar />
      <main className="page-main">
        {children}
      </main>
      <Footer />
      <FloatButtons />
    </div>
  );
};

export default PageLayout;