import React, { useState } from 'react';

const CustomInput = ({ options, onSelect }: any) => {
  const [inputValue, setInputValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log(options);
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSelectOption = (option: any) => {
    setInputValue(option);
    onSelect(option);
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='relative'>
      <input
        type='text'
        className='w-full border rounded p-2'
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleDropdownToggle}
        placeholder='Type or select an option...'
      />
      {isDropdownOpen && (
        <div className='absolute top-full left-0 w-full border rounded-t-none shadow'>
          {options?.map((option: any, index: number) => (
            <div
              key={index}
              className='p-2 cursor-pointer hover:bg-gray-100'
              onClick={() => handleSelectOption(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
