import PropertyHistoryCard from "./PropertyHistoryCard";
import Panel from "./ui/Panel";

const history = [
  {
    id: "1",
    event: "Price update",
    mlsNumber: "#ML85645456",
    price: 1238645,
    pricePerSqft: 173,
    listedDate: "05/24/2025",
  },
  {
    id: "2",
    event: "Price update",
    mlsNumber: "#ML85645456",
    price: 1288645,
    pricePerSqft: 180,
    listedDate: "05/20/2025",
  },
];

const PropertyHistory = () => {
  return (
    <Panel>
      <h2 className="text-2xl font-semibold">Property history</h2>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          {history.map((item) => (
            <PropertyHistoryCard key={item.id} history={item} />
          ))}
        </div>
      </div>
    </Panel>
  );
};

export default PropertyHistory;
