import { configureStore } from "@reduxjs/toolkit";
import { trainsApi } from "../../utils/api/trainsApi";
import submitButtonReducer from "./submitButtonSlice";

export const store = configureStore({
  reducer: {
    submitBtn: submitButtonReducer,
    [trainsApi.reducerPath]: trainsApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trainsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

