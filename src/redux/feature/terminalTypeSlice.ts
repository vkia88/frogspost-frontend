import { createSlice } from '@reduxjs/toolkit'
import { TerminalType } from '../../constants/TerminalType'
import { RootState } from '../store'

interface TerminalTypeState {
  value: TerminalType
}

const initialState: TerminalTypeState = {
  value: TerminalType.DEPOSIT
}

export const terminalTypeSlice = createSlice({
  name: 'terminalType',
  initialState,
  reducers: {
    selectDeposit: state => {
      state.value = TerminalType.DEPOSIT
    },
    selectPickup: state => {
      state.value = TerminalType.PICKUP
    }
  }
})

export const { selectDeposit, selectPickup } = terminalTypeSlice.actions

export const selectTerminalType = (state: RootState) => state.terminalType.value

export default terminalTypeSlice.reducer