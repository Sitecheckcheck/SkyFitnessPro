import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { useDispatch } from "react-redux";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { setUser } from "../store/slices/userSlice";
import { useState, useEffect } from "react";

import styles from "../styles/Form.module.css";

export const AuthPage = ({ isLoginMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const auth = getAuth();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Укажите почту/пароль");
      return;
    }

    if (email.length < 3) {
      setError("Введенный E-mail слишком короткий");
      return;
    }

    if (password.length < 6) {
      setError("Введенный пароль слишком короткий");

      return;
    }

    setIsSubmiting(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setIsSubmiting(false);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            pass: password,
          })
        );
        localStorage.setItem("email", user.email);
        localStorage.setItem("id", user.uid);
        localStorage.setItem("token", user.accessToken);
        navigate("/profile");
      })
      .catch((error) => {
        setIsSubmiting(false);
        if (
          error.message.includes("user-not-found") ||
          error.message.includes("auth/wrong-password")
        ) {
          setError("Не верный E-mail/пароль");
        } else {
          setError(error.message);
        }
      });
  };

  const handleSignin = () => {
    if (!email || !password) {
      setError("Укажите почту/пароль");
      return;
    }

    if (password !== repeatPassword) {
      setError("Пароли не совпадают");
      return;
    }

    if (email.length < 3) {
      setError("Введенный E-mail слишком короткий");
      return;
    }

    if (password.length < 6) {
      setError("Введенный пароль слишком короткий");

      return;
    }

    setIsSubmiting(true);
    setError("");

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            pass: password,
          })
        );
        setIsSubmiting(false);
        localStorage.setItem("email", user.email);
        localStorage.setItem("id", user.uid);
        localStorage.setItem("token", user.accessToken);
        navigate("/profile");
      })
      .catch((error) => {
        if (error.message.includes("email-already-in-use")) {
          setError("Такой пользователь уже существует");
        } else if (error.message.includes("auth/invalid-email")) {
          setError("Введен некорректный email");
        } else {
          setError(error.message);
        }
        setIsSubmiting(false);
      });
  };

  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <div className={styles.page}>
      <div className={styles.authForm}>
        <div className={styles.logoBox}>
          <img src="img/logoblack.svg" alt="logo" />
        </div>
        <div className={styles.inputBox}>
          <input
            className={styles.inputForm}
            type="text"
            name="login"
            placeholder="Логин"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className={styles.inputForm}
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          {!isLoginMode && (
            <input
              className={styles.inputForm}
              type="password"
              name="password"
              placeholder="Повторите пароль"
              value={repeatPassword}
              onChange={(event) => {
                setRepeatPassword(event.target.value);
              }}
            />
          )}
        </div>
        {error && <div className={styles.inputError}>{error}</div>}

        {isLoginMode ? (
          <>
            <Button
              text={isSubmiting ? "Логинимся" : "Войти"}
              onClick={() => handleLogin(email, password)}
            />
            <NavLink to="/register" className={styles.buttonSignup}>
              Зарегистрироваться
            </NavLink>
          </>
        ) : (
          <Button
            text="Зарегистрироваться"
            onClick={() => handleSignin(email, password)}
          />
        )}
      </div>
    </div>
  );
};
