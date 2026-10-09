import { Suspense } from "react";
import FilterButton from "./FilterButton";
import LocationSearch from "./LocationSearch";

const ListingHeader = () => {
  return (
    <div className="md:mt-10 mt-6 flex items-center justify-between">
      <h1 className="text-2xl font-semibold md:block hidden">
        Homes for Sale | Real Estate Listings
      </h1>
      <div className="flex items-center gap-3  max-md:w-full">
        <Suspense fallback={<p>Loading...</p>}>
          <LocationSearch />
          <FilterButton />
        </Suspense>
      </div>
    </div>
  );
};

export default ListingHeader;
