import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import inventorySlice from "./slice/inventorySlice";

export const store = configureStore({
    reducer:{
        counter:counterSlice,
        inventory:inventorySlice,
    }
})