import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type sliceState = {
  isValid: boolean
};

const initialState: sliceState = {
  isValid: false
};

export const submitButtonReducer = createSlice({
  name: 'buttonState',
  initialState,
  reducers: {
    updateValue: (state, action: PayloadAction<boolean>) => {
      state.isValid = action.payload
    },
  },
});

export const { updateValue } = submitButtonReducer.actions;

export default submitButtonReducer.reducer;
