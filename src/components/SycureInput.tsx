import React from 'react'

const SycureInput = ({label, placeholder, type, value, setValue}: {
   label?: string, 
   placeholder: string, 
   type?: "email" | "password" | "number" | "text",
   value?: any,
   setValue?: any
}) => {
  return (
    <div className='mb-7'>
      <p className='text-sm font-medium'>{label}</p>
      <div className='flex border h-11 px-3 w-full mt-3 border-[#D9D9D9] rounded-lg'>
         <input value={value} onChange={(e)=> setValue(e.target.value)} type={type} className='flex-1 outline-none bg-transparent placeholder:text-sm' placeholder={placeholder} />
      </div>
    </div>
  )
}

export default SycureInput