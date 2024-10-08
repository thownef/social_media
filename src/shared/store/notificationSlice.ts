import { createSlice } from '@reduxjs/toolkit'

type Notification = {
  message: string;
  type: string;
};

export interface LoadingState {
  isOpen: boolean;
  notification: Notification
}

const initialState: LoadingState = {
  isOpen: false,
  notification: {
    message: "",
    type: "",
  },
}

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action) => {
      const { message, type } = action.payload
      state.isOpen = true
      state.notification = { type, message }
    },
  },
})

export const { setNotification } = notificationSlice.actions

export default notificationSlice.reducer