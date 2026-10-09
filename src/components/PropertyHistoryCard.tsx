import { BadgePercent } from "lucide-react";

type PropertyHistory = {
  id: string;
  event: string;
  mlsNumber: string;
  price: number;
  pricePerSqft: number;
  listedDate: string;
};

interface PropertyHistoryCardProps {
  history: PropertyHistory;
}

const PropertyHistoryCard: React.FC<PropertyHistoryCardProps> = ({
  history,
}) => {
  return (
    <div className="p-4 border border-border-mute rounded-xl flex gap-6 items-center">
      <BadgePercent size={24} className="text-icon-default max-md:hidden" />
      <div className="flex justify-between items-center w-full flex-wrap gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-text-secondary text-base">{history.event}</p>
          <p className=" text-base mt-1">{history.mlsNumber}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-text-secondary text-base">Price</p>
          <p className=" text-base mt-1"> ${history.price.toLocaleString()}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-text-secondary text-base">Price per Sqft</p>
          <p className=" text-base mt-1"> ${history.pricePerSqft}/sqft</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-text-secondary text-base">Listed date</p>
          <p className=" text-base mt-1"> {history.listedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyHistoryCard;
