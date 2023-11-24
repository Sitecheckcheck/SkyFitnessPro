import { Routes, Route } from "react-router-dom";
import { MainPage } from "./views/pasha/mainPage/mainPage";
import { AuthPage } from "./views/lesia/AuthPage";
import { ChangePassword } from "./views/lesia/ChangePassword";
import { ChangeLogin } from "./views/lesia/ChangeLogin";
import { Progress } from "./views/lesia/Progress";
import { ProtectedRoute } from "./views/lesia/ProtectedRoute";
import { WorkoutVideoPage } from "./views/nikita/workout-video-page";
import { ProfilePage } from "./views/pasha/ProfilePage/ProfilePage";
import { ProgressCheck } from "./views/lesia/ProgressCheck";
import { WorkoutDescriptionPage } from "./views/tanya/WorkoutDescriptionPage";
import { SelectWorkout } from "./views/lesia/SelectWorkout";
import { useDispatch } from "react-redux";
import { setUser } from "./store/slices/userSlice";

export const AppRoutes = () => {
  const isAllowed = Boolean(localStorage.getItem('email'))

  const dispatch = useDispatch();

  dispatch(
    setUser({
      email: localStorage.getItem('email'),
      id: localStorage.getItem('id'),
    })
  )


  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<AuthPage isLoginMode={true} />} />
      <Route path="/register" element={<AuthPage isLoginMode={false} />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/changeLogin" element={<ChangeLogin />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/progresscheck" element={<ProgressCheck />} />
      <Route path="/workout-description" element={<WorkoutDescriptionPage />} />
      <Route path="/select-workout" element={<SelectWorkout />} />
      <Route
        path="/workout-video"
        element={
          <ProtectedRoute redirectPath="/workout-description" isAllowed={isAllowed}>
            <WorkoutVideoPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute redirectPath="/" isAllowed={isAllowed}>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<MainPage />} />
    </Routes>
  );
};
