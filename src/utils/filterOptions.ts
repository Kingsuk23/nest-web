import { StatusType } from "./type";

export const priceData = [
  { price: 600000, home: 11 },
  { price: 650000, home: 19 },
  { price: 700000, home: 21 },
  { price: 750000, home: 9 },
  { price: 800000, home: 27 },
  { price: 850000, home: 16 },
  { price: 900000, home: 33 },
  { price: 950000, home: 25 },
  { price: 1000000, home: 41 },

  { price: 1750000, home: 121 },
  { price: 1800000, home: 86 },
  { price: 1850000, home: 132 },
  { price: 1900000, home: 95 },
  { price: 1950000, home: 140 },
  { price: 2000000, home: 112 },

  { price: 2650000, home: 121 },
  { price: 2700000, home: 156 },
  { price: 2750000, home: 127 },
  { price: 2800000, home: 138 },
  { price: 2850000, home: 101 },
  { price: 2900000, home: 142 },
  { price: 2950000, home: 115 },
  { price: 3000000, home: 97 },

  { price: 8000000, home: 123 },
  { price: 8500000, home: 78 },
  { price: 9000000, home: 121 },
  { price: 9500000, home: 200 },
  { price: 10000000, home: 231 },
];

export const MinPriceOptions = [
  { label: "No min", value: "" },
  { label: "$600k", value: "600000" },
  { label: "$1.2M", value: "1200000" },
  { label: "$1.8M", value: "1800000" },
  { label: "$2.4M", value: "2400000" },
];
export const MaxPriceOptions = [
  { label: "No max", value: "" },
  { label: "$600k", value: "600000" },
  { label: "$1.2M", value: "1200000" },
  { label: "$1.8M", value: "1800000" },
  { label: "$2.4M", value: "2400000" },
];

export const status = [
  {
    label: "Any",
    value: StatusType.ANY,
  },
  {
    label: "Active",
    value: StatusType.ACTIVE,
  },
  {
    label: "Pending",
    value: StatusType.PENDING,
  },
];

export const houseTypes = [
  { label: "Existing homes", value: "existing-homes" },
  { label: "Foreclosures", value: "foreclosures" },
  { label: "New construction", value: "new-construction" },
  { label: "Auction", value: "auction" },
];

export const tourTypes = [
  { label: "Open house", value: "open-house" },
  { label: "Virtual tours", value: "virtual-tours" },
];

export const minSqftOptions = [
  { label: "No min", value: "" },
  { label: "500 sqft", value: "500 sqft" },
  { label: "750 sqft", value: "750 sqft" },
  { label: "1,000 sqft", value: "1000 sqft" },
  { label: "1,250 sqft", value: "1250 sqft" },
  { label: "1,500 sqft", value: "1500 sqft" },
  { label: "1,750 sqft", value: "1750 sqft" },
  { label: "2,000 sqft", value: "2000 sqft" },
  { label: "2,250 sqft", value: "2250 sqft" },
  { label: "2,500 sqft", value: "2500 sqft" },
  { label: "2,750 sqft", value: "2750 sqft" },
];

export const maxSqftOptions = [
  { label: "No max", value: "" },
  { label: "2,250 sqft", value: "2250 sqft" },
  { label: "2,500 sqft", value: "2500 sqft" },
  { label: "2,750 sqft", value: "2750 sqft" },
  { label: "3,000 sqft", value: "3000 sqft" },
  { label: "3,250 sqft", value: "3250 sqft" },
  { label: "3,500 sqft", value: "3500 sqft" },
  { label: "3,750 sqft", value: "3750 sqft" },
  { label: "5,000 sqft", value: "5000 sqft" },
  { label: "7,500 sqft", value: "7500 sqft" },
  { label: "10,000 sqft", value: "10000 sqft" },
];

export const MinLotSizeOptions = [
  { label: "No min", value: "" },
  { label: "2000 sqft", value: "2000 sqft" },
  { label: "3000 sqft", value: "3000 sqft" },
  { label: "4000 sqft", value: "4000 sqft" },
  { label: "5000 sqft", value: "5000 sqft" },
  { label: "7500 sqft", value: "7500 sqft" },
  { label: "0.25 acre", value: "0.25 acre" },
  { label: "0.50 acre", value: "0.50 acre" },
  { label: "1 acre", value: "1 acre" },
  { label: "2 acre", value: "2 acre" },
  { label: "5 acre", value: "5 acre" },
  { label: "10 acre", value: "10 acre" },
  { label: "15 acre", value: "15 acre" },
  { label: "20 acre", value: "20 acre" },
  { label: "50 acre", value: "50 acre" },
  { label: "100 acre", value: "100 acre" },
];
export const MaxLotSizeOptions = [
  { label: "No max", value: "" },
  { label: "2000 sqft", value: "2000 sqft" },
  { label: "3000 sqft", value: "3000 sqft" },
  { label: "4000 sqft", value: "4000 sqft" },
  { label: "5000 sqft", value: "5000 sqft" },
  { label: "7500 sqft", value: "7500 sqft" },
  { label: "0.25 acre", value: "0.25 acre" },
  { label: "0.50 acre", value: "0.50 acre" },
  { label: "1 acre", value: "1 acre" },
  { label: "2 acre", value: "2 acre" },
  { label: "5 acre", value: "5 acre" },
  { label: "10 acre", value: "10 acre" },
  { label: "15 acre", value: "15 acre" },
  { label: "20 acre", value: "20 acre" },
  { label: "50 acre", value: "50 acre" },
  { label: "100 acre", value: "100 acre" },
];

