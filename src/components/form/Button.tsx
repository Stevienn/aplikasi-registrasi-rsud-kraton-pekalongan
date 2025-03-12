import React from "react";

interface IButtonProps {
  placeholder: string;
  isCancel?: boolean;
  onClick: () => void;
}

const Button = ({ placeholder, isCancel, onClick }: IButtonProps) => {
  return (
    <button
      className={`${
        isCancel ? "bg-red-600" : " bg-blue-primary"
      } rounded-[7px] text-white px-[20px] py-[10px] cursor-pointer`}
      onClick={onClick}
    >
      {placeholder}
    </button>
  );
};

export default Button;
