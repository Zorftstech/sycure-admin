import React, { HTMLAttributes } from 'react';

interface SycureTextProps extends HTMLAttributes<HTMLParagraphElement>  {
  type: 'TEXT' | 'HEADER' | 'SUBHEADER' | 'SECONDARYTEXT' | 'ASCENTTEXT';
  children: React.ReactNode;
  className?: string
}

const SycureText: React.FC<SycureTextProps> = ({ type, children, className, ...rest}) => {
  const getStyles = () => {
    switch (type) {
      case 'HEADER':
        return 'font-bold text-[16px] sm:text-[20px]';
      case 'SUBHEADER':
        return 'font-semibold sm:text-[20px]';
      case 'SECONDARYTEXT':
        return 'font-normal text-[#4E5A66] sm:text-[14px]';
      case 'ASCENTTEXT':
        return 'font-medium sm:text-sm text-gray-500';
      case 'TEXT':
      default:
        return 'font-normal sm:text-[15px] text-[#292727]';
    }
  };

  return <p className={`${getStyles()} ${className || ""}`} {...rest}>{children}</p>;
};

export default SycureText;