import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BasketItem {
  id: number;
  url: number;
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
            action.type
            
        }
    }
})