import { ChevronDown } from "lucide-react";

type selectOption = {
  label: string;
  value: string;
};

interface SelectProps extends Omit<
  React.ComponentProps<"select">,
  "value" | "onChange"
> {
  label: string;
  options: selectOption[];
  value: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className="relative w-full">
      <label className="sr-only">{label}</label>

      <select
        {...props}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2 w-full text-base rounded-md outline-none border-2 border-border-mute appearance-none"
      >
        {options.map(({ label, value }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>

      <ChevronDown
        size={20}
        className="text-icon-default absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none"
      />
    </div>
  );
};

export default Select;
