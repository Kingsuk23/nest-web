import Image from "next/image";
import { Star } from "lucide-react";

import Card from "./ui/Card";
import { cn } from "@/utils/cn";

interface ReviewCardProps {
  className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ className }) => {
  return (
    <Card
      className={cn("h-fit w-94.5 rounded-xl bg-white p-4 shrink-0", className)}
    >
      <Card.Header>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Image
              src="/images/profile pic-1.png"
              alt="profile"
              className="rounded-full overflow-hidden"
              width={32}
              height={32}
            />
            <span className="text-sm  tracking-tight">Rohit</span>
          </div>

          <div className="flex gap-2 items-center">
            <Star size={16} />
            <span className="text-text-default text-base ">4.5</span>
          </div>
        </div>
      </Card.Header>

      <Card.Content className="mt-6">
        <p className="text-base  text-text-secondary">
          Outstanding service! The team delivered above and beyond my
          expectations. Highly recommended!
        </p>
      </Card.Content>
    </Card>
  );
};

export default ReviewCard;
