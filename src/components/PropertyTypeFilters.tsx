"use client";

import { useFilters } from "@/hooks/useFilters";
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";

const propertyTypes = [
  "All Properties",
  "Condo",
  "Home-Town",
  "Land",
  "Single-family",
  "Multi-family",
];

const PropertyTypeFilters = () => {
  const tabRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [indicator, setIndicator] = useState({
    width: 0,
    left: 0,
  });
  const { filters, setFilter } = useFilters();

  const handleOnClick = (type: string) => {
    setFilter({ property_type: type === "All Properties" ? "" : type });
  };

  const updateIndicator = () => {
    const activeIndex =
      filters.property_type === ""
        ? 0
        : propertyTypes.findIndex((type) => type === filters.property_type);

    const activeButton = buttonRefs.current[activeIndex];

    if (!activeButton) return;

    setIndicator({
      width: activeButton.offsetWidth,
      left: activeButton.offsetLeft,
    });
  };

  useEffect(() => {
    updateIndicator();

    const resizeObserver = new ResizeObserver(() => {
      updateIndicator();
    });

    if (tabRef.current) {
      resizeObserver.observe(tabRef.current);
    }

    window.addEventListener("resize", updateIndicator);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
  }, [filters.property_type]);

  return (
    <div
      className="relative flex w-full items-center gap-x-2 overflow-x-auto no-scrollbar text-base"
      ref={tabRef}
    >
      {propertyTypes.map((type, index) => {
        const isActive =
          type === "All Properties"
            ? filters.property_type === ""
            : filters.property_type === type;

        return (
          <button
            key={type}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            onClick={() => handleOnClick(type)}
            className={cn(
              "relative z-10 shrink-0 cursor-pointer whitespace-nowrap px-4 py-2",
              "text-text-secondary",
              isActive && "text-text-default",
            )}
          >
            {type}
          </button>
        );
      })}
      <div
        className="pointer-events-none absolute top-0 bottom-0 left-0 z-0 rounded-full bg-bg-subtle transition-all duration-300 ease-out"
        style={{
          width: indicator.width,
          transform: `translateX(${indicator.left}px)`,
        }}
      />
    </div>
  );
};

export default PropertyTypeFilters;
