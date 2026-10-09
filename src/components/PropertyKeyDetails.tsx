import PropertyDetailItem from "./common/PropertyDetailItem";
import Panel from "./ui/Panel";

const details = [
  {
    label: "MLS number",
    value: "8967564346",
  },
  {
    label: "Price per Sqft",
    value: "200",
  },
  {
    label: "Bedrooms",
    value: "7",
  },
  {
    label: "Bathrooms",
    value: "5",
  },
  {
    label: "Full Bathrooms",
    value: "9",
  },
];

const PropertyKeyDetails = () => {
  return (
    <Panel>
      <h2 className="text-2xl font-semibold">Key Details</h2>
      <div className="flex flex-wrap gap-6">
        {details.map((detail) => (
          <PropertyDetailItem
            key={detail.label}
            label={detail.label}
            value={detail.value}
          />
        ))}
      </div>
    </Panel>
  );
};

export default PropertyKeyDetails;
