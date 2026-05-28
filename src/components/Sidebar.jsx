import AddContactBtn from './AddContactBtn';

const Sidebar = () => {
  // here requirement is vertical alignment of elements with gap-2 using grid is easy to understand,
  // grid is for vertical allignment gap-2 is for gap,
  // Than flex flex-col  gap-2,
  return (
    <aside className="w-40 border-r border-gray-200 p-4">
      <nav className="flex  flex-col gap-2">
        <button className="btn-primary">All Contacts</button>
        <button className="btn-primary">Favorites</button>
        <AddContactBtn />
      </nav>
    </aside>
  );
};

export default Sidebar;
