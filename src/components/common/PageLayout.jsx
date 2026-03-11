import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatButtons from "./FloatButtons";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="page-layout">
      <Navbar />
      <main className="page-main" style={{ paddingTop: 108 }}>
        <Outlet />
      </main>
      <Footer />
      <FloatButtons />
    </div>
  );
};

export default PageLayout;
