import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import moment from 'moment'
import { BoxSize } from '../../constants/BoxSize'
import { RootState } from '../store'
import { Parcel } from './parcel'

interface ParcelSlice {
  value: Parcel,
}

const initialState: ParcelSlice = {
  value: { size: BoxSize.A, until: moment().format('YYYY-MM-DD') },
}

export const parcelSlice = createSlice({
  name: 'parcel',
  initialState,
  reducers: {
    updateParcel: (state, action: PayloadAction<Parcel>) => {
      state.value = {...action.payload}
    }
  }
})

export const { updateParcel } = parcelSlice.actions

export const selectParcel = (state: RootState) => state.parcel.value

export default parcelSlice.reducer