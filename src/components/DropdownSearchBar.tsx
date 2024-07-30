import React, { useEffect, useRef, useState } from "react";

interface Option {
  [key: string]: string;
}

interface SearchableDropdownProps {
  options: Option[];
  label: string;
  id: string;
  selectedVal: string | undefined;
  handleChange: (value: string | null) => void;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  label,
  id,
  selectedVal,
  handleChange,
}) => {
  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectOption = (option: Option) => {
    setQuery("");
    handleChange(option[label]);
    setIsOpen(false);
  };

  const getDisplayValue = () => {
    if (query) return query;
    if (selectedVal) return selectedVal;
    return "";
  };

  const filterOptions = (options: Option[]) => {
    return options.filter((option) =>
      option[label].toLowerCase().includes(query.toLowerCase()),
    );
  };

  return (
    <div className="relative">
      <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded">
        <input
          ref={inputRef}
          type="text"
          value={getDisplayValue()}
          onChange={(e) => {
            setQuery(e.target.value);
            handleChange(null);
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-l outline-none"
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-gray-300 dark:bg-gray-700 rounded-r"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded shadow-lg">
          {filterOptions(options).map((option, index) => (
            <div
              key={`${id}-${index}`}
              onClick={() => selectOption(option)}
              className={`p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 ${option[label] === selectedVal ? "bg-gray-300 dark:bg-gray-600" : ""}`}
            >
              {option[label]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
