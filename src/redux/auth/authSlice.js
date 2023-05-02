import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations.js';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoaggedIn: false,
    isRefreshing: false,
  },
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoaggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
