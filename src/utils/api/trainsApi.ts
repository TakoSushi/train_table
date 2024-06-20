import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dataTrainsUrl } from "../constants/constants";
import { TTrainsState } from "../types";

export const trainsApi = createApi({
  reducerPath: "trainsApi",
  baseQuery: fetchBaseQuery({ baseUrl: dataTrainsUrl }),
  endpoints: (builder) => ({
    getTrains: builder.query<TTrainsState, void>({
      query: () => "orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json",
    }),
  }),
});

export const { useGetTrainsQuery } = trainsApi;
