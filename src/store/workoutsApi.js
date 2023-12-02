import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const workoutsApi = createApi({
  reducerPath: "workoutsApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://fitness-pro-9ddc8-default-rtdb.europe-west1.firebasedatabase.app/",
  }),
  endpoints: (builder) => ({
    getAllWorkouts: builder.query({
      query: () => "workouts.json",
    }),
  }),
});

export const { useGetAllWorkoutsQuery } = workoutsApi;
