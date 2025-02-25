import React from "react";
interface DescriptionProps {
  className?: string;
  text?: string;
}

const Description = ({ className, text }: DescriptionProps) => {
  return (
    <p
      className={`leading-[150%] max-md:text-base text-lightBlue ${className}`}
    >
      {text}
    </p>
  );
};

export default Description;
