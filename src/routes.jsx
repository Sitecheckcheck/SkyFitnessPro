import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/mainPage/mainPage";
import { AuthPage } from "./pages/AuthPage";
import { ProtectedRoute } from "./components/ProtectedRout/ProtectedRoute";
import { WorkoutVideoPage } from "./pages/WorkoutVideoPage/WorkoutVideoPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { WorkoutDescriptionPage } from "./pages/WorkoutDescriptionPage/WorkoutDescriptionPage";
import { SelectWorkout } from "./components/selectWorkout/SelectWorkout";
import { useAuth } from "./hooks/use-auth";

export const AppRoutes = () => {
  const { isAuth, email } = useAuth();

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
        path="/workout-video/:id"
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
