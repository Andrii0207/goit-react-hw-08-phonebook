import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { deleteContact, fetchContacts } from '../service/operations';

const initialContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  extraReducers: {
    [fetchContacts.pending](state, _) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.error = payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
      state.isLoading = false;
      state.error = null;
    },
    [deleteContact.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['items'],
// };

// export const { addContact, deleteContact } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;
// export const persistedReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );
