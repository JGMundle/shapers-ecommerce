import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice"


export const store = configureStore({
    reducer: {
        basket: basketReducer
    }
})

// interface obj1 {
//     id: number,
//     name: string,
//     role: string
// }



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch