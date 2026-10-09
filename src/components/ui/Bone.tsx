import { cn } from "@/utils/cn";

const Bone = ({ className = "" }: { className?: string }) => (
  <div
    aria-hidden="true"
    className={cn(
      "animate-pulse rounded-md bg-bg-subtle motion-reduce:animate-none",
      className,
    )}
  />
);

export default Bone;
