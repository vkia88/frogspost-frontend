import { configureStore } from '@reduxjs/toolkit'
import terminalTypeSlice from './feature/terminalTypeSlice'

export const store = configureStore({
  reducer: {
    terminalType: terminalTypeSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch