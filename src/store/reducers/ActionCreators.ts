import { AppDistpatch } from "../store";
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = () => async (distpatch: AppDistpatch) => {
  try {
    distpatch(userSlice.actions.usersFetching());
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    distpatch(userSlice.actions.usersFetchingSuccess(response.data));
  } catch (error: any) {
    distpatch(userSlice.actions.usersFetchingError(error.message));
  }
};
