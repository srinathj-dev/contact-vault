const Footer = () => {
  return (
    <footer className="w-screen bg-white/90 backdrop-blur border-t-2 border-[#e2e8f1] py-8 z-10 flex justify-center">
      <div className="w-full md:w-4/6 lg:w-7/12 xl:w-6/12 2xl:w-5/12 flex items-center justify-center gap-1">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
          <span className="text-xs normal-case font-sans">©</span> 2026
          CONTACTVAULT • SECURE LOCAL STORE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
