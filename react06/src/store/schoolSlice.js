import { createSlice } from '@reduxjs/toolkit';

const schoolSlice = createSlice({
  name: 'school',
  initialState: {
    name: '徐坤大学',
    address: '徐坤村',
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
  },
});

export const { reducer: schoolReducer } = schoolSlice;
export const { setName: setSchoolName, setAddress: setSchoolAddress } = schoolSlice.actions;
