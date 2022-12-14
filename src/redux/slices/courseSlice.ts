import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Supplement } from './supplementsSlice'

type SupplementState = {
  list: Supplement[]
}

const initialState: SupplementState = {
  list: [],
}

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    addSupplementToCourse(state, action: PayloadAction<Supplement>) {
      const condition = !state.list
        .map((item) => item.Article)
        .includes(action.payload.Article)

      if (condition) {
        return {
          ...state,
          list: [...state.list, action.payload],
        }
      }

      return state
    },
  },
})

export const { addSupplementToCourse } = courseSlice.actions

export default courseSlice.reducer
