import { Routes, Route } from "react-router-dom";
import { MainPage } from "../src/pages/mainPage/mainPage";
import { AuthPage } from "./pages/AuthPage";
import { ProtectedRoute } from "./components/protectedRout/ProtectedRoute";
import { WorkoutVideoPage } from "../src/pages/workout-video-page/workout-video-page";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { WorkoutDescriptionPage } from "../src/pages/workout-description-page/WorkoutDescriptionPage";
import { SelectWorkout } from "./components/selectWorkout/SelectWorkout";
import { useAuth } from "./hooks/use-auth";

export const AppRoutes = () => {
  const { isAuth, email } = useAuth();
  console.log(isAuth, email);
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<AuthPage isLoginMode={true} />} />
      <Route path="/register" element={<AuthPage isLoginMode={false} />} />
      <Route
        path="/workout-description/:id"
        element={<WorkoutDescriptionPage />}
      />
      <Route path="/select-workout" element={<SelectWorkout />} />
      <Route
        path="/workout-video"
        element={
          <ProtectedRoute
            redirectPath="/workout-description/:id"
            isAllowed={isAuth}
          >
            <WorkoutVideoPage login={email} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute redirectPath="/" isAllowed={isAuth}>
            <ProfilePage login={email} />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<MainPage />} />
    </Routes>
  );
};
