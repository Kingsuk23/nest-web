import { Footprints } from "lucide-react";

const LifestyleScoreCard = () => {
  return (
    <div className="basis-59.5 w-full p-4 rounded-md border border-border-mute flex flex-col gap-4  shrink grow">
      <div className="flex justify-between items-center">
        <Footprints size={24} className="text-icon-default" />
        <span className="text-base font-semibold">
          8.0 / <span className="text-sm font-normal">10</span>
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-medium">Very walkable</p>
        <span className="text-text-secondary text-sm">
          Most errands can be done on foot
        </span>
      </div>
    </div>
  );
};

export default LifestyleScoreCard;
