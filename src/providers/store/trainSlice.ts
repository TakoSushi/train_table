// import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TTrainsState } from '../../utils/types/';

const initialState: TTrainsState = [];

const trainsReducer = createSlice({
  name: 'train',
  initialState,
  reducers: {},
});

export default trainsReducer.reducer;
