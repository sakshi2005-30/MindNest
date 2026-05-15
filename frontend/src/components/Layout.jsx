import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
const Layout = ({children,title}) => {
  return (
    <div className="min-h-screen ">
        <Sidebar/>
        <div className="ml-58">
            <Topbar title={title} className="flex-1 ml-102"/>
            <div className="p-6">
                {children}
            </div>
        </div>

    </div>
  )
}

export default Layout