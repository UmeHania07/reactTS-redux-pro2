import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./Slices/Counter/Index"

export const store = configureStore({
    //jo event ko handle krta h osko bolty hn reducer 
    reducer: {
        counter:counterSlice
    },
  })
//is store mai already ek function h wo getstate h
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch







