"use client";

import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Input } from "./ui/Input";
import { useDebounce } from "@/hooks/useDebounce";
import { useFilters } from "@/hooks/useFilters";

const LocationSearch = () => {
  const { filters, setFilter } = useFilters();

  const [input, setInput] = useState(filters.location);

  const debouncedInput = useDebounce(input, 500);

  useEffect(() => {
    setFilter({
      location: debouncedInput || null,
    });
  }, [debouncedInput, setFilter]);

  return (
    <div className="relative flex-1">
      <Search
        size={20}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
      />

      <Input
        placeholder="City, street, zipcode"
        className="pl-10 pr-10 w-full"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {input.length > 0 && (
        <button
          type="button"
          onClick={() => {
            setInput("");
            setFilter({ location: "" });
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-default pointer-events-auto cursor-pointer"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
};

export default LocationSearch;
