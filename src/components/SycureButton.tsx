"use client";
import React, { ButtonHTMLAttributes, FC } from 'react'

interface SycureButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
   variant: 'SECONDARY' | 'PRIMARY' | 'ASCENT' | 'OUTLINED' | 'TRANSPARENT';
   children: React.ReactNode; 
 }

const SycureButton:FC<SycureButtonProps> = ({variant, children, ...rest}) => {
   const getStyle = () => {
      switch (variant) {
         case "PRIMARY":
            return "bg-[#03BDE9] font-bold text-white"
            break;
         case "SECONDARY":
            return "bg-[#3475DF] text-[15px] font-medium text-white"
            break;
         case "TRANSPARENT": 
            return "bg-transparent font-medium text-[#4E5A66]"
            break;
      
         default:
            break;
      }
   }
  return (
    <div>
      <button className={`h-12 w-full px-5 mb-2 rounded-[10px] ${getStyle()}`} {...rest}>{children}</button>
    </div>
  )
}

export default SycureButton