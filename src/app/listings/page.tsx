import ListingsContent from "@/components/ListingsContent";
import ListingsSkeleton from "@/components/ListingsSkeleton";
import { Suspense } from "react";

const Listings = () => {
  return (
    <main className="relative mx-auto flex flex-col justify-between px-4 md:px-9">
      <Suspense fallback={<ListingsSkeleton />}>
        <ListingsContent />
      </Suspense>
    </main>
  );
};

export default Listings;
