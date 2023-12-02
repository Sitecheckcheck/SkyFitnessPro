import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/userSlice";
import courseReduser from "./slices/courseSlise";
import { coursesApi } from "./coursesApi";
import { UserCoursesApi } from "./userCoursApi";
import { workoutsApi } from "./workoutsApi";

export const store = configureStore({
  reducer: {
    [coursesApi.reducerPath]: coursesApi.reducer,
    [UserCoursesApi.reducerPath]: UserCoursesApi.reducer,
    [workoutsApi.reducerPath]: workoutsApi.reducer,
    user: userReduser,
    course: courseReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      coursesApi.middleware,
      UserCoursesApi.middleware,
      workoutsApi.middleware
    ),
});
