import OpenHouseCard from "./OpenHouseCard";
import Panel from "./ui/Panel";

const openHouses = [
  {
    id: 1,
    date: "09/10/2026",
    time: "10:00 AM - 2:00 PM",
  },
  {
    id: 2,
    date: "09/12/2026",
    time: "11:00 AM - 3:00 PM",
  },
  {
    id: 3,
    date: "09/13/2026",
    time: "12:00 PM - 4:00 PM",
  },
];

const PropertyOpenHouse = () => {
  return (
    <Panel>
      <h2 className="text-2xl font-semibold">Open House</h2>
      <div className="flex overflow-x-scroll no-scrollbar gap-6">
        {openHouses.map((openHouse) => (
          <OpenHouseCard
            key={openHouse.id}
            date={openHouse.date}
            time={openHouse.time}
          />
        ))}
      </div>
    </Panel>
  );
};

export default PropertyOpenHouse;
