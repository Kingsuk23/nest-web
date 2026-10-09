import MobileRequestShowing from "./MobileRequestShowing";
import PropertyAbout from "./PropertyAbout";
import PropertyDetails from "./PropertyDetails";
import PropertyHistory from "./PropertyHistory";
import PropertyKeyDetails from "./PropertyKeyDetails";
import PropertyLifestyle from "./PropertyLifestyle";
import PropertyNeighborhood from "./PropertyNeighborhood";
import PropertyOpenHouse from "./PropertyOpenHouse";
import PropertyOwnerHistory from "./PropertyOwnerHistory";
import PropertySummary from "./PropertySummary";
import RequestShowingForm from "./RequestShowingForm";
import Panel from "./ui/Panel";

const PropertyContent = () => {
  return (
    <div className="flex gap-6 mt-6 w-full">
      <div className="flex flex-col gap-y-6 w-full lg:max-w-198.75 min-w-0">
        <PropertySummary />
        <PropertyAbout />
        <PropertyKeyDetails />
        <PropertyOpenHouse />
        <MobileRequestShowing />
        <PropertyHistory />
        <PropertyOwnerHistory />
        <PropertyDetails />
        <PropertyNeighborhood />
        <PropertyLifestyle />
      </div>

      <Panel className="max-w-97.5 h-fit min-w-0 hidden lg:flex flex-col">
        <RequestShowingForm />
      </Panel>
    </div>
  );
};

export default PropertyContent;
