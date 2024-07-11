import { createSlice } from '@reduxjs/toolkit'

const getCreateUserStorage = () => {
  if (localStorage.getItem("createUserStorage")) {
    return JSON.parse(localStorage.getItem("createUserStorage"));
  }
  return [];
}

const initialState = {
  users: getCreateUserStorage(),
  searchResults: []
}

const writeCreateUserStorage = (users) => {
  localStorage.setItem("createUserStorage", JSON.stringify(users));
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.users = [...state.users, action.payload];
      writeCreateUserStorage(state.users);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
      writeCreateUserStorage(state.users);
    },
    allUsersRemove: (state) => {
      state.users = [];
      writeCreateUserStorage(state.users);
    },
    searchUsers: (state, action) => {
      state.searchResults = state.users.filter(user =>
        user.userName.includes(action.payload) ||
        user.tckn.includes(action.payload) ||
        user.name.includes(action.payload) ||
        user.phone.includes(action.payload) ||
        user.mail.includes(action.payload)
      );
    },
    updatedUser:(state,action)=>{
      state.users=[...state.users.map((user) => user.id!==action.payload.id? user :action.payload)]
     writeCreateUserStorage(state.users);
    }
    }
  }
)

export const { createUser, removeUser, allUsersRemove, searchUsers,updatedUser } = userSlice.actions;

export default userSlice.reducer;
