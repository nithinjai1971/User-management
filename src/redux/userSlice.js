import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const userSlice = createSlice({
  name: "users",
  initialState: [
    { id: uuidv4(), name: "Jane", email: "jane@gmail.com" },
    { id: uuidv4(), name: "Chris", email: "Chris@gmail.com" },
    { id: uuidv4(), name: "John", email: "john@gmail.com" },
    { id: uuidv4(), name: "Rose", email: "rose@gmail.com" },
    { id: uuidv4(), name: "Jack", email: "jack@gmail.com" },
  ],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        } else {
          return user;
        }
      });
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
