import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import inventorySlice from "./slice/inventorySlice";
import cartSlice from "./slice/cartSlice";

export const store = configureStore({
    reducer:{
        counter:counterSlice,
        inventory:inventorySlice,
        cart:cartSlice
    }
})