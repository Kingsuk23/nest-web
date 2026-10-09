import { Armchair, PlusCircle } from "lucide-react";
import Panel from "./ui/Panel";

const PropertyNeighborhood = () => {
  return (
    <Panel>
      <h2 className="text-2xl font-semibold">Around this home</h2>
      <div
        className="
    w-full
    aspect-338/225
    md:aspect-727/385
    overflow-hidden
    rounded-xl bg-amber-300
  "
      ></div>
      <div className="border border-border-mute p-4 rounded-xl flex gap-4 items-center ">
        <PlusCircle size={24} className="text-icon-default" />
        <h4 className="text-xl font-semibold">Add a commute</h4>
      </div>

      <div className="flex gap-8 items-center mt-6">
        <div className="flex items-center  justify-center gap-2 rounded-md bg-bg-subtle py-2 w-1/3">
          <Armchair size={24} className="text-icon-default" />
          <p className="text-base font-medium">Interior</p>
        </div>
        <div className="flex items-center  justify-center gap-2 w-1/3">
          {/* <Armchair size={24} className="text-icon-default" /> */}
          <p className="text-base text-text-secondary">Exterior</p>
        </div>
        <div className="flex items-center  justify-center gap-2 w-1/3">
          {/* <Armchair size={24} className="text-icon-default" /> */}
          <p className="text-base text-text-secondary">Finance</p>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-y-2">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">Archer Street School</h4>
            <div className="flex gap-2 items-center">
              <span className="text-base">Public K-4 </span>
              <span className="bg-black size-1 rounded-full " />
              <span className="text-base">Assigned </span>
              <span className="bg-black size-1 rounded-full " />
              <span className="text-base">0.1 mi </span>
            </div>
          </div>
          <p className="text-base">7/10</p>
        </div>
        <hr className=" border-border-mute" />
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">Archer Street School</h4>
            <div className="flex gap-2 items-center">
              <span className="text-base">Public K-4 </span>
              <span className="bg-black size-1 rounded-full " />
              <span className="text-base">Assigned </span>
              <span className="bg-black size-1 rounded-full " />
              <span className="text-base">0.1 mi </span>
            </div>
          </div>
          <p className="text-base">7/10</p>
        </div>
        <hr className=" border-border-mute" />
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">Archer Street School</h4>
            <div className="flex gap-2 items-center">
              <span className="text-base">Public K-4 </span>
              <span className="bg-black size-1 rounded-full " />
              <span className="text-base">Assigned </span>
              <span className="bg-black size-1 rounded-full " />
              <span className="text-base">0.1 mi </span>
            </div>
          </div>
          <p className="text-base">7/10</p>
        </div>
      </div>
    </Panel>
  );
};

export default PropertyNeighborhood;
