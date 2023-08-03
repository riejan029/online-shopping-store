import { createSlice } from '@reduxjs/toolkit'

interface State {
    value: number
}

interface StateType {
    action: () => void;
    counter: State;
}

const iniVal:State = {
    value:0
}

export const counterSlice = createSlice({
    name:'counter',
    initialState:iniVal,
    reducers:{
        increment:(state):void => {
            state.value += 1
        }
    }
})

export const getCount = (state:StateType):number => state.counter.value;

export const {increment} = counterSlice.actions;

export default counterSlice.reducer