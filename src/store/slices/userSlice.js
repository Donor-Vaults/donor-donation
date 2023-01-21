import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: {},
    loading: true,
    isAuthenticated:false,
    
  },
  reducers: {
    setUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload;
      state.loading = false;
      state.isAuthenticated = true;
   
    },
    changeLoading : (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loading = action.payload;
  
   
   
    },
    logout: (state) => {
      state.data = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logout ,changeLoading} = userSlice.actions;

export default userSlice.reducer;
