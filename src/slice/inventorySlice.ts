import { createSlice } from '@reduxjs/toolkit'
import inventory from '../assets/items.json';

export interface StateType {
    action:() => void;
    inventory:State[]
}

export interface State {
    category:string;
    description:string;
    id:string;
    imageUrl:string;
    productName:string;
    unitPrice:number;
}

const initialValue: State[] = inventory

export const inventorySlice = createSlice({
    name:'inventory',
    initialState:initialValue,
    reducers:{
        filterByCategory: (state, action):void => {
            state.filter((newData) => newData.category === action.payload)
        }
    }
})

export const getAll = (state:StateType):State[] => state.inventory

export const {filterByCategory} = inventorySlice.actions;

export default inventorySlice.reducer