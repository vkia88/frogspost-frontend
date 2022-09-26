import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Message } from './message'

interface MessageSlice {
  value: Message[],
}

const initialState: MessageSlice = {
  value: [],
}

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    removeMessage: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(message => message.id !== action.payload);
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.value.push(action.payload);
    },
    addSuccessMessage: (state, action: PayloadAction<string>) => {
      state.value.push({ severity: "success", content: action.payload, id: window.crypto.randomUUID()})
    }
  }
})

export const { addMessage, addSuccessMessage, removeMessage } = messageSlice.actions

export const selectMessage = (state: RootState) => state.message.value

export default messageSlice.reducer