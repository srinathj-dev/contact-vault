const Sidebar = () => {
  return (
    <aside className="w-60 border-r border-gray-200 p-4">
      <nav className="grid gap-2">
        <button className="p-1 px-4 rounded-md bg-[#615fff] text-white backdrop-blur-3xl text-nowrap cursor-pointer">All Contacts</button>
        <button className="p-1 px-4 rounded-md bg-[#615fff] text-white backdrop-blur-3xl text-nowrap cursor-pointer">Favorites</button>
        <button className="p-1 px-4 rounded-md bg-[#615fff] text-white backdrop-blur-3xl text-nowrap cursor-pointer">Add Contact</button>
      </nav>
    </aside>
  )
}

export default Sidebar