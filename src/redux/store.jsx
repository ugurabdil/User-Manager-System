import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserCreateSlice'

export const store = configureStore({
  reducer: {
    user:userReducer
  },
})