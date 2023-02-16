import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'components/API/API';
import Notiflix from 'notiflix';

export const getContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await API.fetchAllContacts();
      return data;
    } catch (error) {
      Notiflix.Notify.failure(`'Opps... Error: ${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await API.postContact(contact);
      Notiflix.Notify.success('Contact added');
      return data;
    } catch (error) {
      Notiflix.Notify.failure(`'Opps... Error: ${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const data = await API.deleteContact(contactId);
      Notiflix.Notify.info('Contact deleted');
      return data;
    } catch (error) {
      Notiflix.Notify.failure(`'Opps... Error: ${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);
