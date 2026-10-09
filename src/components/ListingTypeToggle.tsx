import { cn } from "@/utils/cn";
import { SoldStatusType } from "@/utils/type";

interface ListingTypeToggleProps {
  value: SoldStatusType;
  onChange: (value: SoldStatusType) => void;
}

const ListingTypeToggle: React.FC<ListingTypeToggleProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="w-fit rounded-full bg-bg-subtle p-1 mt-2">
      <button
        type="button"
        onClick={() => onChange(SoldStatusType.SALE)}
        className={cn(
          "cursor-pointer rounded-full px-4 py-2 text-base",
          value === SoldStatusType.SALE && "bg-bg-default shadow-xl",
        )}
      >
        For Sale
      </button>

      <button
        type="button"
        onClick={() => onChange(SoldStatusType.SOLD)}
        className={cn(
          "cursor-pointer rounded-full px-4 py-2 text-base",
          value === SoldStatusType.SOLD && "bg-bg-default shadow-xl",
        )}
      >
        Just sold
      </button>
    </div>
  );
};

export default ListingTypeToggle;
