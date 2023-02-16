import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'components/API/API';
import Notiflix from 'notiflix';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, {rejectWithValue}) => {
    try {
      const data = await API.registerUser(credentials);
      Notiflix.Notify.success('You registered successfully');
      return data;
    } catch (error) {
      Notiflix.Notify.failure(`'Opps... Error: ${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, {rejectWithValue}) => {
    try {
      const data = await API.logInUser(credentials);
      Notiflix.Notify.success('You logined successfully');
      return data;
    } catch (error) {
      Notiflix.Notify.failure(`'Opps... Error: ${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, {rejectWithValue}) => {
  try {
    API.logOutUser();
  } catch (error) {
    Notiflix.Notify.failure(`'Opps... Error: ${error.message}`);
    return rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunk) => {
    const state = thunk.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunk.rejectWithValue('Unable to fetch user');
    }
    API.setAuthHeader(persistedToken);
    try {
      const data = await API.userRefresh()
      return data;
    } catch (error) {
      Notiflix.Notify.failure(`'Opps... Error: ${error.message}`);
      return thunk.rejectWithValue(error.message);
    }
  }
);