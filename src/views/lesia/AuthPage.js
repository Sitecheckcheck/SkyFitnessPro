import { NavLink } from "react-router-dom"
import { Button } from "./Button"
import styles from "./Form.module.css"

export const AuthPage = ({isLoginMode}) => {
  return (
    <div className={styles.page}>
      <div className={styles.authForm}>
        <div className={styles.logoBox}>
          <img src="img/logoblack.svg" alt="logo" />
        </div>
        <div className={styles.inputBox}>
          <input className={styles.inputForm} type="text" name="login" placeholder="Логин"></input>
          <input className={styles.inputForm} type="password" name="password" placeholder="Пароль"></input>
          { !isLoginMode && (
            <input className={styles.inputForm} type="password" name="password" placeholder="Повторите пароль"></input>
          )}
        </div>
        {isLoginMode ? (
          <>
            <Button text="Войти" />
            <NavLink to="/register" className={styles.buttonSignup}>
              Зарегистрироваться
            </NavLink>
          </>
        ) : (<Button text="Зарегистрироваться" />)
        }
      </div>
    </div>
  )
}