import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  username: "",
  email: "",
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value.username = action.payload.username;
      state.value.password = action.payload.password;
      state.value.isLoggedIn = action.payload.isLoggedIn;
      window.localStorage.setItem("isLoggedIn", JSON.stringify(true));
    },
    logout: (state) => {
      state.value = initialStateValue;
      window.localStorage.removeItem("isLoggedIn");
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
