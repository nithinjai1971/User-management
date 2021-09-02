import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
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

export const { setUsers, addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
