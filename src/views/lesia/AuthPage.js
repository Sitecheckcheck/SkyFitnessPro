import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slices/userSlice";
import { useState } from "react";

import styles from "./Form.module.css"

export const AuthPage = ({isLoginMode}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      console.log(user)
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.accessToken,
        pass: password,
      }))
      navigate('/profile');
    })
    .catch(console.error);
    
  };

  const handleSignin = () =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.accessToken,
        pass: password,
      }))
      navigate('/profile');
    })
    .catch(console.error)
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
            type="text" name="login"
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
            onChange={(event) => {setPassword(event.target.value)}}
          />
          { !isLoginMode && (
            <input className={styles.inputForm} type="password" name="password" placeholder="Повторите пароль"></input>
          )}
        </div>
        {isLoginMode ? (
          <>
            <Button text="Войти" onClick={() => handleLogin(email, password)}/>
            <NavLink to="/register" className={styles.buttonSignup}>
              Зарегистрироваться
            </NavLink>
          </>
        ) : (<Button text="Зарегистрироваться" onClick={() => handleSignin(email, password)}/>)
        }
      </div>
    </div>
  )
}