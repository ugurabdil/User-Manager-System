import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users:[],
    removeUsers:[],
  
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser:(state,action)=>{
        state.users= [...state.users, action.payload]
    },
    removeUser:(state,action)=>{
      state.users=[...state.users.filter((user)=>user.id!==action.payload)]
    },
    allUsersRemove:(state)=>{state.users=[];
    },
    searchUsers: (state, action) => {
      state.searchResults = state.users.filter(user =>
        user.userName.includes(action.payload) ||
        user.tckn.includes(action.payload) ||
        user.name.includes(action.payload) ||
        user.phone.includes(action.payload) ||
        user.mail.includes(action.payload)
      );

    }
  },
})


export const {createUser,removeUser,allUsersRemove,searchUsers} = userSlice.actions

export default userSlice.reducer