import { configureStore } from '@reduxjs/toolkit'
import supplementsSlice from '../slices/supplementsSlice'
import courseSlice from '../slices/courseSlice'
import errorsSlice from '../slices/errorsSlice'

const store = configureStore({
  reducer: {
    supplements: supplementsSlice,
    course: courseSlice,
    errors: errorsSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
