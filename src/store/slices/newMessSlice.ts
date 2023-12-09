import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface NewMess {
  isNew: boolean;
}

const initialState: NewMess = {
  isNew: false,
};

export const newMessSlice = createSlice({
  name: "newMess",
  initialState,
  reducers: {
    show: (state) => {
      state.isNew = !state.isNew;
    },
  },
});

export const { show } = newMessSlice.actions;
export const getNewMess = (state: RootState) => state.newMess;
export default newMessSlice.reducer;
