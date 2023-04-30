import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoaggedIn: false,
    isRefreshing: false,
  },
  extraRedusers: {},
});
