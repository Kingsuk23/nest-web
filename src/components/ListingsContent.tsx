"use client";

import dynamic from "next/dynamic";

import ListingHeader from "@/components/ListingHeader";
import ListingFilters from "@/components/ListingFilters";
import MobileListingHeader from "@/components/MobileListingHeader";
import { useFilters } from "@/hooks/useFilters";
import PropertyCard from "./PropertyCard";

const Pagination = dynamic(() => import("@/components/Pagination"), {
  ssr: false,
  loading: () => null,
});

const ListingsContent = () => {
  const { filters, setFilter } = useFilters();

  return (
    <>
      <ListingHeader />
      <ListingFilters />
      <MobileListingHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>

      <Pagination
        currentPage={filters.page}
        onPageChange={(page) => setFilter({ page })}
        pageSize={18}
        totalCount={200}
      />
    </>
  );
};

export default ListingsContent;
