import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

const initialContactsState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.find(contact =>
          action.payload.name.toLowerCase() !== contact.name.toLowerCase()
            ? state.contacts.push(action.payload)
            : Notiflix.Notify.info('The contact is already in the contacts list'),
        );
      },
      prepare(data) {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
      deleteContact: {
        reducer(state, action) {
          state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
      },
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const { addContact, deleteContact } = contactSlice.actions;
export const persistedReducer = persistReducer(persistConfig, contactSlice.reducer);
