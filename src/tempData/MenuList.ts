type MenuItem = {
  id: string;
  name: string;
  price: number;
  calories: number | string;
  recommended: number;
  description?: string;
};

type MenuCategory = {
  id: string;
  itemCategory: string;
  items: MenuItem[];
};

const menu: MenuCategory[] = [
  {
    id: "c1",
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
      {
        id: "i4",
        name: "Hot Apple Turnover",
        price: 1.59,
        calories: 280,
        recommended: 92,
        description: "Hot apple turnover dusted with cinnamon sugar.",
      },
      {
        id: "i6",
        name: "Onion Rings",
        price: 5.89,
        calories: 520,
        recommended: 84,
        description:
          "Our classic onion rings are handcrafted in store, made from fresh onions.",
      },
      {
        id: "i7",
        name: "Sweet Potato Fries",
        price: 4.79,
        calories: 680,
        recommended: 78,
        description: "Sweet potato fries, served with spicy chipotle mayo.",
      },
    ],
  },
  {
    id: "c2",
    itemCategory: "Burger Combos",
    items: [
      {
        id: "i1",
        name: "Cheddar Bacon Uncle Burger Combo",
        price: 15.99,
        calories: "1080 - 1350",
        recommended: 89,
        description:
          "A perfectly seasoned 5 oz 100% pure beef patty – raised without the use of hormones or steroids topped with real Balderson cheddar cheese, mouth-watering bacon from pork raised without the use of antibiotics, red onion, crisp lettuce, pickles and two slices of tomato, served on a freshly toasted sesame seed bun. Comes with an A&W root beer and fries.",
      },
      {
        id: "i2",
        name: "Teen Burger® Combo",
        price: 13.99,
        calories: "830-1100",
        recommended: 89,
        description:
          "A perfectly seasoned 100% pure beef patty raised without the use of hormones or steroids topped with real mozzarella cheese, bacon from pork raised without the use of antibiotics, crisp lettuce, tomato and Mozza® sauce, served on a freshly toasted sesame seed bun. Comes with an A & W root beer and fries.",
      },
      {
        id: "i3",
        name: "Beyond Meat Burger Combo",
        price: 14.99,
        calories: "840-1110",
        recommended: 86,
        description:
          "A 3 oz 100% plant-based protein patty topped with tomato, lettuce, red onion, pickles, mayo, Uncle sauce, and Ketchup, served on a freshly toasted sesame seed bun. Comes with an A&W root beer and fries.",
      },
    ],
  },
];

export default menu;
