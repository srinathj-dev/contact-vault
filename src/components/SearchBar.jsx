import { Search } from 'lucide-react';
const SearchBar = ({ onChange, value, inputRef }) => {
  return (
    <div
      className={
        'input-container bg-white shadow-xs hover:border-2 hover:border-indigo-600 pl-4 pr-4 py-2 border-slate-200  focus:ring-2 focus:ring-indigo-500 focus:border-2 focus:border-indigo-500 outline-none transition-all text-base sm:text-lg'
      }
    >
      <Search className="text-slate-400" size={18} />
      <input
        ref={inputRef}
        value={value}
        type="text"
        name="search-bar"
        placeholder="Search contacts... (Press / to focus)"
        className={'input-primary w-full'}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
