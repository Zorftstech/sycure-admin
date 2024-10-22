"use client"
import SycureButton from '@/components/SycureButton'
import SycureInput from '@/components/SycureInput'
import React from 'react'

const Page = () => {
  return (
    <div className='pt-20 w-full h-full overflow-scroll hide-scrollbar'>
      <h3 className='text-[32px] mt-12 text-[#204D88] font-medium'>Compose broadcast message</h3>

      <form className='md:w-2/3 mt-8' action="">
         <SycureInput label='Recipient' type='text' placeholder='Add recipient here or type “All” if you wish to reach all residents' />
         <SycureInput label='Message title' type='text' placeholder='Enter message title' />

         <div className='flex flex-col'>
            <label htmlFor="message">Message body</label>
            <textarea className='border  border-[#D9D9D9] p-4 mt-3 rounded-lg' placeholder='Enter message ' name="" id="message" cols={20} rows={10}></textarea>
         </div>

         <div className='flex mt-10'>
            <SycureButton variant='SECONDARY'>Send message</SycureButton>
            <SycureButton variant='OUTLINED'>Back</SycureButton>
         </div>
      </form>
    </div>
  )
}

export default Page