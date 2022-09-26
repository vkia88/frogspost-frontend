import { configureStore } from '@reduxjs/toolkit'
import boxesSlice from './feature/boxesSlice'
import locationSlice from './feature/locationSlice'
import messageSlice from './feature/messageSlice'
import parcelSlice from './feature/parcelSlice'
import terminalTypeSlice from './feature/terminalTypeSlice'

export const store = configureStore({
  reducer: {
    boxes: boxesSlice,
    location: locationSlice,
    message: messageSlice,
    parcel: parcelSlice,
    terminalType: terminalTypeSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch