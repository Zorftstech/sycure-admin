"use client"
import React from 'react'
import SycureText from '../SycureText'
import Link from 'next/link'
import { AdminIcon, BroadcastIcon, BusinessIcon, EmgIcon, HomeIcon, LogoutIcon, ResidencitialIcon, UtilIcon, VerifiesIcon } from '@/assets/icons/icons'

const SideBar = () => {
   const sideBarLinks = [
      {
         label: 'Home',
         href: '/',
         icon: HomeIcon
      },
      {
         label: 'Admin',
         href: '/admin',
         icon: AdminIcon
      },
      {
         label: 'Residents',
         href: '/residents',
         icon: ResidencitialIcon
      },
      {
         label: 'Verifiers',
         href: '/verifiers',
         icon: VerifiesIcon
      },
      {
         label: 'Broadcast',
         href: '/broadcast',
         icon: BroadcastIcon
      },
      {
         label: 'Utility / Payments',
         href: '/utility',
         icon: UtilIcon
      },
      {
         label: 'Emergencies',
         href: '/emergencies',
         icon: EmgIcon
      },
      {
         label: 'Business places',
         href: '/business',
         icon: BusinessIcon
      },
      {
         label: 'Logout',
         href: '/logout',
         icon: LogoutIcon
      }
   ]
   const [onlyIcons, setOnlyIcons] = React.useState(true)
   const LinkItem = ({data, idx}:{data: {[key: string]: string | any}, idx: number}) => {
      const Icon = data.icon
      return (
         <div className='py-[10px] flex gap-2 items-center pl-[13px] pr-[23px] w-fit mb-7'>
            <Link className='flex gap-2'  href={data.href}>
               {data.icon && <Icon />}
               {!onlyIcons && <SycureText type='TEXT' className='text-nowrap'>{data.label}</SycureText>}
            </Link>
         </div>
      )
   }
  return (
    <div className='h-full pt-24 hidden md:block bg-[#FAFAFA] px-7'>
      <div className='flex justify-between items-center'>
         {
            !onlyIcons ? (
               <div>
                  <SycureText type='SECONDARYTEXT'>Welcome</SycureText>
                  <SycureText type='HEADER'>Super Admin</SycureText>
               </div>
            ):null
         }

         <button className='text-center mx-auto font-bold text-xl text-[#3475DF]' onClick={() => setOnlyIcons(!onlyIcons)}>{onlyIcons ? "↦" : "↤"}</button>
      </div>

      <div className='mt-8'>
         {
            sideBarLinks.map((link, idx) => (<LinkItem key={idx} data={link} idx={idx}  />))
         }
      </div>
    </div>
  )
}

export default SideBar