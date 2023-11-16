import { Button } from "./Button"
import styles from "./Form.module.css"

export const ChangeLogin = () => {
  return (
    <div className={styles.page}>
      <div className={styles.authForm}>
        <div className={styles.logoBox}>
          <img src="img/logoblack.svg" alt="logo" />
        </div>
        <div className={styles.textForm}>Новый логин:</div>
        <div className={styles.inputBox}>
          <input className={styles.inputForm} type="text" name="login" placeholder="Логин"></input>
        </div>
        <Button text="Сохранить" />
      </div>
    </div>
  )
}