import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Purpose = {
  Purpose: string
  PurposePicture: string
}

export type Supplement = {
  Article: string
  Picture: string
  GoodsCommercialName: string
  CommercialDescription: string
  SupplementForm: string
  Purposes: Purpose[]
  CurrentPrices: number
}

type SupplementState = {
  list: Supplement[]
}

const initialState: SupplementState = {
  list: [],
}

const supplementSlice = createSlice({
  name: 'supplements',
  initialState,
  reducers: {
    addAllSupplements(state, action: PayloadAction<Supplement[]>) {
      state.list = action.payload
    },
    addSupplement(state, action: PayloadAction<Supplement>) {
      state.list.push({
        ...action.payload,
      })
    },
  },
})

export const { addAllSupplements, addSupplement } = supplementSlice.actions

export default supplementSlice.reducer
