import { Fragment, Suspense } from "react";
import Sort from "./Sort";

const MobileListingHeader = () => {
  return (
    <Fragment>
      <h1 className="text-lg font-semibold md:hidden mt-4 ">
        Homes for Sale | Real Estate Listings
      </h1>

      <div className="flex justify-between items-center mt-4 md:hidden">
        <span className="text-base ">123 Homes</span>
        <Suspense fallback={<div>Loading</div>}>
          <Sort className="flex md:hidden" />
        </Suspense>
      </div>
    </Fragment>
  );
};

export default MobileListingHeader;
