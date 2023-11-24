import { Button } from "./Button"
import styles from "./Form.module.css"

export const Progress = () => {
  return (
    <div className={styles.page}>
      <div className={styles.progressForm}>
        <div className={styles.headerForm}>Мой прогресс</div>
        <div className={styles.textForm}>Сколько раз вы сделали наклоны вперед?</div>
        <div className={styles.inputBox}>
          <input className={styles.inputForm} type="text" name="quantity" placeholder="Введите значение"></input>
        </div>
        <div className={styles.textForm}>Сколько раз вы сделали наклоны назад?</div>
        <div className={styles.inputBox}>
          <input className={styles.inputForm} type="text" name="quantity" placeholder="Введите значение"></input>
        </div>
        <div className={styles.textForm}>Сколько раз вы сделали поднятие ног, согнутых в коленях?</div>
        <div className={styles.inputBox}>
          <input className={styles.inputForm} type="text" name="quantity" placeholder="Введите значение"></input>
        </div>
        <Button text="Отправить" onClick={console.log('send')}/>
      </div>
    </div>
  )
}