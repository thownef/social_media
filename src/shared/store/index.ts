import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/shared/store/authSlice";
import loadingSlice from "@/shared/store/loadingSlice";

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
