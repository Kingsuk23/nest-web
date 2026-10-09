import Link from "next/link";
import Image from "next/image";
import { Bath, Bed, Ruler } from "lucide-react";
import Card from "./ui/Card";
import { cn } from "@/utils/cn";

interface PropertyCardProps {
  className?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ className }) => {
  return (
    <Link href="/listing/1" className={cn(className)}>
      <Card className="w-full">
        <Card.Header>
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
            <Image
              fill
              src="/images/House.png"
              alt="Modern suburban villa"
              sizes="100vw"
              className="h-full w-full object-cover "
            />
          </div>

          <Card.Badge>$480,000</Card.Badge>
        </Card.Header>

        <Card.Content>
          <p className="text-lg  tracking-tight text-text-default">
            Modern Suburban Villa
          </p>

          <p className="text-sm  text-text-secondary">
            Akshya Nagar 1st Block 1st Cross,
          </p>

          <div className="flex items-center gap-8 text-sm text-text-default">
            <span className="flex items-center gap-2">
              <Bed size={16} /> 4
            </span>

            <span className="flex items-center gap-2">
              <Bath size={16} /> 4
            </span>

            <span className="flex items-center gap-2">
              <Ruler size={13} /> 2500 sq.ft
            </span>
          </div>
        </Card.Content>
      </Card>
    </Link>
  );
};

export default PropertyCard;
