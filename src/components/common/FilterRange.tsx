import { cn } from "@/utils/cn";
import Select from "../ui/Select";

type FilterOption = {
  label: string;
  value: string;
};

interface FilterRangeProps {
  label: string;
  minLabel: string;
  maxLabel: string;
  minOptions: FilterOption[];
  maxOptions: FilterOption[];
  minValue: string;
  maxValue: string;
  onMinChange: (value: string) => void;
  onMaxChange: (value: string) => void;
  className?: string;
}

const FilterRange: React.FC<FilterRangeProps> = ({
  label,
  maxLabel,
  maxOptions,
  maxValue,
  minLabel,
  minOptions,
  minValue,
  onMaxChange,
  onMinChange,
  className,
}) => {
  return (
    <div className={cn("flex gap-y-1 flex-col", className)}>
      <span>{label}</span>
      <div className="flex gap-x-4 w-full">
        <Select
          label={minLabel}
          onChange={onMinChange}
          options={minOptions}
          value={minValue}
        />
        <Select
          label={maxLabel}
          onChange={onMaxChange}
          options={maxOptions}
          value={maxValue}
        />
      </div>
    </div>
  );
};

export default FilterRange;
