import { createSlice } from "@reduxjs/toolkit";
import { getUserByUsernameThunk } from "./thunks";
import { User } from "../../types/user";

interface IState {
  user: User | null;
  isLoading: boolean;
  error: boolean | string;
}

const initialState: IState = {
  isLoading: false,
  user: null,
  error: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getUserByUsernameThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getUserByUsernameThunk.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(getUserByUsernameThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        state.error = false;
      }),
});

export default usersSlice;
