import { configureStore } from '@reduxjs/toolkit'
import userReducer from './users/users.reducer.js'

export const store = configureStore({
  reducer: {
    counter: userReducer,
  },
})

