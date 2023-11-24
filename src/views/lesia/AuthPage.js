import { NavLink, useNavigate } from "react-router-dom";
// import { Button } from "./Button";
import styles from "./Form.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { setUser } from "../../store/slices/userSlice";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { setUser } from "../../store/slices/userSlice";
import { auth } from "../../firebase";

export const AuthPage = ({ isLoginMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordrepeat, setPasswordrepeat] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState("   ");

  const handleLogin = (email, password) => {

    if (!email) {
      setErrorText("Введите email");
      return;
    }

    if (!password) {
      setErrorText("Введите пароль");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        dispatch(
          setUser({
            email: response.user.email,
            id: response.user.uid,
          })
        );
        localStorage.setItem("email", response.user.email);
        localStorage.setItem("id", response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        if (error.message.includes("auth/invalid")) {
          setErrorText("Не верный E-mail/пароль или Вы не зарегистрированы");
        }
      })
  };

  const handleRegister = (email, password) => {

    if (!email) {
      setErrorText("Введите email");
      return;
    }

    if (!password) {
      setErrorText("Введите пароль");
      return;
    }

    if (!passwordrepeat) {
      setErrorText("Введите повторный пароль")
      return
    }

    if(password === passwordrepeat) {
      createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          })
        );
        localStorage.setItem("email", user.email);
        localStorage.setItem("id", user.uid);
        navigate("/");
      })
      .catch((error) => {
        if (error.message.includes("email-already-in-use")) {
          setErrorText("Такой пользователь уже есть");
          return
        }
        if (error.message.includes("invalid-email")) {
          setErrorText("Введен не корректный email");
          return
        }
      });
    } else {
      setErrorText("Пароли не совпадают");
    }

    
  };

  return (
    <div className={styles.page}>
      <div className={styles.authForm}>
        <div className={styles.logoBox}>
          <img src="img/logoblack.svg" alt="logo" />
        </div>
        <div className={styles.inputBox}>
          <input
            className={styles.inputForm}
            value={email}
            type="text"
            name="login"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorText("");
            }}
          ></input>

          <input
            className={styles.inputForm}
            value={password}
            type="password"
            name="password"
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {!isLoginMode && (
            <input
              className={styles.inputForm}
              value={passwordrepeat}
              type="password"
              name="password"
              placeholder="Повторите пароль"
              onChange={(e) => setPasswordrepeat(e.target.value)}
            ></input>
          )}
        </div>

        {errorText ? (
          <p
            className={styles.error}
          >
            {errorText}
          </p>
        ) : (
          <p className={styles.error}></p>
        )}

        {isLoginMode ? (
          <>
            <button
              className={styles.button}
              onClick={() => {
                handleLogin(email, password);
              }}
            >
              Войти
            </button>
            {/* <Button text="Войти" /> */}
            <NavLink
              to="/register"
              className={styles.buttonSignup}
              style={{ marginBottom: "0" }}
              onClick={() => {
                setErrorText(null);
              }}
            >
              Зарегистрироваться
            </NavLink>
          </>
        ) : (
          <button
            className={styles.button}
            onClick={() => {
              handleRegister(email, password);
            }}
          >
            Зарегистрироваться
          </button>

          // <Button
          //   text="Зарегистрироваться"
          // />
        )}

      </div>
    </div>
  );
};
