import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BasketItem {
  id: number;
  url: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
}


interface DefaultState {
    basket: BasketItem[]
}
const initialState: DefaultState = {
    basket: []
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<BasketItem>) {
            state.basket.push(action.payload)
            
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.basket = state.basket.filter(
              (item) => item.id !== action.payload
            )
        },
        updateQuantity: (state, action: PayloadAction<{id: number, quantity: number}>) => {
            const item = state.basket.find(item => item.id === action.payload.id)
            if (item) {
                item.quantity += action.payload.quantity  //Add item.quanity to the payload quanitity
            }
        },
        clearBasket(state) {
            state.basket = []
        }
    }
})



export const { addItem, removeItem, updateQuantity, clearBasket } = basketSlice.actions
export default basketSlice.reducer