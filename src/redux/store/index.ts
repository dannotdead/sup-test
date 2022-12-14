import { configureStore } from '@reduxjs/toolkit'
import supplementsSlice from '../slices/supplementsSlice'
import courseSlice from '../slices/courseSlice'

const store = configureStore({
  reducer: {
    supplements: supplementsSlice,
    course: courseSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
