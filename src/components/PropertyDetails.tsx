import { Armchair, Lightbulb } from "lucide-react";
import Panel from "./ui/Panel";

const PropertyDetails = () => {
  return (
    <Panel>
      <h2 className="text-2xl font-semibold">Property details</h2>
      <div className="flex gap-8 items-center mt-6">
        <div className="flex items-center gap-2 bg-bg-subtle p-2 rounded-md">
          <Armchair size={24} className="text-icon-default" />
          <p className="text-base font-medium">Interior</p>
        </div>
        <div className="flex items-center gap-2">
          {/* <Armchair size={24} className="text-icon-default" /> */}
          <p className="text-base text-text-secondary">Exterior</p>
        </div>
        <div className="flex items-center gap-2">
          {/* <Armchair size={24} className="text-icon-default" /> */}
          <p className="text-base text-text-secondary">Finance</p>
        </div>
      </div>
      <div className="flex mt-8 flex-wrap gap-x-32 gap-y-6">
        <div className="flex gap-2 items-start">
          <Lightbulb size={24} className="text-icon-default" />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Interior features</h3>
            <ul className="text-base text-text-secondary mt-4">
              <li>First-floor full bath</li>
              <li>Chandelier</li>
              <li>Open floor plan</li>
              <li>Open kitchen</li>
              <li>Quartz or quartzite counters</li>
              <li>Full unfinished basement</li>
              <li>Full walkup attic</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <Lightbulb size={24} className="text-icon-default" />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Interior features</h3>
            <ul className="text-base text-text-secondary mt-4">
              <li>First-floor full bath</li>
              <li>Chandelier</li>
              <li>Open floor plan</li>
              <li>Open kitchen</li>
              <li>Quartz or quartzite counters</li>
              <li>Full unfinished basement</li>
              <li>Full walkup attic</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <Lightbulb size={24} className="text-icon-default" />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Interior features</h3>
            <ul className="text-base text-text-secondary mt-4">
              <li>First-floor full bath</li>
              <li>Chandelier</li>
              <li>Open floor plan</li>
              <li>Open kitchen</li>
              <li>Quartz or quartzite counters</li>
              <li>Full unfinished basement</li>
              <li>Full walkup attic</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <Lightbulb size={24} className="text-icon-default" />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Interior features</h3>
            <ul className="text-base text-text-secondary mt-4">
              <li>First-floor full bath</li>
              <li>Chandelier</li>
              <li>Open floor plan</li>
              <li>Open kitchen</li>
              <li>Quartz or quartzite counters</li>
              <li>Full unfinished basement</li>
              <li>Full walkup attic</li>
            </ul>
          </div>
        </div>
      </div>
    </Panel>
  );
};

export default PropertyDetails;
