import { cn } from "@/utils/cn";
import { Fragment } from "react";
import Panel from "./ui/Panel";

const stats = [`3 Beds`, `2 Baths`, `1,567 Sqft`, `7,100 Sqft lot`];

const PropertySummary = () => {
  return (
    <Panel>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-semibold">$1,288,000</h1>
        <div className="px-4 py-2 text-base bg-[#94EB96] rounded-3xl">
          Active
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          {stats.map((stat, index) => (
            <Fragment key={stat}>
              {index > 0 && (
                <span
                  className={cn(
                    "size-1 rounded-full bg-[#C0BFBF]",
                    index === 3 && "max-md:hidden",
                  )}
                />
              )}

              <p
                className={cn(
                  "text-base text-text-secondary",
                  index === 3 && "max-md:hidden",
                )}
              >
                {stat}
              </p>
            </Fragment>
          ))}
        </div>
        <p className="text-text-secondary text-base">
          456 Park Avenue Unit 3C, San Jose, CA 95100.
        </p>
      </div>
    </Panel>
  );
};

export default PropertySummary;
