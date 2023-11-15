import { Button } from "./Button"
import styles from "./Form.module.css"

export const ChangePassword = () => {
  return (
    <div className={styles.page}>
      <div className={styles.authForm}>
        <div className={styles.logoBox}>
          <img src="img/logoblack.svg" alt="logo" />
        </div>
        <div className={styles.textForm}>Новый пароль:</div>
        <div className={styles.inputBox}>
          <input className={styles.inputForm} type="password" name="password" placeholder="Пароль"></input>
          <input className={styles.inputForm} type="password" name="password" placeholder="Новый пароль"></input>
        </div>
        <Button text="Сохранить" />
      </div>
    </div>
  )
}