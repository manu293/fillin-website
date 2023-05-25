import React, { useState, ChangeEvent } from "react";

type VolumeOption = "1 liter" | "5 liter";

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState<VolumeOption>("1 liter");

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value as VolumeOption);
  };

  return (
    <div className="relative inline-block text-left mb-3 ">
      <select
        value={selectedValue}
        onChange={handleSelectChange}
        className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="1 liter">1 liter</option>
        <option value="5 liter">5 liter</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;
