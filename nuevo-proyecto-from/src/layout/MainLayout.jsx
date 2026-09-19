import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="bg-slate-200 flex-1 flex flex-col min-h-screen">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
