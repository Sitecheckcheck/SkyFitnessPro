import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/userSlice";
import { coursesApi } from "./coursesApi";
import { UserCoursesApi } from "./userCoursApi";

export const store = configureStore({
  reducer: {
    [coursesApi.reducerPath]: coursesApi.reducer,
    [UserCoursesApi.reducerPath]: UserCoursesApi.reducer,
    user: userReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coursesApi.middleware, UserCoursesApi.middleware),
});
