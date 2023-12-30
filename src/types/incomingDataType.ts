import { DocumentData, DocumentReference } from "firebase/firestore";

export type CondimentsList = {
  id: string;
  conName: string;
  conPrice?: number;
  extraCalories?: number;
  special?: string;
};

export type Condiments = {
  id: string;
  title: string;
  limit: number;
  list: CondimentsList[];
};

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  calories?: number | string;
  recommended?: number;
  description?: string;
  imageURL: string;
  condimentsReference: DocumentReference<DocumentData>;
};

export type MenuCategory = {
  id: string;
  itemCategory: string;
  items: MenuItem[];
};

export interface storeDataType extends Istores {
  menuContent: MenuCategory[];
}

export interface Istores {
  id: string;
  url: string;
  offer?: string;
  name: string;
  deliveryFee: number;
  time: number;
  rating: number;
  logoURL?: string;
  category?: string;
}
