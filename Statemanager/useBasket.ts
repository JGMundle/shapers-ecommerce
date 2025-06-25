import { ReactElement } from "react";
import { create } from "zustand";

export interface BasketItem {
  id: string;
  icon: ReactElement;
  name: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
}

type BasketStore = {
  items: BasketItem[];
  addItem: (item: BasketItem) => void;
  removeItem: (id: string) => void;
  clearBasket: () => void;

  // favouriteItems: BasketItem[];
  // addFavouriteItem: (item: BasketItem) => void
  // removeFavouriteItem: (id: string) => void
  // clearFavouriteItems: () => void
};

export const useBasket = create<BasketStore>((set) => ({
  items: [],

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

// favoriteItems: [],
// addToWishlist: (item: BasketItem) =>
//   set((state) => {
//     const exists = state.wishlistItems.some((i) => i.id === item.id);
//     if (!exists) {
//       return {
//         wishlistItems: [
//           ...state.wishlistItems,
//           { ...item, quantity: undefined },
//         ],
//       };
//     }
//     return state; // No change if item is already in wishlist
//   }),

// removeFromWishlist: (id) =>
//       set((state) => ({
//         wishlistItems: state.wishlistItems.filter((item) => item.id !== id),
//       })),

//     clearWishlist: () => set({ wishlistItems: [] }),
//   }),
//   {
//     name: 'store-storage', // Key for localStorage
//   }