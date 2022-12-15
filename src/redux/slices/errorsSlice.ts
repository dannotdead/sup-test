import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ErrorsState = {
  error: string
}

const initialState: ErrorsState = {
  error: '',
}

const errorsSlice = createSlice({
  name: 'supplements',
  initialState,
  reducers: {
    addError(state, action: PayloadAction<ErrorsState>) {
      return { ...action.payload }
    },
    resetError() {
      return {
        error: '',
      }
    },
  },
})

export const { addError, resetError } = errorsSlice.actions

export default errorsSlice.reducer
