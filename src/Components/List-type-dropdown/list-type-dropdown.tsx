import React, { useState } from "react";
import "./list-type-dropdown.css";

interface DropdownOption {
  value: string;
  image: string;
  label: string;
  description: string;
}

interface DropdownProps {
  options: DropdownOption[];
  handleSelectType: Function;
}

const ListDropdown: React.FC<DropdownProps> = ({ options, handleSelectType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption>(
    options[0]
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    handleSelectType(option.value);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-selected" onClick={toggleDropdown}>
        <div className="dropdown-selected-option">{selectedOption.label}</div>
        <div className="dropdown-selected-manage">Manage access &#9660;</div>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              <img src={option.image} className="dropdown-option-image" alt="Manage access options"></img>
              <div className="dropdown-option-label">{option.label}<br/>
              <div className="dropdown-option-description">
                {option.description}
              </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListDropdown;
