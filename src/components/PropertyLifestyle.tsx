import LifestyleScoreCard from "./LifestyleScoreCard";
import Panel from "./ui/Panel";

const PropertyLifestyle = () => {
  return (
    <Panel>
      <h2 className="text-2xl font-semibold">Life style</h2>
      <div className="flex flex-wrap gap-4">
        <LifestyleScoreCard />
        <LifestyleScoreCard />
        <LifestyleScoreCard />
        <LifestyleScoreCard />
        <LifestyleScoreCard />
      </div>
    </Panel>
  );
};

export default PropertyLifestyle;
