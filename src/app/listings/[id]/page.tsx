import MoreProperties from "@/components/MoreProperties";
import PropertyContent from "@/components/PropertyContent";
import PropertyGallery from "@/components/PropertyGallery";

const ListingInfo = () => {
  return (
    <div className="mx-auto flex flex-col px-4 md:px-9">
      <PropertyGallery />
      <PropertyContent />
      <MoreProperties />
    </div>
  );
};

export default ListingInfo;
