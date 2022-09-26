import { configureStore } from '@reduxjs/toolkit'
import boxesSlice from './feature/boxesSlice'
import locationSlice from './feature/locationSlice'
import parcelSlice from './feature/parcelSlice'
import terminalTypeSlice from './feature/terminalTypeSlice'

export const store = configureStore({
  reducer: {
    boxes: boxesSlice,
    location: locationSlice,
    parcel: parcelSlice,
    terminalType: terminalTypeSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch