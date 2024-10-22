import { SearchIcon } from '@/assets/icons/icons'
import React from 'react'

const SycureSearchBar = ({placeholder}:{placeholder: string}) => {
  return (
    <div className='flex items-center px-4 h-12 rounded-full border border-[#D9D9D9] md:min-w-[500px]'>
      <SearchIcon  />
      <input placeholder={placeholder} className='placeholder:text-sm outline-none w-full h-full px-4' />
    </div>
  )
}

export default SycureSearchBar