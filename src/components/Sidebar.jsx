const Sidebar = () => {
  // here requirement is vertical alignment of elements with gap-2 using grid is easy to understand,
  // grid is for vertical allignment gap-2 is for gap,
  // Than flex flex-col  gap-2, 
  return (
    <aside className="w-60 border-r border-gray-200 p-4">
      <nav className="flex  flex-col gap-2">
        <button class="btn-primary">All Contacts</button>
        <button class="btn-primary">Favorites</button>
        <button class="btn-primary">Add Contact</button>
      </nav>
    </aside>
  )
}

export default Sidebar
