import { defaultPropertyFilters } from "./filterParsers";

const FILTER_COUNT_EXCLUDED = [
  "sort",
  "page",
  "property_type",
  "location",
] as const;

export const countAppliedFilters = (filters: typeof defaultPropertyFilters) => {
  return Object.entries(filters).filter(([key, value]) => {
    if (
      FILTER_COUNT_EXCLUDED.includes(
        key as (typeof FILTER_COUNT_EXCLUDED)[number],
      )
    ) {
      return false;
    }

    const defaultValue =
      defaultPropertyFilters[key as keyof typeof defaultPropertyFilters];

    if (Array.isArray(value)) {
      return value.length > 0;
    }

    return value !== defaultValue;
  }).length;
};
