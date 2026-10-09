import { filterParsers } from "@/utils/filterParsers";
import { SoldStatusType, StatusType } from "@/utils/type";
import { useQueryStates } from "nuqs";

export const useFilters = () => {
  const [filters, setFilters] = useQueryStates(filterParsers, {
    shallow: true,
    history: "push",
  });

  return {
    filters,
    setFilters,

    setFilter: setFilters,

    resetFilters: () => {
      setFilters({
        property_type: "",
        location: "",
        sort: "newest",
        beds: 0,
        baths: 0,
        sold_status: SoldStatusType.SALE,
        status: StatusType.ANY,
        house_type: [],
        tour_type: [],
        day_on_platform: "",
        min_sqft: "",
        max_sqft: "",
        min_lot: "",
        max_lot: "",
        min_age: "",
        max_age: "",
        hoa_fee: "",
        garage: 0,
        stories: 0,
        interiors: [],
        exteriors: [],
        views: [],
        keywords: [],
        min_price: 0,
        max_price: 10000000,
        is_price_drop: false,
      });
    },
  };
};
