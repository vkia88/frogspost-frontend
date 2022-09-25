import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Box } from './boxes'

interface BoxesState {
  value: Box[],
}

const initialState: BoxesState = {
  value: [] as Box[],
}

export const boxesSlice = createSlice({
  name: 'boxes',
  initialState,
  reducers: {
    setBoxes: (state, action: PayloadAction<Box[]>) => {
      state.value = action.payload
    }
  }
})

export const { setBoxes } = boxesSlice.actions

export const selectBoxes = (state: RootState) => state.boxes.value

export default boxesSlice.reducer