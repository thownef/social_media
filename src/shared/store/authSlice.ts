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
      const { user, accessToken, loginAt } = action.payload;

      localStorage.setItem("bearer_token", accessToken);
      localStorage.setItem("login_at", loginAt);

      state.user = user;
    },
    logout: (state) => {
      localStorage.removeItem("bearer_token");
      localStorage.removeItem("login_at");

      state.user = null;
    },
    setUser: (state, action) => {
      state.user = action.payload
    }
  },
});

export const { login, logout, setUser } = userSlice.actions;

export default userSlice.reducer;