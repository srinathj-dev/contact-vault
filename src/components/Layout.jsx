import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-dvh flex flex-col bg-[#f9fafc] overflow-hidden">
      <Header />

      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <main className="flex flex-1 justify-center gap-2 p-4 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
