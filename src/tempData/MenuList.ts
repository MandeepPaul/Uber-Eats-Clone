type MenuItem = {
  id: string;
  name: string;
  price: number;
  calories: number;
  recommended: number;
  description?: string;
};

type MenuCategory = {
  itemCategory: string;
  items: MenuItem[];
};

const menu: MenuCategory[] = [
  {
    itemCategory: "Sides",
    items: [
      {
        id: "i1",
        name: "Hashbrown",
        price: 2.59,
        calories: 180,
        recommended: 92,
        description:
          "Our golden-brown hash browns are made from the finest potatoes and cooked just the way you like them fluffy on the inside and crispy on the outside.",
      },
      {
        id: "i2",
        name: "Russet Thick-Cut Fries",
        price: 4.19,
        calories: 340,
        recommended: 88,
        description:
          "Our fries are thick-cut and served with the skin on, so you’re always reminded that they’re made from 100% Canadian-grown Russet potatoes.",
      },
      {
        id: "i3",
        name: "Poutine",
        price: 6.09,
        calories: 610,
        recommended: 88,
      },
    ],
  },
];

export default menu;
