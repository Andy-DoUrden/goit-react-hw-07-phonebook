import { createSlice } from '@reduxjs/toolkit';

const filterValueSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterChange } = filterValueSlice.actions;
export const filterReducer = filterValueSlice.reducer;
