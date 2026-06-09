import { Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-screen bg-white/90 backdrop-blur border-b-2 border-[#e2e8f1] p-3 fixed z-10 flex justify-center">
      <div className="w-full md:w-4/6 lg:w-7/12 xl:w-6/12 2xl:w-5/12 flex items-center gap-1">
        <div className="bg-indigo-600 flex justify-center items-center p-2 rounded-lg">
          <Shield className="text-white " size={20} />
        </div>
        <h1 className=" text-xl font-semibold">ContactVault</h1>
      </div>
    </header>
  );
};

export default Header;
