import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from '../service/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
      state.isLoading = false;
      state.error = null;
    },
    [deleteContact.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, { payload }) {
      state.items = state.items.find(
        item => item.name.toLowerCase() === payload.name.toLowerCase()
      )
        ? alert(`Name ${payload.name} is already in contacts`)
        : [...state.items, payload];
      state.isLoading = false;
      state.error = null;
    },
    [addContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
