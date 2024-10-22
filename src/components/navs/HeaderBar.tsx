import React from 'react'
import Logo from '@/assets/sycureLogoWhite.png'
import Image from 'next/image'
import SycureText from '../SycureText'
import SycureInput from '../SycureInput'
import { NotificationIcon } from '@/assets/icons/icons'
const HeaderBar = () => {
  return (
    <div className='h-[80px] fixed bg-[#3F77FF] w-full px-[40px] justify-between flex items-center'>
      <div className='h-8 w-[150px]'>
         <Image className='w-full h-full' src={Logo} alt='logo'/>
      </div>

      <div className='flex-[0.5]'>
         <input className='w-full rounded-full h-10 px-4 outline-none' type='text'  placeholder='Search for anything' />
      </div>
      <div className='flex gap-x-[100px] items-center'>
         <div className='bg-[#FFFFFF26] rounded-full px-4 py-2'>
            <p className='text-[14px] font-semibold text-white'>Chief Rotimi Williams Estate</p>
         </div>

         <div className='w-40'><NotificationIcon /></div>
      </div>
    </div>
  )
}

export default HeaderBar