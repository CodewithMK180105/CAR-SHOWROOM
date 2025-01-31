import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { manufacturers } from "@/constants";
import { SetManufacturerProps } from "@/types";

const SearchManufacturer = ({ manufacturer, setManufacturer }: SetManufacturerProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter manufacturers based on search query
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="search-manufacturer" ref={dropdownRef}>
      <div className="relative w-full">
        {/* Icon Button (Replaces Combobox.Button) */}
        <button
          type="button"
          className="absolute top-[14px] left-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src="/car-logo.svg" width={20} height={20} className="ml-4" alt="car logo" />
        </button>

        {/* Input Field (Replaces Combobox.Input) */}
        <input
          type="text"
          className="search-manufacturer__input ml-2"
          placeholder="Volkswagen..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />

        {/* Dropdown Options (Replaces Combobox.Options) */}
        {isOpen && (
          <ul className="mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"> {/* put absolute, if parent element is not overflow-hidden */}
            {filteredManufacturers.length === 0 && query !== "" ? (
              <li
                className="search-manufacturer__option"
                onClick={() => {
                  setManufacturer(query);
                  setQuery(query);
                  setIsOpen(false);
                }}
              >
                {/* Create "{query}" */}
                {/* Create */}
              </li>
            ) : (
              filteredManufacturers.map((item) => (
                <li
                  key={item}
                  className="relative search-manufacturer__option hover:bg-primary-blue hover:text-white cursor-pointer px-4 py-2"
                  onClick={() => {
                    setManufacturer(item);
                    setQuery(item);
                    setIsOpen(false);
                  }}
                >
                  <span className="block truncate">{item}</span>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchManufacturer;
