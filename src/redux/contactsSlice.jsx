import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getContacts, addContact, deleteContact } from './operations';

const pendingFunc = state => {
  state.isLoading = true;
};

const rejectedFunc = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getContacts.pending]: pendingFunc,
    [getContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
      state.error = null;
    },
    [getContacts.rejected]: rejectedFunc,
    [addContact.pending]: pendingFunc,
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
      state.error = null;
    },
    [addContact.rejected]: rejectedFunc,
    [deleteContact.pending]: pendingFunc,
    [deleteContact.fulfilled]: (state, { payload }) => {
      let contacts = state.items.filter(contact => contact.id !== payload.id);
      state.isLoading = false;
      state.error = null;
      state.items = contacts;
    },
    [deleteContact.rejected]: rejectedFunc,
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);


