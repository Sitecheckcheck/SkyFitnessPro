import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserCoursesApi = createApi({
  reducerPath: "UserCoursesApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://fitness-pro-9ddc8-default-rtdb.europe-west1.firebasedatabase.app/",
  }),
  endpoints: (builder) => ({
    getUserCourses: builder.query({
      query: () => "users.json",
    }),
  }),
});

export const {useGetUserCoursesQuery} = UserCoursesApi;
