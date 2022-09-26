import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Location } from './location'

interface LocationState {
  value: Location | null,
}

const initialState: LocationState = {
  value: null,
}

export const locationSlice = createSlice({
  name: 'boxes',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<Location>) => {
      state.value = action.payload
    }
  }
})

export const { setLocation } = locationSlice.actions

export const selectLocation = (state: RootState) => state.location.value

export default locationSlice.reducer