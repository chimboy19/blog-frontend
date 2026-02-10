import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { useEffect, useState } from "react"




const AppLayout = () => {
    useEffect(function () {
        if (localStorage.getItem('dark') === null) {
            localStorage.setItem('dark', 'false')
        
        }
        
    },[])

    const [DarkMode, setDarkMode] = useState(localStorage.getItem('dark') === 'true')
    
    const toggleDarkMode = () => {
        const newDarkMode = !DarkMode
        setDarkMode(newDarkMode)
        localStorage.setItem('dark',newDarkMode ? 'true' :'false')
        
    }
    return (
      <div className={DarkMode? 'dark':''}>
        <main className="w-full bg-[#ffffff] dark:bg-[#181A2A]">
          <Navbar DarkMode={DarkMode} toggleDarkMode={toggleDarkMode} />
          <Outlet />
          <Footer />
        </main>
      </div>
    );
}

export default AppLayout
