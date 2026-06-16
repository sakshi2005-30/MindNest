import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
const Layout = ({children,title}) => {
  return (
    <div className="min-h-screen ">
        <Sidebar/>
        <div className="ml-58">
            <Topbar title={title} className="flex-1 ml-102"/>
            <div className="p-6 bg-gray-100 min-h-screen">
                {children}
            </div>
        </div>

    </div>
  )
}

export default Layout