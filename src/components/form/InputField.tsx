import React from "react";

interface IInputProps {
  name: string;
  type: string;
  placeholder: string;
  customClass: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isWarning?: string;
}

const InputField = ({
  name,
  type,
  placeholder,
  customClass,
  value,
  onChange,
  isWarning,
}: IInputProps) => {
  return (
    <>
      <p className="font-semibold text-gray-700 mb-[8px]">{name}</p>
      <input
        className={`border-2 border-gray-300 px-[12px] py-[8px] ${customClass} rounded-[4px]`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {isWarning && (
        <p className="text-red-500 mt-[-30px] text-[13px] mb-[15px]">
          {isWarning}
        </p>
      )}
    </>
  );
};

export default InputField;
