import React from "react";

interface IInputProps {
  type: string;
  placeholder: string;
}

const InputField = ({ type, placeholder }: IInputProps) => {
  return (
    <input
      className="border-2 border-gray-300 px-[12px] py-[8px] w-[530px] rounded-[4px] mb-[30px]"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputField;
