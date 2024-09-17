import {createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    initialState: 0,
    name: 'counter',
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1
    }
})

export const {increment , decrement} = counterSlice.actions
//ye iski action h or ye iska reducer h
export default counterSlice.reducer
