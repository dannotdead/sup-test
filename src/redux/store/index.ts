import { configureStore } from '@reduxjs/toolkit'
import supplementsSlice from '../slices/supplementsSlice'

const store = configureStore({
  reducer: {
    supplements: supplementsSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
