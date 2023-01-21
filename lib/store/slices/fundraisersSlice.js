"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGlobalFundraisers = exports.fundraisersSlice = exports.default = exports.changeLoading = void 0;
var _toolkit = require("@reduxjs/toolkit");
var fundraisersSlice = (0, _toolkit.createSlice)({
  name: "fundraiser",
  initialState: {
    data: [],
    loading: true
  },
  reducers: {
    setGlobalFundraisers: function setGlobalFundraisers(state, action) {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = action.payload;
      console.log("setGlobalFundraisers", action.payload);
      state.loading = false;
    },
    changeLoading: function changeLoading(state, action) {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loading = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
exports.fundraisersSlice = fundraisersSlice;
var _fundraisersSlice$act = fundraisersSlice.actions,
  setGlobalFundraisers = _fundraisersSlice$act.setGlobalFundraisers,
  changeLoading = _fundraisersSlice$act.changeLoading;
exports.changeLoading = changeLoading;
exports.setGlobalFundraisers = setGlobalFundraisers;
var _default = fundraisersSlice.reducer;
exports.default = _default;