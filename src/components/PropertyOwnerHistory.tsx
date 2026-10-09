import ReviewCard from "./ReviewCard";
import Panel from "./ui/Panel";

const PropertyOwnerHistory = () => {
  return (
    <Panel className="mt-6 bg-bg-default shadow-small max-w-198.75 md:p-6 p-4 rounded-lg flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Owner history</h2>
      <div className="flex gap-4 overflow-x-scroll no-scrollbar">
        <ReviewCard className="border border-border-mute" />
      </div>
    </Panel>
  );
};

export default PropertyOwnerHistory;
