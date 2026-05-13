import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col bg-[#f9fafc]">
      <div> 
        <Header />
      </div>
      <div className="flex flex-1 mt-16">
        
        <Sidebar />
        <main className=" flex flex-col flex-1 justify-start items-center p-4 gap-6 ">
          { children }
        </main>
      </div>
    </div>
  )
}

export default Layout
