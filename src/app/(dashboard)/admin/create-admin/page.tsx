import { AdminIcon } from '@/assets/icons/icons'
import SycureButton from '@/components/SycureButton'
import SycureInput from '@/components/SycureInput'
import React from 'react'

const Page = () => {
  return (
    <div className='pt-20 w-full h-full overflow-scroll hide-scrollbar'>
      <div className='flex justify-between items-center mt-10 mb-8'>
         <h3 className='text-[32px] font-medium'>Administrator Account</h3>
         <div className='w-24 h-24 rounded-full flex items-center justify-center bg-[#DDE2E5]' ><AdminIcon width={45} height={45} color={"#000"} /></div>
      </div>

      <div className='grid grid-cols-2 gap-x-20'>
         <div>
            <SycureInput placeholder='Admin name' label='First name' type='text' />
            <SycureInput placeholder='Select a role below' label='Role / permission' type='text' />
            <SycureInput placeholder='Enter phone No.' label='Phone number' type='text' />
            <SycureInput placeholder='Pick a state you located' label='State Located' type='text' />
         </div>

         <div>
            <SycureInput placeholder='Admin name' label='Last name' type='text' />
            <SycureInput placeholder='What the name of your estate.' label='Estate name' type='text' />
            <SycureInput placeholder='Pick a state you located' label='City Located' type='text' />
         </div>
      </div>

      <div className='flex justify-between mt-5'>
         <div className='flex gap-x-5'>
            <SycureButton variant='SECONDARY'>Save chnages</SycureButton>
            <SycureButton variant='OUTLINED'>Back</SycureButton>
         </div>
         <SycureButton variant='SECONDARY' style={{backgroundColor: '#BF2942'}}>Suspend account</SycureButton>
      </div>
    </div>
  )
}

export default Page