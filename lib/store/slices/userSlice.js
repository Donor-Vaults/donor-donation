"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSlice = exports.setUser = exports.logout = exports.default = exports.changeLoading = void 0;
var _toolkit = require("@reduxjs/toolkit");
var userSlice = (0, _toolkit.createSlice)({
  name: "user",
  initialState: {
    data: {},
    loading: true,
    isAuthenticated: false
  },
  reducers: {
    setUser: function setUser(state, action) {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload;
      state.loading = false;
      state.isAuthenticated = true;
    },
    changeLoading: function changeLoading(state, action) {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loading = action.payload;
    },
    logout: function logout(state) {
      state.data = null;
    }
  }
});

// Action creators are generated for each case reducer function
exports.userSlice = userSlice;
var _userSlice$actions = userSlice.actions,
  setUser = _userSlice$actions.setUser,
  logout = _userSlice$actions.logout,
  changeLoading = _userSlice$actions.changeLoading;
exports.changeLoading = changeLoading;
exports.logout = logout;
exports.setUser = setUser;
var _default = userSlice.reducer;
exports.default = _default;