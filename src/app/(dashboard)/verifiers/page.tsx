"use client"
import SycureButton from '@/components/SycureButton'
import React from 'react'
import AdminImg from '@/assets/image-2.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button, Menu, MenuButton, MenuItem, MenuList, Icon } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { MdSettings } from 'react-icons/md'
import { SlOptionsVertical } from 'react-icons/sl'

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
      <div className='mt-[70px] flex justify-between flex-col md:flex-row'>
         <div className='flex-[0.9] space-y-2'>
            <p className='text-3xl font-medium'>Verifiers</p>
            <p className='text-sm font-normal text-[#204D88]'>Verifiers can quickly confirm guest access and resident details through secure, real-time checks. Admins can monitor verifier activity and ensure smooth gate operations.</p>
         </div>

         <div className='flex gap-x-4'>
            <SycureButton onClick={() => router.push('verifiers/create-verifiers')} variant='SECONDARY'>Create new admin account +</SycureButton>
            <SycureButton onClick={() => router.push('admin/create-verifiers')} style={{backgroundColor: '#204D88'}} variant='SECONDARY'>Create new admin account +</SycureButton>
         </div>
      </div>

      <div className='flex flex-wrap gap-x-3 md:gap-x-5 gap-y-5 md:gap-y-10 mt-12'>
         {
            admins.map((adm, idx) => {
               return (
                  <div key={idx} className='w-[300px] p-2 md:p-4 sßpace-y-4 cursor-pointer relative bg-[#3475DF0D] rounded-xl border border-[#ACB5BD33]'>
                     <div className='flex items-center flex-1 gap-x-4 overflow-hidden'>
                        <Image className='w-10 h-10 md:w-20 md:h-20 rounded-full' src={adm.img}  alt='Profile image'/>
                        <div className='flex-1'>
                           <p className='md:text-[16px] text-sm font-medium text-[#4E5A66]'>{adm.name}</p>
                        </div>
                        <div className=' self-start'>
                           <Menu>
                              {({ isOpen }) => (
                                 <>
                                    <MenuButton bg={"transparent"} _hover={{bg: 'transparent'}} _active={{bg: 'transparent'}} isActive={isOpen} as={Button}>    
                                       <Icon as={SlOptionsVertical}/>
                                    </MenuButton>
                                    <MenuList>
                                       <MenuItem>Download</MenuItem>
                                       <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
                                    </MenuList>
                                 </>
                              )}
                           </Menu>
                        </div>
                     </div>
                  </div>
               )
            })
         }
      </div>
    </div>
  )
}

export default Page