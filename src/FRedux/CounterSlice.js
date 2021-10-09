import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    counter: 1
}

const CounterSlice = createSlice({
    'name': 'counter',
    initialState,
    reducers: {
        increase: (state, action) => {
            state.counter = state.counter + 1
        },
        decrease: (state, action) => {
            state.counter = state.counter - 1
        }
    },
    extraReducers: (builder) => {

    }
})

export const actions = CounterSlice.actions

export const selectCounter = (state)=>state.counter.counter;


export default CounterSlice.reducer