export type toppingsT = {
  id: string;
  name: string;
  price?: number;
  special?: string;
};

export const DUMMY_ADDONS: toppingsT[] = [
  {
    id: "t1",
    name: "Cheddar cheese",
    price: 0.8,
    special: "Popular",
  },
  {
    id: "t2",
    name: "Mozarella cheese",
    price: 0.8,
  },
  {
    id: "t3",
    name: "Egg",
    price: 0.8,
  },
  {
    id: "t4",
    name: "Extra Beyond Meat Patty",
    price: 3.59,
  },
  {
    id: "t5",
    name: "Grilled Onions",
    price: 0.2,
  },
];

export const DUMMY_REMOVES: toppingsT[] = [
  {
    id: "r1",
    name: "Mayo",
  },
  {
    id: "r2",
    name: "Lettuce",
  },
  {
    id: "r3",
    name: "Tomato",
  },
  {
    id: "r4",
    name: "Pickles",
  },
  {
    id: "r5",
    name: "Red Onions",
  },
  {
    id: "r6",
    name: "Ketchup",
  },
  {
    id: "r7",
    name: "Mustard",
  },
  {
    id: "r8",
    name: "A&W Seasoning",
  },
];

export const DUMMY_SUBSTITUTE: toppingsT[] = [
  {
    id: "r1",
    name: "Lettuce-Wrap",
  },
];
