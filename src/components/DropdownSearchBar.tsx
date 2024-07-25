import React, { useState, useRef } from "react";
import { HiOutlineSearch, HiOutlineChevronDown } from "react-icons/hi"; // Example: Icons for search and dropdown
import clsx from "clsx";

interface Option {
  value: string;
  label: string;
}

interface SearchableDropdownProps {
  options: Option[];
  onSelect: (value: string) => void;
  placeholder?: string;
}

const DropdownSearchBar: React.FC<SearchableDropdownProps> = ({
  options,
  onSelect,
  placeholder = "Select an option...",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  // Filter options based on search term
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Handle selection
  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSearchTerm(""); // Clear search term when opening dropdown
  };

  // Handle key press events for accessibility
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      toggleDropdown();
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        onKeyPress={handleKeyPress}
        className="flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      >
        <span className="truncate">{placeholder}</span>
        <HiOutlineChevronDown className="w-5 h-5 text-gray-700" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="flex items-center px-4 py-2 border-b border-gray-200">
            <HiOutlineSearch className="w-5 h-5 mr-2 text-gray-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full border-none focus:outline-none"
            />
          </div>
          <div className="py-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={clsx(
                    "px-4 py-2 cursor-pointer hover:bg-gray-100",
                    option.value === searchTerm && "bg-gray-100",
                  )}
                >
                  {option.label}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500">No options found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownSearchBar;
