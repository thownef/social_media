
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/shared/store/authSlice";
import loadingSlice from "@/shared/store/loadingSlice";
import notificationSlice from "@/shared/store/notificationSlice";

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    user: userSlice,
    notification: notificationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch