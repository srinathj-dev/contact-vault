import { Search } from 'lucide-react';
const SearchBar = ({ onChange, value }) => {
  return (
    <div className={'input-container'}>
      <Search className="text-slate-400" size={18} />
      <input
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
