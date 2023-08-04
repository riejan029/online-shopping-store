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
        addToCart:(state,action:PayloadAction<State>):State[] | void => {
            const {payload} = action;
            if(state.find((item) => item.id === payload.id)) return state
            state.push(payload);
            localStorage.setItem('cartItems', JSON.stringify(state));
        },
        clearCart:():[] => {
            localStorage.setItem('cartItems', JSON.stringify([]));
            return []
        },
        increment:(state,action:PayloadAction<State>):State[] => {
            const newState = state.map((item) => item.id === action.payload.id ? item = {...action.payload, quantity: action.payload.quantity + 1} : item)
            localStorage.setItem('cartItems', JSON.stringify(newState));
            return newState
        },
        decrement:(state, action:PayloadAction<State>):State[] => {
            const newState = state.map((item) => item.id === action.payload.id ? item = {...action.payload, quantity: action.payload.quantity !== 0 ? action.payload.quantity - 1 : 0} : item)
            localStorage.setItem('cartItems', JSON.stringify(newState));
            return newState 
        },
        updateQuantity:(state, action:PayloadAction<State>):State[] => {
            const newState = state.map((item) => item.id === action.payload.id ? item = action.payload : item);
            localStorage.setItem('cartItems', JSON.stringify(newState));
            return newState
        },
        removeItem:(state, action:PayloadAction<State>):State[] => {
            const newState = state.filter((item) => item.id !== action.payload.id)
            localStorage.setItem('cartItems', JSON.stringify(newState));
            return newState
        }
    }
})

export const getCartList = (state:StateType):State[] => state.counter;

export const {addToCart, clearCart, increment, decrement, updateQuantity, removeItem} = counterSlice.actions;

export default counterSlice.reducer