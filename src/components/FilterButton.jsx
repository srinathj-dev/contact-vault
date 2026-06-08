const FilterButton = ({ filteringContacts, filterState, filterButtonName }) => {
  return (
    <button
      className={`px-3 py-1 font-medium rounded-md cursor-pointer transition-all duration-500 ease-in-out ${filterState == filterButtonName ? 'bg-white text-indigo-600' : 'bg-slate-200 text-slate-600'}`}
      onClick={() => filteringContacts(filterButtonName)}
    >
      {filterButtonName}
    </button>
  );
};

export default FilterButton;
