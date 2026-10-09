import Select from "./ui/Select";

const dayOptions = [
  { label: "Any", value: "" },
  { label: "Today", value: "1" },
  { label: "7 days", value: "7" },
  { label: "14 days", value: "14" },
  { label: "21 days", value: "21" },
  { label: "30 days", value: "30" },
];

interface DayOnPlatformSelectProps {
  value: string;
  onChange: (values: string) => void;
}

const DayOnPlatformSelect: React.FC<DayOnPlatformSelectProps> = ({
  onChange,
  value,
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-lg font-semibold text-text-default">
        Days on Nest
      </span>
      <div className="flex gap-y-1 flex-col">
        <span>Select an option</span>
        <Select
          value={value}
          onChange={onChange}
          options={dayOptions}
          label="Select an option"
        />
      </div>
    </div>
  );
};

export default DayOnPlatformSelect;
