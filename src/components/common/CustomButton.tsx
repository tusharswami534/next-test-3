import React from "react";
interface ButtonProps {
  className?: string;
  text: string;
}

const CustomButton = ({ className, text }: ButtonProps) => {
  return (
    <button
      className={`leading-[121%] font-semibold py-[15.85px] max-md:text-sm rounded-[72px] transition-all duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
