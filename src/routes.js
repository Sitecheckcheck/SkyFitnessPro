import { Routes, Route } from "react-router-dom";
import { MainPage } from "./views/pasha/mainPage/mainPage";
import { AuthPage } from "./pages/AuthPage";
import { ProtectedRoute } from "./components/protectedRout/ProtectedRoute";
import { WorkoutVideoPage } from "./views/nikita/workout-video-page";
import { ProfilePage } from "./views/pasha/ProfilePage/ProfilePage";
import { WorkoutDescriptionPage } from "./views/tanya/WorkoutDescriptionPage";
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
