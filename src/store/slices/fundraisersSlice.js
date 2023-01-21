import { createSlice } from "@reduxjs/toolkit";

export const fundraisersSlice = createSlice({
  name: "fundraiser",
  initialState: {
    data: [],
    loading: true,
    
  },
  reducers: {
    setGlobalFundraisers: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = action.payload;
      console.log("setGlobalFundraisers",action.payload)
      state.loading = false;
   
    },
    changeLoading : (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loading = action.payload;
  
   
   
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { setGlobalFundraisers ,changeLoading} = fundraisersSlice.actions;

export default fundraisersSlice.reducer;
