"use client"
import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/logo.png'
const Layout = ({children}: { children: React.ReactNode }) => {
  return (
   <div className='bg-[#F3F4F5] flex flex-col items-center justify-center h-screen'>
      <div className='sm:w-1/2 w-full shadow-xl flex flex-col items-center justify-center min-h-3/4 overflow-scroll scroll-m-0 sm:py-14 gap-14 sm:px-14 p-5'>
         <Image className='w-48' src={Logo} alt='Logo' />
         <div className='flex-1 w-full'>{children}</div>
      </div>
   </div>
  )
}

export default Layout