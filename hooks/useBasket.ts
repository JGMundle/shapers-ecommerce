import { ReactElement } from "react";
import { create } from "zustand";

interface BasketItem {
  id: number;
  icon: ReactElement;
  name: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
}

type BasketStore = {
  items: BasketItem[];
  favoriteItems: BasketItem[];
  addItem: (item: BasketItem) => void;
  removeItem: (id: number) => void;
  clearBasket: () => void;
};

export const useBasket = create<BasketStore>((set) => ({
  items: [],
  favoriteItems: [],
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...item, quantity: i.quantity } : i
          ),
        };
      } else {
        return { items: [...state.items, item] };
      }
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  clearBasket: () => set({ items: [] }),
}));
