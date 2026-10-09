import { CalendarDays, Clock } from "lucide-react";

interface OpenHouseCardProps {
  date: string;
  time: string;
}

const OpenHouseCard: React.FC<OpenHouseCardProps> = ({ date, time }) => {
  return (
    <div className="p-4 flex flex-col gap-4 border border-border-mute rounded-xl w-60 shrink-0">
      <div className="flex gap-2 items-center">
        <CalendarDays size={16} className="text-text-secondary" />
        <p className="text-base">{date}</p>
      </div>
      <div className="flex gap-2 items-center">
        <Clock size={16} className="text-text-secondary" />
        <p className="text-base">{time}</p>
      </div>
    </div>
  );
};

export default OpenHouseCard;
