"use client"
import SycureButton from '@/components/SycureButton'
import React from 'react'
import AdminImg from '@/assets/image-2.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Page = () => {
   const router = useRouter()
   const admins = [
      { id: 1, name: 'Admin chima', email: 'abiodunsolola2@gmail.com', title: 'Manager', img: AdminImg},
      { id: 1, name: 'Admin chima', email: 'abiodunsolola2@gmail.com', title: 'Manager', img: AdminImg},
      { id: 1, name: 'Admin chima', email: 'abiodunsolola2@gmail.com', title: 'Manager', img: AdminImg},
      { id: 1, name: 'Admin chima', email: 'abiodunsolkosdisiiola2@gmail.com', title: 'Manager', img: AdminImg},
   ]
  return (
    <div className='pt-20 w-full h-full overflow-scroll hide-scrollbar'>
      <div className='mt-[70px] flex justify-between'>
         <div className='flex-[0.7] space-y-2'>
            <p className='text-3xl font-medium'>Administrators</p>
            <p className='text-sm font-normal text-[#204D88]'>Admins can manage users, content, and settings with ease. Assign roles, monitor activity, and customize the system for smooth operations.</p>
         </div>
         <SycureButton onClick={() => router.push('admin/create-admin')} variant='SECONDARY'>Create new admin account +</SycureButton>
      </div>

      <div className='grid grid-cols-3 gap-x-5 gap-y-10 mt-12'>
         {
            admins.map((adm, idx) => {
               return (
                  <div key={idx} className='p-6 space-y-4 bg-[#3475DF0D] rounded-xl border border-[#ACB5BD33]'>
                     <div className='flex flex-1 gap-x-4 overflow-hidden '>
                        <Image className='w-20 h-20 rounded-full' src={adm.img}  alt='Profile image'/>
                        <div className='flex-1'>
                           <p className='text-[16px] font-medium text-[#4E5A66]'>{adm.name}</p>
                           <p className='text-[14px] font-normal text-[#4E5A66]'>{adm.title}</p>
                           <p className='text-[14px] flex-1 font-normal text-wrap text-[#4E5A66]'>{adm.email}</p>
                        </div>
                     </div>
                     <SycureButton style={{backgroundColor: '#BF2941', height: 34, fontSize: 10, fontWeight: 600}} variant='SECONDARY'>Suspend account</SycureButton>
                  </div>
               )
            })
         }
      </div>
    </div>
  )
}

export default Page