export const MinAgeOptions = [
  { label: "No min", value: "" },
  { label: "1 year", value: "1" },
  { label: "3 years", value: "3" },
  { label: "5 years", value: "5" },
  { label: "10 years", value: "10" },
  { label: "15 years", value: "15" },
  { label: "20 years", value: "20" },
  { label: "25 years", value: "25" },
  { label: "30 years", value: "30" },
  { label: "50 years", value: "50" },
  { label: "75 years", value: "75" },
  { label: "100 years", value: "100" },
];
export const MaxAgeOptions = [
  { label: "No max", value: "" },
  { label: "1 year", value: "1" },
  { label: "3 years", value: "3" },
  { label: "5 years", value: "5" },
  { label: "10 years", value: "10" },
  { label: "15 years", value: "15" },
  { label: "20 years", value: "20" },
  { label: "25 years", value: "25" },
  { label: "30 years", value: "30" },
  { label: "50 years", value: "50" },
  { label: "75 years", value: "75" },
  { label: "100 years", value: "100" },
];

export const HOAFee = [
  { label: "No max", value: "" },
  { label: "$50/month", value: "50" },
  { label: "$100/month", value: "100" },
  { label: "$200/month", value: "200" },
  { label: "$300/month", value: "300" },
  { label: "$400/month", value: "400" },
  { label: "$500/month", value: "500" },
  { label: "$750/month", value: "750" },
  { label: "$1,000/month", value: "1000" },
  { label: "$1,500/month", value: "1500" },
  { label: "$2,000/month", value: "2000" },
  { label: "$2,500/month", value: "2500" },
  { label: "$3,000/month", value: "3000" },
];

export const garage = [
  {
    label: "Any",
    value: 0,
  },
  {
    label: "1+",
    value: 1,
  },
  {
    label: "2+",
    value: 2,
  },
  {
    label: "3+",
    value: 3,
  },
];

export const stories = [
  {
    label: "Any",
    value: 0,
  },
  {
    label: "Single",
    value: 1,
  },
  {
    label: "Multiple",
    value: 2,
  },
];

export const keywords = [
  { label: "Accessibility", value: "accessibility" },
  { label: "Basement", value: "basement" },
  { label: "Central Air", value: "central air" },
  { label: "Central Heat", value: "central heat" },
  { label: "Den / Office", value: "den / office" },
  { label: "Dining Room", value: "dining room" },
  { label: "Elevator", value: "elevator" },
  { label: "Energy Efficient", value: "energy efficient" },
  { label: "Family Room", value: "family room" },
  { label: "Fireplace", value: "fireplace" },
  { label: "Forced Air", value: "forced air" },
  { label: "Game Room", value: "game room" },
  { label: "Hardwood Floors", value: "hardwood floors" },
  { label: "In-Home Laundry", value: "in-home laundry" },
  { label: "Carport", value: "carport" },
  { label: "Corner Lot", value: "corner lot" },
  { label: "Cul-de-Sac", value: "cul-de-sac" },
  { label: "Golf Course Lot", value: "golf course lot" },
  { label: "Horse Facility", value: "horse facility" },
  { label: "Pool", value: "pool" },
  { label: "RV / Boat Parking", value: "rv / boat parking" },
  { label: "Spa / Hot Tub", value: "spa / hot tub" },
  { label: "City View", value: "city view" },
  { label: "Golf Course View", value: "golf course view" },
  { label: "Hill / Mtn View", value: "hill / mtn view" },
  { label: "Lake View", value: "lake view" },
  { label: "Ocean View", value: "ocean view" },
  { label: "River View", value: "river view" },
  { label: "Water Front", value: "water front" },
];

export const interiors = [
  { label: "Accessibility", value: "accessibility" },
  { label: "Basement", value: "basement" },
  { label: "Central Air", value: "central air" },
  { label: "Central Heat", value: "central heat" },
  { label: "Den / Office", value: "den / office" },
  { label: "Dining Room", value: "dining room" },
  { label: "Elevator", value: "elevator" },
  { label: "Energy Efficient", value: "energy efficient" },
  { label: "Family Room", value: "family room" },
  { label: "Fireplace", value: "fireplace" },
  { label: "Forced Air", value: "forced air" },
  { label: "Game Room", value: "game room" },
  { label: "Hardwood Floors", value: "hardwood floors" },
  { label: "In-Home Laundry", value: "in-home laundry" },
];

export const exteriors = [
  { label: "Carport", value: "carport" },
  { label: "Corner Lot", value: "corner lot" },
  { label: "Cul-de-Sac", value: "cul-de-sac" },
  { label: "Golf Course Lot", value: "golf course lot" },
  { label: "Horse Facility", value: "horse facility" },
  { label: "Pool", value: "pool" },
  { label: "RV / Boat Parking", value: "rv / boat parking" },
  { label: "Spa / Hot Tub", value: "spa / hot tub" },
];

export const views = [
  { label: "City View", value: "city view" },
  { label: "Golf Course View", value: "golf course view" },
  { label: "Hill / Mtn View", value: "hill / mtn view" },
  { label: "Lake View", value: "lake view" },
  { label: "Ocean View", value: "ocean view" },
  { label: "River View", value: "river view" },
  { label: "Water Front", value: "water front" },
];
