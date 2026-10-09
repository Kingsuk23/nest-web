// src/components/ListingsSkeleton.tsx  (server component, no "use client")

const Bone = ({ className = "" }: { className?: string }) => (
  <div
    aria-hidden="true"
    className={`animate-pulse rounded-md bg-bg-subtle motion-reduce:animate-none ${className}`}
  />
);

// Matches PropertyTypeFilters (6 tabs)
export const PropertyTypeFiltersSkeleton = () => (
  <div className="flex w-full items-center gap-x-2 overflow-hidden">
    {Array.from({ length: 6 }).map((_, i) => (
      <Bone key={i} className="h-10 w-28 shrink-0 rounded-full" />
    ))}
  </div>
);

// Matches FilterButton
export const FilterButtonSkeleton = () => (
  <Bone className="h-10 w-28 rounded-md" />
);

// Matches one listing card
export const ListingCardSkeleton = () => (
  <div className="flex flex-col gap-y-3">
    <Bone className="aspect-4/3 w-full rounded-lg" />
    <Bone className="h-6 w-1/3" />
    <Bone className="h-4 w-3/4" />
    <Bone className="h-4 w-1/2" />
  </div>
);

// Matches Pagination (also use as the dynamic() loading fallback)
export const PaginationSkeleton = () => (
  <div className="mt-10 flex h-8 items-center justify-center">
    <Bone className="h-8 w-48" />
  </div>
);

// Full page fallback
const ListingsSkeleton = () => (
  <div role="status" aria-busy="true" aria-label="Loading listings">
    <Bone className="h-12 w-full md:w-1/2" />

    <div className="mt-4 flex items-center justify-between gap-x-4">
      <PropertyTypeFiltersSkeleton />
      <FilterButtonSkeleton />
    </div>

    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <ListingCardSkeleton key={i} />
      ))}
    </div>

    <PaginationSkeleton />
  </div>
);

export default ListingsSkeleton;
