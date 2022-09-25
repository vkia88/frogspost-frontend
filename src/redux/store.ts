import { configureStore } from '@reduxjs/toolkit'
import boxesSlice from './feature/boxesSlice'
import terminalTypeSlice from './feature/terminalTypeSlice'

export const store = configureStore({
  reducer: {
    boxes: boxesSlice,
    terminalType: terminalTypeSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch