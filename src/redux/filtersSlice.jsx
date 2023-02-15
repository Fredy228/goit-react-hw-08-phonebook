import { createSlice } from '@reduxjs/toolkit';

export const filterReducer = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    handleChangeFilter: (state, action) => {
      return { value: action.payload };
    },
  },
});

export const { handleChangeFilter } = filterReducer.actions;


