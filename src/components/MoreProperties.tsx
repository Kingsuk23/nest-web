import { Fragment } from "react";
import PropertyCard from "./PropertyCard";

const MoreProperties = () => {
  return (
    <Fragment>
      <h3 className="text-2xl font-semibold mt-10">
        More Properties in Downtown Brookhaven
      </h3>
      <div className="mt-8 flex gap-x-4 overflow-x-scroll no-scrollbar">
        <PropertyCard className="w-75 shrink-0" />
        <PropertyCard className="w-75 shrink-0" />
        <PropertyCard className="w-75 shrink-0" />
        <PropertyCard className="w-75 shrink-0" />
      </div>
    </Fragment>
  );
};

export default MoreProperties;
