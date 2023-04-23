import React, { useState } from "react";
import "./list-type-dropdown.css";
import privatelist from "../../Assets/private-list-icon.svg";
import publiclist from "../../Assets/public-list-icon.svg";
import unlistedlist from "../../Assets/unlisted-icon.svg";

interface DropdownOption {
  value: string;
  label: string;
  description: string;
}

interface DropdownProps {
  options: DropdownOption[];
}

const ListDropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption>(
    options[0]
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);
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
              <div className="dropdown-option-label">{option.label}</div>
              <div className="dropdown-option-description">
                {option.description}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListDropdown;
