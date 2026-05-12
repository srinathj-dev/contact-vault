import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div className="h-dvh flex flex-col bg-[#f9fafc]">
      <div> 
        <Header />
      </div>
      <div className="flex flex-1">
        
        <Sidebar />
        <main className=" flex flex-1 justify-center items-center ">
          { children }
        </main>
      </div>
    </div>
  )
}

export default Layout
