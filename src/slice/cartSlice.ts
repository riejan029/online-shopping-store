import { createSlice } from '@reduxjs/toolkit'
import type { State, StateType } from './inventorySlice'

const initialValue:State[] = []

export const cartSlice = createSlice({
    name:'cart',
    initialState:initialValue,
    reducers:{
        addToCart:(state, action):void => {
            state = [...state, action.payload];
        }
    }
})

export const getCartList = (state:StateType):State[] => state.inventory;

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer;