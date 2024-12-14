import { AlertColor } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit'

type Notification = {
  message: string;
  type: AlertColor;
};

export interface LoadingState {
  isOpen: boolean;
  notification: Notification
}

const initialState: LoadingState = {
  isOpen: false,
  notification: {
    message: "Login Successfully Login Successfully Login Successfully \n1Login Successfully Login Successfully Login Successfully Login Successfully",
    type: "success",
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
    resetNotification: (state) => {
      state.isOpen = false
      state.notification = { message: "", type: "info" }
    },
  },
})

export const { setNotification, resetNotification } = notificationSlice.actions

export default notificationSlice.reducer