import { Routes, Route } from "react-router-dom";
import { MainPage } from "./views/pasha/mainPage";
import { AuthPage } from "./views/lesia/AuthPage";
import { ChangePassword } from "./views/lesia/ChangePassword";
import { ChangeLogin } from "./views/lesia/ChangeLogin";
import { Progress } from "./views/lesia/Progress";
import { ProtectedRoute } from "./views/lesia/ProtectedRoute";
import { WorkoutVideoPage } from "./views/tanya/WorkoutVideoPage";
import { ProfilePage } from "./views/lesia/ProfilePage";
import { ProgressCheck } from "./views/lesia/ProgressCheck";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<AuthPage isLoginMode={true}/>} />
      <Route path="/register" element={<AuthPage isLoginMode={false} />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/changeLogin" element={<ChangeLogin />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/progresscheck" element={<ProgressCheck />} />
      <Route
        path="/workout-video"
        element={
          <ProtectedRoute redirectPath="/workout-description" isAllowed={true}>
            <WorkoutVideoPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute redirectPath="/" isAllowed={true}>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<MainPage />} />
    </Routes>
  );
};