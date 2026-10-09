import { PlusIcon, X } from "lucide-react";
import { useState } from "react";

import { keywords } from "@/utils/filterOptions";
import { Input } from "./ui/Input";
import { capitalizeFirstLetter } from "@/utils/libs";

interface KeywordSearchProps {
  selectedValues: string[];
  onChange: (value: string[]) => void;
}

const KeywordSearch: React.FC<KeywordSearchProps> = ({
  selectedValues,
  onChange,
}) => {
  const [search, setSearch] = useState("");

  const deSelect = (value: string) => {
    if (value.includes(value)) {
      onChange(selectedValues.filter((item) => item !== value));
    }
  };
  return (
    <div className="mt-2 flex gap-y-2 flex-col">
      <label htmlFor="keyword_search">Keyword search</label>
      <div className="border-2 border-border-mute rounded-lg relative">
        {selectedValues.length > 0 && (
          <div className="flex gap-2 flex-wrap p-2">
            {selectedValues.map((item) => (
              <button
                className="rounded-md flex gap-2 px-3 py-2 border border-border-mute cursor-pointer"
                key={item}
                onClick={() => deSelect(item)}
              >
                <span className="text-base">{capitalizeFirstLetter(item)}</span>
                <X size={20} className="text-icon-default" />
              </button>
            ))}
          </div>
        )}
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <Input
          name="search"
          className="border-none w-full"
          placeholder="Select a keyword or type here"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-1">
        {keywords
          .filter(
            (item) =>
              item.value.includes(search.toLowerCase()) &&
              !selectedValues.some((value) => item.value === value),
          )
          .slice(0, 5)
          .map(({ value, label }) => (
            <button
              className="rounded-md flex gap-2 px-3 py-2 border border-border-mute cursor-pointer"
              key={value}
              onClick={() => onChange([...selectedValues, value])}
            >
              <PlusIcon size={20} className="text-icon-default" />
              <span className="text-base">{label}</span>
            </button>
          ))}
      </div>
    </div>
  );
};

export default KeywordSearch;
