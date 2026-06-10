import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-dvh w-dvw flex flex-col bg-[#f9fafc] overflow-hidden">
      <Header />
      <div className="flex flex-1 h-svh mt-14">
        <main className="w-full flex flex-1 justify-center gap-2 p-4 overflow-y-auto">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
