import { Suspense } from "react";
import PropertyTypeFilters from "./PropertyTypeFilters";
import Sort from "./Sort";

const ListingFilters = () => {
  return (
    <div className="md:mt-8 mt-6 flex justify-between items-center gap-10">
      <Suspense fallback={<div>Loading</div>}>
        <PropertyTypeFilters />
        <Sort className="md:flex hidden" />
      </Suspense>
    </div>
  );
};

export default ListingFilters;
