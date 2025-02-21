import { User } from "@/shared/core/types";
import { createSlice } from "@reduxjs/toolkit";

export interface AuthSlice {
  user: null | User;
}

const initialState: AuthSlice = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { user, accessToken } = action.payload;
      localStorage.setItem("accessToken", accessToken);
      document.cookie = `accessToken=${accessToken}; max-age=${7 * 24 * 60 * 60}; path=/`;
      state.user = user;
    },
    logout: (state) => {
      localStorage.removeItem("accessToken");
      document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
      state.user = null;
    },
    setUser: (state, action) => {
      state.user = action.payload
    }
  },
});

export const { login, logout, setUser } = userSlice.actions;

export default userSlice.reducer;
