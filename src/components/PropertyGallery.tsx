import { Heart, Share } from "lucide-react";
import Image from "next/image";

const images = [
  "/images/house.jpg",
  "/images/house.jpg",
  "/images/house.jpg",
  "/images/house.jpg",
  "/images/house.jpg",
];

const PropertyGallery = () => {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
      <div className="relative w-full aspect-596/350">
        <Image
          src={images[0]}
          alt="Property"
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      <div className="hidden sm:grid grid-cols-2 gap-4">
        {images.slice(1).map((image, index) => (
          <div key={index} className="relative w-full aspect-290/167">
            <Image
              src={image}
              alt={`Property ${index + 2}`}
              fill
              className="rounded-lg object-cover"
              sizes="25vw"
            />
          </div>
        ))}
      </div>

      <div className="py-2 px-3 rounded-full bg-black/80 text-text-inverted text-xs absolute right-2 bottom-2">
        1/10
      </div>

      <div className="absolute right-2 top-2 flex gap-x-2">
        <div className="bg-white p-2 rounded-full cursor-pointer">
          <Share className="text-text-default" size={16} />
        </div>
        <div className="bg-white p-2 rounded-full cursor-pointer">
          <Heart className="text-text-default" size={16} />
        </div>{" "}
      </div>
    </div>
  );
};

export default PropertyGallery;
