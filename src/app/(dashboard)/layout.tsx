import HeaderBar from '@/components/navs/HeaderBar'
import SideBar from '@/components/navs/SideBar'
import React from 'react'
import "../globals.css";

const Layout = ({children}: { children: React.ReactNode }) => {
  return (
    <div className='h-screen'>
      {/* HEADER BAR COMPONENT */}
      <HeaderBar />
      <div className='flex h-full'>
         {/* SIDEBAR COMPONENT HERE */}
         <SideBar />
         {/* MAIN BODY COMPONENETS */}
         <main className='md:px-16 px-4 h-full w-full'>
            {children}
         </main>
      </div>
    </div>
  )
}

export default Layout