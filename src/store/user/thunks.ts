import { createAsyncThunk } from "@reduxjs/toolkit";
// import { API } from "config/api";
// import { API_ROUTES } from "config/apiRoutes";
// import { IAdminChangePassword } from "types/auth";
// import { IPaginate } from "types/pagination";
// import { IUsersListQueryData, User } from "types/users";
import usersSlice from "./slice";
import { octokit } from "../../api";

/**
 * @description Dispatch this thunk to get user by username
 * @param {string} username - String username to find user
 */
export const getUserByUsernameThunk = createAsyncThunk(
  "users/getUserByIdThunk",
  async (username: string, { rejectWithValue }) => {
    try {
      const { data } = await octokit.request(`GET /users/${username}`, {
        username: "USERNAME",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
