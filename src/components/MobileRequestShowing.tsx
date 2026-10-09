import { Button } from "./ui/Button";
import Panel from "./ui/Panel";

const showingOptions = [
  { label: "ASAP", value: "asap" },
  { label: "This Week", value: "this-week" },
  { label: "Next Week", value: "next-week" },
  { label: "Select Day", value: "select-day" },
];

const MobileRequestShowing = () => {
  return (
    <Panel className="md:hidden flex flex-col gap-y-6">
      <h3 className="text-2xl font-semibold">Request Showing</h3>
      <div className="flex flex-col gap-y-4">
        <span className="text-base text-text-secondary">
          Your preferred time. Reschedule anytime.
        </span>
        <div className="flex flex-wrap gap-4">
          {showingOptions.map(({ label, value }) => (
            <button
              type="button"
              className="text-center rounded-full border-2 border-black basis-40.5 py-2 text-base cursor-pointer shrink grow"
              key={value}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <Button className="w-full mt-2">Request Showing</Button>
    </Panel>
  );
};

export default MobileRequestShowing;
