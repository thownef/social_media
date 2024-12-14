import { createSlice } from '@reduxjs/toolkit'
export interface LoadingState {
  isLoading: boolean;
  countRequest: number;
}

const initialState: LoadingState = {
  isLoading: false,
  countRequest: 0,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    incrementCountRequest: (state) => {
      state.countRequest += 1;
    },
    decrementCountRequest: (state) => {
      state.countRequest -= 1;
    },
    resetCountRequest: (state) => {
      state.countRequest = 0;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLoading, incrementCountRequest, decrementCountRequest, resetCountRequest } = loadingSlice.actions;

export default loadingSlice.reducer