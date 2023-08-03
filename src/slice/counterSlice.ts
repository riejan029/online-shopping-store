import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface State {
    category:string;
    description:string;
    id:string;
    imageUrl:string;
    productName:string;
    unitPrice:number;
    quantity:number;
}

interface StateType {
    action: () => void;
    counter: State[];
}

const iniVal:State[] = []

export const counterSlice = createSlice({
    name:'counter',
    initialState:iniVal,
    reducers:{
        addToCart:(state,action:PayloadAction<State>):void => {
            const {payload} = action;
            state.push(payload);
        },
        clearCart:():[] => {
            return []
        },
        increment:(state,action:PayloadAction<State>):State[] => {
            return state.map((item) => item.id === action.payload.id ? item = {...action.payload, quantity: action.payload.quantity + 1} : item) 
        },
        decrement:(state, action:PayloadAction<State>):State[] => {
            return state.map((item) => item.id === action.payload.id ? item = {...action.payload, quantity: action.payload.quantity !== 0 ? action.payload.quantity - 1 : 0} : item) 
        },
        updateQuantity:(state, action:PayloadAction<State>):State[] => {
            return state.map((item) => item.id === action.payload.id ? item = action.payload : item) 
        },
        removeItem:(state, action:PayloadAction<State>):State[] => {
            return state.filter((item) => item.id !== action.payload.id)
        }
    }
})

export const getCartList = (state:StateType):State[] => state.counter;

export const {addToCart, clearCart, increment, decrement, updateQuantity, removeItem} = counterSlice.actions;

export default counterSlice.reducer