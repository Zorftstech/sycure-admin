import { AdminIcon } from '@/assets/icons/icons'
import SycureButton from '@/components/SycureButton'
import SycureInput from '@/components/SycureInput'
import React from 'react'

const Page = () => {
  return (
    <div className='pt-20 w-full h-full overflow-scroll hide-scrollbar'>
      <div className='flex justify-between items-center mt-10 mb-8'>
         <h3 className='text-[32px] text-[#204D88] font-medium'>Create New Verifier</h3>
         <div className='w-24 h-24 rounded-full flex items-center justify-center bg-[#DDE2E5]' ><AdminIcon width={45} height={45} color={"#000"} /></div>
      </div>

      <div className='grid grid-cols-2 gap-x-20'>
         <div>
            <SycureInput placeholder='Admin name' label='First name' type='text' />
            <SycureInput placeholder='Enter an email address' label='Email address' type='text' />
            <SycureInput placeholder='Enter phone No.' label='Phone number' type='text' />
            <SycureInput placeholder='Account status' label='Account status' type='text' />
         </div>

         <div>
            <SycureInput placeholder='Admin name' label='Last name' type='text' />
            <SycureInput placeholder='000000' label='Unique code' type='text' />
            <SycureInput placeholder='State your address' label='Home Address' type='text' />
            <div className='h-[100px]'></div>
         </div>
      </div>

      <div>
         <p className='text-[20px] text-[#204D88] font-medium'>Emergency Contacts</p>
      </div>
      <div className='grid grid-cols-2 mt-8 gap-x-20'>
         <div>
            <SycureInput placeholder='Enter contact name' label='Name of contact 1' type='text' />
            <SycureInput placeholder='Enter another contact name' label='Name of contact 1' type='text' />
         </div>

         <div>
            <SycureInput placeholder='Admin name' label='Phone number of contact 1' type='text' />
            <SycureInput placeholder='000000' label='Phone number of contact 2' type='text' />
         </div>
      </div>

      <div className='flex justify-between mt-5'>
         <div className='flex gap-x-5'>
            <SycureButton variant='SECONDARY'>Save</SycureButton>
            <SycureButton variant='OUTLINED'>Back</SycureButton>
         </div>
      </div>
    </div>
  )
}

export default Page