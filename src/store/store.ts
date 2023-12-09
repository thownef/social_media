import { configureStore } from "@reduxjs/toolkit";
import newMessSlice from "./slices/newMessSlice";

export const store = configureStore({
  reducer: {
    newMess: newMessSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
